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
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. medianus",
                    notes: [
                        "C6&nbsp;-&nbsp;C7",
                    ],
                    conflictingWith: [
                        "n. interosseus antebrachii anterior",
                        "ramus recurrens n. mediani",
                    ],
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
De pees van de origo wordt de "common flexor tendon" (CFT) genoemd. Dit komt omdat dezelfde pees gebruikt wordt door zowel deze spier als de [Link type="Muscle" targetId="m_flexor_carpi_radialis" label="m. flexor carpi radialis"], [Link type="Muscle" targetId="m_flexor_carpi_ulnaris" label="m. flexor carpi ulnaris"], [Link type="Muscle" targetId="m_flexor_digitorum_superficialis" label="m. flexor digitorum superficialis"], en [Link type="Muscle" targetId="m_palmaris_longus" label="m. palmaris longus"].
        `.trim(),
    }
);