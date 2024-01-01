import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default class ElbowJointPartFunctionsFactory {
    createElement(muscleFunction) {
        if(muscleFunction.jointId !== "art_cubiti") {
            return null;
        }

        const createdMuscleFunctions = [
            new JointMuscleFunction(
                {
                    id: muscleFunction.id.replace(muscleFunction.jointId, "art_humeroradialis"),
                    jointId: "art_humeroradialis",
                    muscleId: muscleFunction.muscleId,
                    movementId: muscleFunction.movementId.replace(muscleFunction.jointId, "art_humeroradialis"),
                    isPrimeMover: muscleFunction.isPrimeMover,
                    notes: muscleFunction.notes,
                }
            )
        ];

        if(["art_cubiti__flexion", "art_cubiti__extension"].includes(muscleFunction.movementId)) {
            createdMuscleFunctions.push(
                new JointMuscleFunction(
                    {
                        id: muscleFunction.id.replace(muscleFunction.jointId, "art_humeroulnaris"),
                        jointId: "art_humeroulnaris",
                        muscleId: muscleFunction.muscleId,
                        movementId: muscleFunction.movementId.replace(muscleFunction.jointId, "art_humeroulnaris"),
                        isPrimeMover: muscleFunction.isPrimeMover,
                        notes: muscleFunction.notes,
                    }
                )
            )
        } else if(["art_cubiti__pronation", "art_cubiti__supination"].includes(muscleFunction.movementId)) {
            createdMuscleFunctions.push(
                new JointMuscleFunction(
                    {
                        id: muscleFunction.id.replace(muscleFunction.jointId, "art_radioulnaris"),
                        jointId: "art_radioulnaris",
                        muscleId: muscleFunction.muscleId,
                        movementId: muscleFunction.movementId.replace(muscleFunction.jointId, "art_radioulnaris"),
                        isPrimeMover: muscleFunction.isPrimeMover,
                        notes: muscleFunction.notes,
                    }
                )
            )
        }

        return createdMuscleFunctions;
    }

    processArray(createdMuscleFunctions) {
        return createdMuscleFunctions.flat();
    }
}