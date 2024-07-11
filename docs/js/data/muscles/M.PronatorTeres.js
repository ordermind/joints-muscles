import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_pronator_teres";

export default new Muscle(
    {
        id: muscleId,
        label: "m. pronator teres",
        origos: [
            new AnatomicStructure(
                {
                    label: "epicondylus medialis humeri",
                    notes: ["via de common flexor tendon (CFT)", "caput humerale"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "processus coronoideus ulnae",
                    notes: ["caput ulnare"],
                }
            ),
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "facies lateralis radii (in het midden)",
                    notes: ["distaal van de insertie van <em>m. supinator</em>"],
                }
            ),
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_cubiti__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_cubiti__pronation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_pronator_teres.jpeg",
        description: `

        `.trim(),
    }
);