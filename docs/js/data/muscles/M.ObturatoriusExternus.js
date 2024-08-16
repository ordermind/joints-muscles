import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_obturatorius_externus",
        label: "m. obturatorius externus",
        origos: [
            "facies anterior membranae obturatoriae",
            "margo foraminis obturati",
        ],
        insertions: [
            "fossa trochanterica femoris",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. obturatorius",
                    notes: [
                        "L3&nbsp;-&nbsp;L4"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_obturatorius_externus__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_obturatorius_externus",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_obturatorius_externus.jpeg",
        description: `

        `.trim(),
    }
);