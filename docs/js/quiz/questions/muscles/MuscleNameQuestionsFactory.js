import NextQuestionButton from "../NextQuestionButton.js";
import MultipleChoiceAnswer from "../MultipleChoiceAnswer.js";
import MultipleChoiceQuestionSingleAnswer from "../MultipleChoiceQuestionSingleAnswer.js";
import { shuffle } from "../../utils.js";
import muscles from "../../../data/muscles.js";

export default class MuscleNameQuestionFactory {
    #maxWrongAnswers = 5;

    #getOtherMusclesWithSimilarFunctions(correctMuscle, quizMuscles, quizMuscleFunctions) {
        if(!correctMuscle.functions.length) {
            return quizMuscles.filter(muscle => muscle.functions.length === 0);
        }

        return new Set(
            quizMuscleFunctions
                .filter(muscleFunction => {
                    return correctMuscle.functions.some(correctMuscleFunction => correctMuscleFunction.movementId === muscleFunction.movementId);
                })
                .map(muscleFunction => muscles[muscleFunction.muscleId])
        );
    }

    create({quizMuscles, quizMuscleFunctions}) {
        return muscles.map(correctMuscle => {
            const otherMusclesWithSimilarFunctions = this.#getOtherMusclesWithSimilarFunctions(correctMuscle, muscles, muscleFunctions);

            const correctAnswer = new MultipleChoiceAnswer(
                {
                    id: correctMuscle.id,
                    label: correctMuscle.label,
                    isCorrect: true,
                }
            );
            
            const wrongAnswers = shuffle(otherMusclesWithSimilarFunctions)
                .slice(0, this.#maxWrongAnswers)
                .map(otherMuscle => new MultipleChoiceAnswer(
                    {
                        id: otherMuscle.id,
                        label: otherMuscle.label,
                        isCorrect: false,
                    }
                ));

            return new MultipleChoiceQuestionSingleAnswer(
                {
                    correctAnswer,
                    wrongAnswers,
                    question: `
<h1 id="question-text" class="display-3 fs-3 mb-1 mt-n4 pt-4">Welke spier is dit?</h1>
<div class="quiz-image-wrapper">
    <img class="quiz-image" src="${correctMuscle.image}" />
</div>
                    `.trim(),
                    nextQuestionButton: new NextQuestionButton({buttonText: "Origo's en inserties"}),
                }
            );
        });
    }
}