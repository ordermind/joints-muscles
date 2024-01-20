import muscleFunctions from "../../../data/muscle-functions.js";
import { intersects, shuffle } from "../../../utils.js";

export function isJointPlural(joint) {
    return joint.label.includes('artt.');
}

export function getSimilarJoints(correctJoint, quizJoints, maxLength = 5) {
    function baseFilter(joint, ignoreJoints) {
        return joint.id !== correctJoint.id
        && !ignoreJoints.some(ignoreJoint => ignoreJoint.id === joint.id);
    }

    function getOtherJointsWithSameNumberSuffix(ignoreJoints) {
        const regex = /\s[IVX]+$/;
        const numberSuffix = correctJoint.shortLabel.match(regex);
        if(numberSuffix === null) {
            return [];
        }

        return shuffle(
            quizJoints.filter(joint => {
                if(!baseFilter(joint, ignoreJoints)) {
                    return false;
                }

                const jointNumberSuffix = joint.shortLabel.match(regex);

                if(jointNumberSuffix === null) {
                    return false;
                }

                return jointNumberSuffix[0] === numberSuffix[0];
            })
        );
    }

    /**
     * I'm on the fence on this one because it causes unfortunate results with some joints such as art. subtalaris
     * where you just get a bunch of toe joints. For this reason I've chosen not to use it at this time.
     */
    function getOtherJointsWithSameMuscles(correctJointMuscleFunctions, ignoreJoints) {
        if(!correctJointMuscleFunctions.length) {
            return [];
        }

        const correctJointMuscleIds = Array.from(
            new Set(
                correctJointMuscleFunctions.map(muscleFunction => muscleFunction.muscleId)
            )
        );

        const output = shuffle(
            quizJoints.filter(joint => {
                if(!baseFilter(joint, ignoreJoints)) {
                    return false;
                }

                const jointMuscleIds = Array.from(
                    new Set(
                        muscleFunctions.filter(muscleFunction =>
                            muscleFunction.jointId === joint.id
                        )
                        .map(muscleFunction => muscleFunction.muscleId)
                    )
                );

                if(!jointMuscleIds.length) {
                    return false;
                }

                return intersects(correctJointMuscleIds, jointMuscleIds);
            })
        );

        return output;
    }

    function getOtherJointsInTheSameRegion(onlyWithoutMuscleFunctions, ignoreJoints) {
        return shuffle(
            quizJoints.filter(joint => {
                if(!baseFilter(joint, ignoreJoints)) {
                    return false;
                }

                if(joint.regionId !== correctJoint.regionId) {
                    return false;
                }

                if(onlyWithoutMuscleFunctions && joint.movements.length) {
                    const jointMuscleFunctions = muscleFunctions.filter(muscleFunction =>
                        muscleFunction.jointId === joint.id
                    );

                    if(jointMuscleFunctions.length) {
                        return false;
                    }
                }

                return true;
            })
        );
    }

    const correctJointMuscleFunctions = correctJoint.movements.length ? muscleFunctions.filter(muscleFunction =>
        muscleFunction.jointId === correctJoint.id
    ) : [];

    const callbacks = [
        getOtherJointsWithSameNumberSuffix,
        // getOtherJointsWithSameMuscles.bind(this, correctJointMuscleFunctions),
        correctJointMuscleFunctions.length ? getOtherJointsInTheSameRegion.bind(this, false) : getOtherJointsInTheSameRegion.bind(this, true),
    ];

    let similarJoints = [];

    for(const callback of callbacks) {
        similarJoints = [...similarJoints, ...callback(similarJoints)];
        if(similarJoints.length >= maxLength) {
            return similarJoints;
        }
    }

    return similarJoints;
}