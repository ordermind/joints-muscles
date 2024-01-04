import { checkStringSimilarity, shuffle } from "../../utils.js";

export function isJointPlural(joint) {
    return joint.label.includes('artt.');
}

export function getSimilarJoints(correctJoint, quizJoints, maxLength = 5) {
    function getOtherJointsWithSameNumberSuffix(ignoreJoints) {
        const regex = /\s[IVX]+$/;
        const numberSuffix = correctJoint.shortLabel.match(regex);
        if(numberSuffix === null) {
            return [];
        }

        return shuffle(
            quizJoints.filter(joint => {
                if(joint.id === correctJoint.id) {
                    return false;
                }

                if(ignoreJoints.some(ignoreJoint => ignoreJoint.id === joint.id)) {
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

    function getOtherJointsWithSimilarNames(ignoreJoints) {
        return quizJoints
            .filter(joint =>
                joint.id !== correctJoint.id
                && !ignoreJoints.some(ignoreJoint => ignoreJoint.id === joint.id)
            )
            .sort((firstJoint, secondJoint) => {
                if(
                    checkStringSimilarity(firstJoint.shortLabel, correctJoint.shortLabel)
                    > checkStringSimilarity(secondJoint.shortLabel, correctJoint.shortLabel)
                ) {
                    return -1;
                }

                return 1;
            })
            .slice(0, maxLength / 2);
    }

    function getOtherJointsInTheSameRegion(ignoreJoints) {
        return shuffle(
            quizJoints.filter(joint =>
                joint.id !== correctJoint.id
                && !ignoreJoints.some(ignoreJoint => ignoreJoint.id === joint.id)
                && joint.regionId === correctJoint.regionId
            )
        );
    }

    const callbacks = [
        getOtherJointsWithSameNumberSuffix,
        getOtherJointsWithSimilarNames,
        getOtherJointsInTheSameRegion,
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