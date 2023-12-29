import { objMuscles } from "../../../data/muscles.js";
import { shuffle, intersects } from "../../utils.js";

export function getOtherMusclesWithSimilarFunctions(correctMuscle, quizMuscles, quizMuscleFunctions) {

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
                        .map(muscleFunction => objMuscles[muscleFunction.muscleId])
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
                        .map(muscleFunction => objMuscles[muscleFunction.muscleId])
                    )
                )
            );
    }

    const callbacks = !correctMuscle.functions.length ? [
        // If the correct muscle has no joint functions, assume that it has special functions
        getOtherMusclesWithSameSpecialFunctions,
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
    }

    return otherMuscles;
}

export function isMusclePlural(muscle) {
    return muscle.label.includes('mm.');
}