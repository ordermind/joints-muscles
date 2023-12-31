import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_adductor_longus",
        label: "m. adductor longus",
        origos: [
            "facies inferior tuberculi pubis",
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "linea aspera (middelste 1/3 deel)",
                    notes: [`tussen de [Link type="Muscle" targetId="m_vastus_medialis" label="m. vastus medialis"] en de [Link type="Muscle" targetId="m_adductor_magnus" label="m. adductor magnus"]`]
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