import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js"

export default new Muscle(
    {
        id: "m_gemellus_superior",
        label: "m. gemellus superior",
        origos: [
            "spina ischiadica",
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "trochanter major femoris (mediaal)",
                    notes: [
                        "boven de fossa trochanterica femoris",
                        "via de pees van de m. obturatorius internus"
                    ],
                }
            ),
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "art_coxae__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_gemellus_superior",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_gemellus_superior.jpeg",
        description: `

        `.trim(),
    }
);