import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import { uniqueArray } from "../../utils.js";

/**
 * Get muscle functions for the spine globally based on muscle functions for parts of the spine.
 */
export default class WholeSpineFunctionsFactory {
    #torsoJoints = [
        "juncturae_craniovertebrales",
        "columna_vertebralis_cervicalis",
        "columna_vertebralis_thoracalis",
        "columna_vertebralis_lumbalis",
    ];

    createElement(muscleFunction) {
        if (!this.#torsoJoints.includes(muscleFunction.jointId)) {
            return null;
        }

        const jointId = muscleFunction.jointId;

        return new JointMuscleFunction(
            {
                id: muscleFunction.id.replace(jointId, "columna_vertebralis"),
                jointId: "columna_vertebralis",
                muscleId: muscleFunction.muscleId,
                movementId: muscleFunction.movementId.replace(jointId, "columna_vertebralis"),
                isPrimeMover: muscleFunction.isPrimeMover,
                notes: muscleFunction.notes,
            }
        );
    }

    /**
     *  We use uniqueArray in combination with JSON stringify and parse to remove duplicates that occur when a muscle has identical function for multiple parts of the torso.
     */
    processArray(createdMuscleFunctions) {
        return uniqueArray(
            createdMuscleFunctions.map(element => JSON.stringify(element))
        ).map(element => JointMuscleFunction.fromJSON(element));
    }
}