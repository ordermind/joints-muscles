import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_adductor_brevis",
        label: "m. adductor brevis",
        origos: [
            "facies anterior corporis ossis pubis",
            "ramus inferior ossis pubis",
        ],
        insertions: [
            "linea aspera femoris (proximaal)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. obturatorius",
                    notes: [
                        "L2&nbsp;-&nbsp;L4"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_adductor_brevis__art_coxae__anteflexion",
                    jointId: "art_coxae",
                    muscleId: "m_adductor_brevis",
                    movementId: "art_coxae__anteflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_adductor_brevis__art_coxae__adduction",
                    jointId: "art_coxae",
                    muscleId: "m_adductor_brevis",
                    movementId: "art_coxae__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_adductor_brevis__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_adductor_brevis",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_adductor_brevis.jpeg",
        description: `

        `.trim(),
    }
);