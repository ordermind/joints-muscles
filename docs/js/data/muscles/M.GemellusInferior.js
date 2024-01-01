import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js"

export default new Muscle(
    {
        id: "m_gemellus_inferior",
        label: "m. gemellus inferior",
        origos: [
            new AnatomicStructure(
                {
                    label: "tuber ischiadicum",
                    notes: ["caudaal van de pees van m. obturatorius internus"]
                }
            ),
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "fossa trochanterica femoris",
                    notes: ["via de pees van de m. obturatorius internus"],
                }
            ),
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "art_coxae__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_gemellus_inferior",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_gemellus_inferior.jpeg",
        description: `

        `.trim(),
    }
);