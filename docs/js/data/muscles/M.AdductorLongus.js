import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_adductor_longus",
        label: "m. adductor longus",
        origos: [
            new AnatomicStructure(
                {
                    label: "facies anterior corporis ossis pubis",
                    notes: [
                        "inferior van de crista pubica",
                        "lateraal van de symphysis pubica",
                    ]
                }
            ),
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "linea aspera femoris (middelste 1/3 deel)",
                    notes: [`tussen de m. vastus medialis en de m. adductor magnus`],
                }
            ),
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_adductor_longus__art_coxae__anteflexion",
                    jointId: "art_coxae",
                    muscleId: "m_adductor_longus",
                    movementId: "art_coxae__anteflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_adductor_longus__art_coxae__adduction",
                    jointId: "art_coxae",
                    muscleId: "m_adductor_longus",
                    movementId: "art_coxae__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_adductor_longus__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_adductor_longus",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_adductor_longus.jpeg",
        description: `

        `.trim(),
    }
);