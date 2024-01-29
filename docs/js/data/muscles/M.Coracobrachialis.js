import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_coracobrachialis",
        label: "m. coracobrachialis",
        origos: [
            "processus coracoideus scapulae",
        ],
        insertions: [
            "margo medialis humeri (in het midden)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_coracobrachialis__art_humeri__anteflexion",
                    jointId: "art_humeri",
                    muscleId: "m_coracobrachialis",
                    movementId: "art_humeri__anteflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_coracobrachialis__art_humeri__adduction",
                    jointId: "art_humeri",
                    muscleId: "m_coracobrachialis",
                    movementId: "art_humeri__adduction",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_coracobrachialis.jpeg",
        description: `

        `.trim(),
    }
);