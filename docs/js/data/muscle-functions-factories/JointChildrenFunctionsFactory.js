import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import { objJoints } from "../joints.js";

/**
 * This is mainly used for individual fingers and toes, for which the same muscle functions are created as for their
 * parent joint. For example, artt. metacarpophalangeae II-V has four individual joints and if there is a muscle that
 * moves all of the four joints, each individual joint should also list that muscle if you view only that one joint.
 */
export default class JointChildrenFunctionsFactory {
    createElement(muscleFunction) {
        if(!objJoints[muscleFunction.jointId].childrenIds.length) {
            return null;
        }

        return objJoints[muscleFunction.jointId].childrenIds.map(jointId => {
            return new JointMuscleFunction(
                {
                    id: muscleFunction.id.replace(muscleFunction.jointId, jointId),
                    jointId,
                    muscleId: muscleFunction.muscleId,
                    movementId: muscleFunction.movementId.replace(muscleFunction.jointId, jointId),
                    isPrimeMover: muscleFunction.isPrimeMover,
                    notes: muscleFunction.notes,
                }
            );
        });
    }

    processArray(createdMuscleFunctions) {
        return createdMuscleFunctions.flat();
    }
}