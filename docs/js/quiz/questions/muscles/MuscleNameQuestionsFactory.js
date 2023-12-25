import NextQuestionButton from "../NextQuestionButton.js";
import MultipleChoiceAnswer from "../MultipleChoiceAnswer.js";
import MultipleChoiceQuestionSingleAnswer from "../MultipleChoiceQuestionSingleAnswer.js";
import { shuffle } from "../../utils.js";
import muscles from "../../../data/muscles.js";

export default class MuscleNameQuestionFactory {
    #maxWrongAnswers = 5;

    #getOtherMusclesWithSimilarFunctions(correctMuscle, quizMuscles, quizMuscleFunctions) {
        function getOtherMusclesWithoutJointFunctions(ignoreMuscles) {
            return shuffle(
                quizMuscles.filter(muscle => 
                    muscle.functions.length === 0 
                    && muscle.id !== correctMuscle.id
                    && !ignoreMuscles.some(ignoreMuscle => ignoreMuscle.id === muscle.id)
                )
            );
        }

        function getOtherMusclesWithSameJointFunctions(ignoreMuscles) {
            return shuffle(
                Array.from(
                    new Set(
                        quizMuscleFunctions
                            .filter(muscleFunction => {
                                return correctMuscle.functions.some(
                                    correctMuscleFunction => correctMuscleFunction.movementId === muscleFunction.movementId
                                    && correctMuscleFunction.muscleId !== muscleFunction.muscleId
                                    && !ignoreMuscles.some(ignoreMuscle => ignoreMuscle.id === muscleFunction.muscleId)
                                );
                            })
                            .map(muscleFunction => muscles[muscleFunction.muscleId])
                    )
                )
            );
        }

        function getOtherMusclesRelatedToSameJoints(ignoreMuscles) {
            return shuffle(
                Array.from(
                    new Set(
                            quizMuscleFunctions
                            .filter(muscleFunction => {
                                return correctMuscle.functions.some(
                                    correctMuscleFunction => correctMuscleFunction.jointId === muscleFunction.jointId
                                    && correctMuscleFunction.muscleId !== muscleFunction.muscleId
                                    && !ignoreMuscles.some(ignoreMuscle => ignoreMuscle.id === muscleFunction.muscleId)
                                );
                            })
                            .map(muscleFunction => muscles[muscleFunction.muscleId])
                        )
                    )
                );
        }

        const callbacks = !correctMuscle.functions.length ? [
            getOtherMusclesWithoutJointFunctions,
        ] : [
            getOtherMusclesWithSameJointFunctions,
            getOtherMusclesRelatedToSameJoints,
        ];

        let otherMuscles = [];

        for(const callback of callbacks) {
            otherMuscles = [...otherMuscles, ...callback(otherMuscles)];

            if(otherMuscles.length >= this.#maxWrongAnswers) {
                return otherMuscles.slice(0, this.#maxWrongAnswers);
            }
        }

        return otherMuscles;
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