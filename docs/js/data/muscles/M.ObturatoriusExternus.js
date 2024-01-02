import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

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