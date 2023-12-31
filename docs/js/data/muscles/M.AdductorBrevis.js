import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

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
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_adductor_brevis__pelvis",
                    muscleId: "m_adductor_brevis",
                    functionDescription: "het bekken stabiliseren tijdens staan of lopen",
                }
            )
        ],
        image: "./images/muscles/m_adductor_brevis.jpeg",
        description: `

        `.trim(),
    }
);