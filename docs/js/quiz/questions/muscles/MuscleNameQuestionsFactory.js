import NextQuestionButton from "../NextQuestionButton.js";
import MultipleChoiceAnswer from "../MultipleChoiceAnswer.js";
import MultipleChoiceQuestionSingleAnswer from "../MultipleChoiceQuestionSingleAnswer.js";
import { shuffle } from "../../utils.js";
import muscles from "../../../data/muscles.js";

export default class MuscleNameQuestionFactory {
    #maxWrongAnswers = 5;

    #getOtherMusclesWithSimilarFunctions(correctMuscle, quizMuscles, quizMuscleFunctions) {
        if(!correctMuscle.functions.length) {
            return quizMuscles.filter(muscle => muscle.functions.length === 0 && muscle.id !== correctMuscle.id);
        }

        const otherMusclesWithSameFunctions = Array.from(
            new Set(
                quizMuscleFunctions
                    .filter(muscleFunction => {
                        return correctMuscle.functions.some(
                            correctMuscleFunction => correctMuscleFunction.movementId === muscleFunction.movementId
                            && correctMuscleFunction.muscleId !== muscleFunction.muscleId
                        );
                    })
                    .map(muscleFunction => muscles[muscleFunction.muscleId])
            )
        );

        if(otherMusclesWithSameFunctions.length >= this.#maxWrongAnswers) {
            return otherMusclesWithSameFunctions;
        }

        const otherMusclesWithSameJoints = Array.from(
            new Set(
                shuffle(
                    quizMuscleFunctions
                    .filter(muscleFunction => {
                        return correctMuscle.functions.some(
                            correctMuscleFunction => correctMuscleFunction.jointId === muscleFunction.jointId
                            && correctMuscleFunction.muscleId !== muscleFunction.muscleId
                            && !otherMusclesWithSameFunctions.some(otherMuscle => otherMuscle.id === muscleFunction.muscleId)
                        );
                    })
                )
                .slice(0, this.#maxWrongAnswers - otherMusclesWithSameFunctions.length)
                .map(muscleFunction => muscles[muscleFunction.muscleId])
            )
        );

        return [...otherMusclesWithSameFunctions, ...otherMusclesWithSameJoints];
    }

    create({quizMuscles, quizMuscleFunctions}) {
        return quizMuscles.map(correctMuscle => {
            const otherMusclesWithSimilarFunctions = this.#getOtherMusclesWithSimilarFunctions(correctMuscle, quizMuscles, quizMuscleFunctions);

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
                    nextQuestionButton: new NextQuestionButton({buttonText: "Volgende vraag"}),
                }
            );
        });
    }
}