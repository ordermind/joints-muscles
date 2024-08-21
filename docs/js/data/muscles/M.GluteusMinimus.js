import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_gluteus_minimus",
        label: "m. gluteus minimus",
        origos: [
            "facies glutea alae ossis ilii (tussen de lineae glutea anterior en inferior)",
        ],
        insertions: [
            "trochanter major femoris (ventraal)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. gluteus superior",
                    notes: ["L4&nbsp;-&nbsp;S1"]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_gluteus_minimus__art_coxae__anteflexion",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_minimus",
                    movementId: "art_coxae__anteflexion",
                    isPrimeMover: false,
                    notes: ["alleen voorste vezels"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gluteus_minimus__art_coxae__retroflexion",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_minimus",
                    movementId: "art_coxae__retroflexion",
                    isPrimeMover: false,
                    notes: ["alleen achterste vezels"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gluteus_minimus__art_coxae__abduction",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_minimus",
                    movementId: "art_coxae__abduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gluteus_minimus__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_minimus",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: false,
                    notes: ["alleen achterste vezels"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gluteus_minimus__art_coxae__endorotation",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_minimus",
                    movementId: "art_coxae__endorotation",
                    isPrimeMover: false,
                    notes: ["alleen voorste vezels"],
                }
            ),
        ],
        image: "./images/muscles/m_gluteus_minimus.jpeg",
        description: `

        `.trim(),
    }
);