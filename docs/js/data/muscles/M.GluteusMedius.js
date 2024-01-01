import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_gluteus_medius",
        label: "m. gluteus medius",
        origos: [
            "facies glutea alae ossis ilii (tussen de lineae glutea anterior en posterior)",
        ],
        insertions: [
            "trochanter major femoris (lateraal)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_gluteus_medius__art_coxae__anteflexion",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_medius",
                    movementId: "art_coxae__anteflexion",
                    isPrimeMover: false,
                    notes: ["alleen voorste vezels"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gluteus_medius__art_coxae__retroflexion",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_medius",
                    movementId: "art_coxae__retroflexion",
                    isPrimeMover: false,
                    notes: ["alleen achterste vezels"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gluteus_medius__art_coxae__abduction",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_medius",
                    movementId: "art_coxae__abduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gluteus_medius__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_medius",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: false,
                    notes: ["alleen achterste vezels"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gluteus_medius__art_coxae__endorotation",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_medius",
                    movementId: "art_coxae__endorotation",
                    isPrimeMover: false,
                    notes: ["alleen voorste vezels"],
                }
            ),
        ],
        image: "./images/muscles/m_gluteus_medius.jpeg",
        description: `

        `.trim(),
    }
);