import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_obturatorius_internus",
        label: "m. obturatorius internus",
        origos: [
            "facies posterior membranae obturatoriae",
            "margo foraminis obturati",
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "trochanter major femoris (mediaal)",
                    notes: ["boven de fossa trochanterica femoris"],
                }
            ),
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. m. obturatorii interni",
                    notes: ["L5&nbsp;-&nbsp;S1"]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_obturatorius_internus__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_obturatorius_internus",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_obturatorius_internus.jpeg",
        description: `
De spier loopt door het foramen ischiadicum (sciaticum) minus en buigt met scherpe hoek naar lateraal. De spiervezels convergeren van origo naar insertie.
        `.trim(),
    }
);