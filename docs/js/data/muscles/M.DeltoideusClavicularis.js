import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_deltoideus_clavicularis",
        label: "m. deltoideus, pars clavicularis",
        origos: [
            new AnatomicStructure(
                {
                    label: "extremitas acromialis claviculae",
                    notes: ["laterale 1/3 deel van de clavicula"],
                }
            ),
        ],
        insertions: [
            "tuberositas deltoidea humeri",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. axillaris",
                    notes: [
                        "C5,&nbsp;C6"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_deltoideus_clavicularis__art_humeri__anteflexion",
                    jointId: "art_humeri",
                    muscleId: "m_deltoideus_clavicularis",
                    movementId: "art_humeri__anteflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_deltoideus_clavicularis__art_humeri__abduction",
                    jointId: "art_humeri",
                    muscleId: "m_deltoideus_clavicularis",
                    movementId: "art_humeri__abduction",
                    isPrimeMover: true,
                    notes: ["alleen vanaf 15° abductie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_deltoideus_clavicularis__art_humeri__adduction",
                    jointId: "art_humeri",
                    muscleId: "m_deltoideus_clavicularis",
                    movementId: "art_humeri__adduction",
                    isPrimeMover: false,
                    notes: ["alleen bij < 15° abductie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_deltoideus_clavicularis__art_humeri__endorotation",
                    jointId: "art_humeri",
                    muscleId: "m_deltoideus_clavicularis",
                    movementId: "art_humeri__endorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_deltoideus_clavicularis.jpeg",
        description: `

        `.trim(),
    }
);