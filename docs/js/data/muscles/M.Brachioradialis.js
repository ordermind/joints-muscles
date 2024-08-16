import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_brachioradialis",
        label: "m. brachioradialis",
        origos: [
            new AnatomicStructure(
                {
                    label: "crista supracondylaris lateralis humeri",
                    notes: ["proximaal van de <em>m. extensor carpi radialis longus</em>"],
                }
            ),
            "septum intermusculare laterale humeri",
        ],
        insertions: [
            "processus styloideus radii (proximolateraal)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. radialis",
                    notes: [
                        "C5&nbsp;-&nbsp;C6"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_brachioradialis__art_cubiti__flexion",
                    jointId: "art_cubiti",
                    muscleId: "m_brachioradialis",
                    movementId: "art_cubiti__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_brachioradialis__art_cubiti__pronation",
                    jointId: "art_cubiti",
                    muscleId: "m_brachioradialis",
                    movementId: "art_cubiti__pronation",
                    isPrimeMover: false,
                    notes: ["alleen vanuit supinatiestand"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_brachioradialis__art_cubiti__supination",
                    jointId: "art_cubiti",
                    muscleId: "m_brachioradialis",
                    movementId: "art_cubiti__supination",
                    isPrimeMover: false,
                    notes: ["alleen vanuit pronatiestand"],
                }
            ),
        ],
        image: "./images/muscles/m_brachioradialis.jpeg",
        description: `
Deze spier is in tegenstelling tot de andere spieren van de dorsolaterale groep monoarticulair (bezit geen functiecomponent over het polsgewricht).
        `.trim(),
    }
);