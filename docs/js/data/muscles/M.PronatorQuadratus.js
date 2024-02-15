import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

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