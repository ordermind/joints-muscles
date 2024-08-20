import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default class AnkleJointPartFunctionsFactory {
    createElement(muscleFunction) {
        if(!["art_talocruralis", "art_talotarsalis"].includes(muscleFunction.jointId)) {
            return null;
        }

        return [
            new JointMuscleFunction(
                {
                    id: muscleFunction.id.replace(muscleFunction.jointId, "tarsus"),
                    jointId: "tarsus",
                    muscleId: muscleFunction.muscleId,
                    movementId: muscleFunction.movementId.replace(muscleFunction.jointId, "tarsus"),
                    isPrimeMover: muscleFunction.isPrimeMover,
                    notes: muscleFunction.notes,
                }
            )
        ];
    }

    processArray(createdMuscleFunctions) {
        return createdMuscleFunctions.flat();
    }
}