import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_brachialis",
        label: "m. brachialis",
        origos: [
            "facies anterior humeri (distale helft)",
            "septum intermusculare laterale humeri",
            "septum intermusculare mediale humeri",
        ],
        insertions: [
            "processus coronoideus ulnae",
            "tuberositas ulnae",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. musculocutaneus",
                    notes: [
                        "C5&nbsp;-&nbsp;C6"
                    ]
                }
            ),
            new AnatomicStructure(
                {
                    label: "n. radialis",
                    notes: [
                        "C7"
                    ],
                    conflictingWith: [
                        "n. interosseus antebrachii posterior",
                    ],
                }
            ),
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_brachialis__art_cubiti__flexion",
                    jointId: "art_cubiti",
                    muscleId: "m_brachialis",
                    movementId: "art_cubiti__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_brachialis.jpeg",
        description: `

        `.trim(),
    }
);