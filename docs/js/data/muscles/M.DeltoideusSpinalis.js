import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_deltoideus_spinalis",
        label: "m. deltoideus, pars spinalis",
        origos: [
            "spina scapulae",
        ],
        insertions: [
            "tuberositas deltoidea humeri",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_deltoideus_spinalis__art_humeri__retroflexion",
                    jointId: "art_humeri",
                    muscleId: "m_deltoideus_spinalis",
                    movementId: "art_humeri__retroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_deltoideus_spinalis__art_humeri__abduction",
                    jointId: "art_humeri",
                    muscleId: "m_deltoideus_spinalis",
                    movementId: "art_humeri__abduction",
                    isPrimeMover: true,
                    notes: ["alleen vanaf 15° abductie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_deltoideus_spinalis__art_humeri__adduction",
                    jointId: "art_humeri",
                    muscleId: "m_deltoideus_spinalis",
                    movementId: "art_humeri__adduction",
                    isPrimeMover: false,
                    notes: ["alleen bij < 15° abductie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_deltoideus_spinalis__art_humeri__exorotation",
                    jointId: "art_humeri",
                    muscleId: "m_deltoideus_spinalis",
                    movementId: "art_humeri__exorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_deltoideus_spinalis.jpeg",
        description: `

        `.trim(),
    }
);