import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_pronator_quadratus";

export default new Muscle(
    {
        id: muscleId,
        label: "m. pronator quadratus",
        origos: [
            "facies anterior ulnae (distale 1/4 deel)",
        ],
        insertions: [
            "facies anterior radii (distale 1/4 deel)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. interosseus antebrachii anterior",
                    notes: [
                        "een tak van de <em>n. medianus</em>",
                        "C7&nbsp;-&nbsp;C8",
                    ],
                    conflictingWith: ["n. medianus"],
                }
            ),
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_cubiti__pronation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_pronator_quadratus.jpeg",
        description: `

        `.trim(),
    }
);