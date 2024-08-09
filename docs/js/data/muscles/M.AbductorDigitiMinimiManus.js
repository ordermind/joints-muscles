import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_abductor_digiti_minimi_manus";

export default new Muscle(
    {
        id: muscleId,
        label: "m. abductor digiti minimi manus",
        origos: [
            "os pisiforme"
        ],
        insertions: [
            "basis phalangis proximalis V (ulnair)"
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. ulnaris",
                    notes: [
                        "Diepe tak",
                        "C8,&nbsp;T1"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_metacarpophalangea_5__abduction",
                    isPrimeMover: true,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);