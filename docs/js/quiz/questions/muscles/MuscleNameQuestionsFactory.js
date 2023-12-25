import NextQuestionButton from "../NextQuestionButton.js";
import MultipleChoiceAnswer from "../MultipleChoiceAnswer.js";
import MultipleChoiceQuestionSingleAnswer from "../MultipleChoiceQuestionSingleAnswer.js";
import { shuffle, intersects } from "../../utils.js";
import muscles from "../../../data/muscles.js";

export default class MuscleNameQuestionFactory {
    #maxWrongAnswers = 5;

    #getOtherMusclesWithSimilarFunctions(correctMuscle, quizMuscles, quizMuscleFunctions) {
        
        function getOtherMusclesWithoutJointFunctions(ignoreMuscles) {
            return shuffle(
                quizMuscles.filter(muscle => 
                    muscle.id !== correctMuscle.id
                    && !ignoreMuscles.some(ignoreMuscle => ignoreMuscle.id === muscle.id)
                    && muscle.functions.length === 0
                )
            );
        }

        function getOtherMusclesWithSameSpecialFunctions(ignoreMuscles) {
            if(!correctMuscle.specialFunctions.length) {
                return [];
            }

            return shuffle(
                quizMuscles.filter(muscle =>
                    muscle.id !== correctMuscle.id
                    && !ignoreMuscles.some(ignoreMuscle => ignoreMuscle.id === muscle.id)
                    && muscle.specialFunctions.length > 0
                    && intersects(
                        muscle.specialFunctions.map(specialFunction => specialFunction.functionDescription), 
                        correctMuscle.specialFunctions.map(specialFunction => specialFunction.functionDescription)
                    )
                )
            );
        }

        function getOtherMusclesWithSpecialFunctions(ignoreMuscles) {
            return shuffle(
                quizMuscles.filter(muscle =>
                    muscle.id !== correctMuscle.id
                    && !ignoreMuscles.some(ignoreMuscle => ignoreMuscle.id === muscle.id)
                    && muscle.specialFunctions.length > 0
                )
            );
        }

        function getOtherMusclesWithSameJointFunctions(ignoreMuscles) {
            return shuffle(
                Array.from(
                    new Set(
                        quizMuscleFunctions
                            .filter(muscleFunction => {
                                return correctMuscle.functions.some(correctMuscleFunction =>
                                    correctMuscleFunction.muscleId !== muscleFunction.muscleId
                                    && !ignoreMuscles.some(ignoreMuscle => ignoreMuscle.id === muscleFunction.muscleId)
                                    && correctMuscleFunction.movementId === muscleFunction.movementId
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
                                return correctMuscle.functions.some(correctMuscleFunction =>
                                    correctMuscleFunction.muscleId !== muscleFunction.muscleId
                                    && !ignoreMuscles.some(ignoreMuscle => ignoreMuscle.id === muscleFunction.muscleId)
                                    && correctMuscleFunction.jointId === muscleFunction.jointId
                                );
                            })
                            .map(muscleFunction => muscles[muscleFunction.muscleId])
                        )
                    )
                );
        }

        const callbacks = !correctMuscle.functions.length ? [
            // If the correct muscle has no joint functions, assume that it has special functions
            getOtherMusclesWithSameSpecialFunctions,
            getOtherMusclesWithoutJointFunctions,
            getOtherMusclesWithSpecialFunctions,
        ] : !correctMuscle.specialFunctions.length ? [
            // If the correct muscle has only joint functions, do not fetch muscles based on special functions
            getOtherMusclesWithSameJointFunctions,
            getOtherMusclesRelatedToSameJoints,
        ] : [
            // If the correct muscles has both joint functions and special functions, fetch muscles based on both joint functions and special functions
            getOtherMusclesWithSameSpecialFunctions,
            getOtherMusclesWithSameJointFunctions,
            getOtherMusclesRelatedToSameJoints,
            getOtherMusclesWithSpecialFunctions,
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