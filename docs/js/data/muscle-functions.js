import JointMuscleFunction from "../data-types/JointMuscleFunction.js";
import { arrMuscles } from "./muscles.js";

const muscleFunctions = arrMuscles.flatMap(muscle => muscle.functions);

const spineJoints = [
    "juncturae_craniovertebrales",
    "columna_vertebralis_cervicalis",
    "columna_vertebralis_thoracalis",
    "columna_vertebralis_lumbalis",
];

/**
 * Add muscle functions for the spine globally based on muscle functions for parts of the spine.
 *
 * We use a Set in combination with JSON stringify and parse to remove duplicates that occur when a muscle has identical function for multiple parts of the spine.
 */
const wholeSpineFunctions = new Set(
    muscleFunctions.map(muscleFunction => {
        if(spineJoints.includes(muscleFunction.jointId)) {
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

        return null;
    })
    .filter(element => element !== null)
    .map(element => JSON.stringify(element))
);

export default [...muscleFunctions, ...Array.from(wholeSpineFunctions).map(element => JointMuscleFunction.fromJSON(element))];