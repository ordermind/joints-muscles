import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_deltoideus_acromialis",
        label: "m. deltoideus, pars acromialis",
        origos: [
            "acromion",
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
                    id: "m_deltoideus_acromialis__art_humeri__abduction",
                    jointId: "art_humeri",
                    muscleId: "m_deltoideus_acromialis",
                    movementId: "art_humeri__abduction",
                    isPrimeMover: true,
                    notes: ["alleen vanaf 15° abductie"],
                }
            ),
        ],
        image: "./images/muscles/m_deltoideus_acromialis.jpeg",
        description: `

        `.trim(),
    }
);