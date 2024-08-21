import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_supinator";

export default new Muscle(
    {
        id: muscleId,
        label: "m. supinator",
        origos: [
            "epicondylus lateralis humeri",
            "crista m. supinatoris ulnae",
            "ligamentum collaterale radiale",
            "ligamentum anulare radii",
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "radius (proximale 1/3 deel)",
                    notes: ["de vezels lopen om de radius heen naar voren, dus dorsaal, lateraal en ventraal"],
                }
            ),
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. interosseus antebrachii posterior",
                    notes: [
                        "voortzetting van de <em>n. radialis</em>",
                        "C7&nbsp;-&nbsp;C8"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_cubiti__supination",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_supinator.jpeg",
        description: `

        `.trim(),
    }
);