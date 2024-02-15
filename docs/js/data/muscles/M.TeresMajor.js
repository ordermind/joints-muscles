import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

const muscleId = "m_teres_major";

export default new Muscle(
    {
        id: muscleId,
        label: "m. teres major",
        origos: [
            "margo lateralis scapulae (onderste deel)",
            "angulus inferior scapulae",
        ],
        insertions: [
            "crista tuberculi minoris humeri",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_humeri__retroflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_humeri__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_humeri__endorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_teres_major.jpeg",
        description: `

        `.trim(),
    }
);