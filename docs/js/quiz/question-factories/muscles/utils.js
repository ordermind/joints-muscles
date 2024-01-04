import { objMuscles, arrMuscles } from "../../../data/muscles.js";
import muscleFunctions from "../../../data/muscle-functions.js";
import { shuffle, intersects } from "../../utils.js";

export function getOtherMusclesWithSimilarFunctions(correctMuscle, maxLength = 20) {
    function getOtherMusclesWithSameSpecialFunctions(ignoreMuscles) {
        if(!correctMuscle.specialFunctions.length) {
            return [];
        }

        return shuffle(
            arrMuscles.filter(muscle =>
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
            arrMuscles.filter(muscle =>
                muscle.id !== correctMuscle.id
                && !ignoreMuscles.some(ignoreMuscle => ignoreMuscle.id === muscle.id)
                && muscle.specialFunctions.length > 0
            )
        );
    }

    /**
     * Muscles related to prime mover functions are prioritized.
     */
    function getOtherMusclesWithSameJointFunctions(ignoreMuscles) {
        function getOtherMusclesWithCertainJointFunctions(correctMuscleFunctions, ignoreMuscles) {
            if(!correctMuscleFunctions.length) {
                return [];
            }

            return shuffle(
                Array.from(
                    new Set(
                        muscleFunctions
                            .filter(muscleFunction => {
                                return correctMuscleFunctions.some(correctMuscleFunction =>
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

        const primeMoverFunctions = correctMuscle.functions.filter(correctMuscleFunction => correctMuscleFunction.isPrimeMover === true);
        const assistantFunctions = correctMuscle.functions.filter(correctMuscleFunction => correctMuscleFunction.isPrimeMover === false);

        const musclesRelatedToPrimeMoverFunctions = getOtherMusclesWithCertainJointFunctions(primeMoverFunctions, ignoreMuscles);
        const musclesRelatedToAssistantFunctions = getOtherMusclesWithCertainJointFunctions(assistantFunctions, [...ignoreMuscles, ...musclesRelatedToPrimeMoverFunctions]);

        return [
            ...musclesRelatedToPrimeMoverFunctions,
            ...musclesRelatedToAssistantFunctions,
        ];
    }

    function getOtherMusclesRelatedToSameJoints(ignoreMuscles) {
        return shuffle(
            Array.from(
                new Set(
                    muscleFunctions
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

    function getOtherMusclesWithinTheSameRegion(ignoreMuscles) {
        return shuffle(
            arrMuscles.filter(muscle =>
                muscle.id !== correctMuscle.id
                && !ignoreMuscles.some(ignoreMuscle => ignoreMuscle.id === muscle.id)
                && intersects(muscle.regionIds, correctMuscle.regionIds)
            )
        );
    }

    function getOtherMusclesWithoutRestrictions(ignoreMuscles) {
        return shuffle(
            arrMuscles.filter(muscle =>
                muscle.id !== correctMuscle.id
                && !ignoreMuscles.some(ignoreMuscle => ignoreMuscle.id === muscle.id)
            )
        );
    }

    const callbacks = !correctMuscle.functions.length ? [
        // If the correct muscle has no joint functions, assume that it has special functions
        getOtherMusclesWithSameSpecialFunctions,
        getOtherMusclesWithSpecialFunctions,
        getOtherMusclesWithinTheSameRegion,
        getOtherMusclesWithoutRestrictions,
    ] : !correctMuscle.specialFunctions.length ? [
        // If the correct muscle has only joint functions, do not fetch muscles based on special functions
        getOtherMusclesWithSameJointFunctions,
        getOtherMusclesRelatedToSameJoints,
        getOtherMusclesWithinTheSameRegion,
        getOtherMusclesWithoutRestrictions,
    ] : [
        // If the correct muscles has both joint functions and special functions, fetch muscles based on both joint functions and special functions
        getOtherMusclesWithSameSpecialFunctions,
        getOtherMusclesWithSameJointFunctions,
        getOtherMusclesRelatedToSameJoints,
        getOtherMusclesWithSpecialFunctions,
        getOtherMusclesWithinTheSameRegion,
        getOtherMusclesWithoutRestrictions,
    ];

    let otherMuscles = [];

    for(const callback of callbacks) {
        otherMuscles = [...otherMuscles, ...callback(otherMuscles)];
        if(otherMuscles.length >= maxLength) {
            return otherMuscles;
        }
    }

    return otherMuscles;
}

export function isMusclePlural(muscle) {
    return muscle.label.includes('mm.');
}