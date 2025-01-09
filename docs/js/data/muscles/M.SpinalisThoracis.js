import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_spinalis_thoracis",
        label: "m. spinalis thoracis",
        origos: [
            "processi spinosi T11&nbsp;-&nbsp;L2",
        ],
        insertions: [
            "processi spinosi T2&nbsp;-&nbsp;T8",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "rami dorsales nervorum spinalium thoracicorum",
                    notes: [
                        "T4&nbsp;-&nbsp;T12"
                    ]
                }
            ),
            new AnatomicStructure(
                {
                    label: "ramus dorsalis n. spinalis lumbalis",
                    notes: [
                        "L1"
                    ],
                    conflictingWith: [
                        "rami dorsales nervorum spinalium lumborum",
                    ],
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_spinalis_thoracis__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_spinalis_thoracis",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_spinalis_thoracis__columna_vertebralis_thoracalis__lateroflexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_spinalis_thoracis",
                    movementId: "columna_vertebralis_thoracalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_spinalis_thoracis.jpeg",
    }
);