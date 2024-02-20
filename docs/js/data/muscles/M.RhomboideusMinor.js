import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_rhomboideus_minor";

export default new Muscle(
    {
        id: muscleId,
        label: "m. rhomboideus minor",
        origos: [
            new AnatomicStructure(
                {
                    label: "processi spinosi (C6)C7&nbsp;-&nbsp;C7(T1)",
                    notes: ["De exacte wervels van de origo zijn volgens Nederlandse bronnen C6-C7 en volgens Engelstalige bronnen C7-T1."],
                }
            ),
        ],
        insertions: [
            "margo medialis scapulae (ter hoogte van het <em>trigonum spinae scapulae</em>)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__retraction",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__elevation",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__mediorotation",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_rhomboideus_minor.jpeg",
        description: `
Deze spier vormt vaak een geheel met de [Link type="Muscle" targetId="m_rhomboideus_major" label="m. rhomboideus major"].
        `.trim(),
    }
);