import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_flexor_carpi_radialis",
        label: "m. flexor carpi radialis",
        origos: [
            new AnatomicStructure(
                {
                    label: "epicondylus medialis humeri",
                    notes: ["via de common flexor tendon (CFT)"],
                }
            ),
        ],
        insertions: [
            "bases ossium metacarpalium II et III (palmair)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. medianus",
                    notes: [
                        "C6&nbsp;-&nbsp;C7"
                    ],
                    conflictingWith: [
                        "n. interosseus antebrachii anterior",
                        "ramus recurrens n. mediani",
                    ],
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_flexor_carpi_radialis__art_cubiti__flexion",
                    jointId: "art_cubiti",
                    muscleId: "m_flexor_carpi_radialis",
                    movementId: "art_cubiti__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_carpi_radialis__art_cubiti__pronation",
                    jointId: "art_cubiti",
                    muscleId: "m_flexor_carpi_radialis",
                    movementId: "art_cubiti__pronation",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_carpi_radialis__art_radiocarpalis__palmar_flexion",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_flexor_carpi_radialis",
                    movementId: "art_radiocarpalis__palmar_flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_carpi_radialis__art_radiocarpalis__radial_deviation",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_flexor_carpi_radialis",
                    movementId: "art_radiocarpalis__radial_deviation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_flexor_carpi_radialis.jpeg",
        description: `
De pees van de origo wordt de "common flexor tendon" (CFT) genoemd. Dit komt omdat dezelfde pees gebruikt wordt door zowel deze spier als de [Link type="Muscle" targetId="m_flexor_carpi_ulnaris" label="m. flexor carpi ulnaris"], [Link type="Muscle" targetId="m_pronator_teres" label="m. pronator teres"], [Link type="Muscle" targetId="m_flexor_digitorum_superficialis" label="m. flexor digitorum superficialis"], en [Link type="Muscle" targetId="m_palmaris_longus" label="m. palmaris longus"].
        `.trim(),
    }
);