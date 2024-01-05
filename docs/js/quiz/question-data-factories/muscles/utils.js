import { objMuscles, arrMuscles } from "../../../data/muscles.js";
import muscleFunctions from "../../../data/muscle-functions.js";
import { shuffle, intersects } from "../../utils.js";
import { objJoints } from "../../../data/joints.js";

export function isMusclePlural(muscle) {
    return muscle.label.includes('mm.');
}

export function getOtherMusclesWithSimilarFunctions({correctMuscle, customCallbacks = [], priorityArea = null}) {
    function baseFilter(muscle, mustHaveJointFunctions, mustHaveSpecialFunctions, ignoreMuscles) {
        return muscle.id !== correctMuscle.id
            && (!mustHaveJointFunctions || muscle.functions.length > 0)
            && (!mustHaveSpecialFunctions || muscle.specialFunctions.length > 0)
            && !ignoreMuscles.some(ignoreMuscle => ignoreMuscle.id === muscle.id);
    }

    function getOtherMusclesWithSameSpecialFunctions(ignoreMuscles) {
        if(!correctMuscle.specialFunctions.length) {
            return [];
        }

        return shuffle(
            arrMuscles.filter(muscle =>
                baseFilter(muscle, false, true, ignoreMuscles)
                && intersects(
                    muscle.specialFunctions.map(specialFunction => specialFunction.functionDescription),
                    correctMuscle.specialFunctions.map(specialFunction => specialFunction.functionDescription)
                )
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

    function getOtherMusclesWithinTheSameRegion(mustHaveJointFunctions, mustHaveSpecialFunctions, ignoreMuscles) {
        return shuffle(
            arrMuscles.filter(muscle =>
                baseFilter(muscle, mustHaveJointFunctions, mustHaveSpecialFunctions, ignoreMuscles)
                && intersects(muscle.getRegionIds(objJoints), correctMuscle.getRegionIds(objJoints))
            )
        );
    }

    function getOtherMusclesWithinTheSameRegionAndWithJointFunctions(ignoreMuscle) {
        return getOtherMusclesWithinTheSameRegion(true, false, ignoreMuscle);
    }

    function getOtherMusclesWithinTheSameRegionAndWithSpecialFunctions(ignoreMuscle) {
        return getOtherMusclesWithinTheSameRegion(false, true, ignoreMuscle);
    }

    function getOtherMuscles(mustHaveJointFunctions, mustHaveSpecialFunctions, ignoreMuscles) {
        return shuffle(
            arrMuscles.filter(muscle => baseFilter(muscle, mustHaveJointFunctions, mustHaveSpecialFunctions, ignoreMuscles))
        );
    }

    function getOtherMusclesWithJointFunctions(ignoreMuscle) {
        return getOtherMuscles(true, false, ignoreMuscle);
    }

    function getOtherMusclesWithSpecialFunctions(ignoreMuscle) {
        return getOtherMuscles(false, true, ignoreMuscle);
    }

    function createCallbackChain() {
        // Focus on special functions, either because the correct muscle has no joint functions or because of the priority area.
        if(!correctMuscle.functions.length || priorityArea === 'specialFunctions') {
            return [
                ...customCallbacks,
                getOtherMusclesWithSameSpecialFunctions,
                getOtherMusclesWithinTheSameRegionAndWithSpecialFunctions,
                getOtherMusclesWithSpecialFunctions,
            ];
        }

        // Focus on joint functions, either because the correct muscle has no special functions or because of the priority area.
        if(!correctMuscle.specialFunctions.length || priorityArea === 'jointFunctions') {
            return [
                ...customCallbacks,
                getOtherMusclesWithSameJointFunctions,
                getOtherMusclesRelatedToSameJoints,
                getOtherMusclesWithinTheSameRegionAndWithJointFunctions,
                getOtherMusclesWithJointFunctions,
            ];
        }

        // Fallback when there is no clear focus.
        return [
            ...customCallbacks,
            getOtherMusclesWithSameSpecialFunctions,
            getOtherMusclesWithSameJointFunctions,
            getOtherMusclesRelatedToSameJoints,
            getOtherMusclesWithinTheSameRegionAndWithSpecialFunctions,
            getOtherMusclesWithinTheSameRegionAndWithJointFunctions,
            getOtherMusclesWithSpecialFunctions,
            getOtherMusclesWithJointFunctions,
        ];
    }

    let otherMuscles = [];

    for(const callback of createCallbackChain()) {
        otherMuscles = [...otherMuscles, ...callback(otherMuscles)];
    }

    return otherMuscles;
}
