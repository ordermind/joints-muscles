import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

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
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. musculocutaneus",
                    notes: [
                        "C5&nbsp;-&nbsp;C7"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_coracobrachialis__art_humeri__anteflexion",
                    jointId: "art_humeri",
                    muscleId: "m_coracobrachialis",
                    movementId: "art_humeri__anteflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_coracobrachialis__art_humeri__adduction",
                    jointId: "art_humeri",
                    muscleId: "m_coracobrachialis",
                    movementId: "art_humeri__adduction",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_coracobrachialis.jpeg",
        description: `

        `.trim(),
    }
);