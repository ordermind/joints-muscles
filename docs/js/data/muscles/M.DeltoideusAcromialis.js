import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

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