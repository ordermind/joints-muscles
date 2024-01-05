import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_piriformis",
        label: "m. piriformis",
        origos: [
            "facies anterior ossis sacri (lateraal van de foramina sacralia pelvina)",
        ],
        insertions: [
            "trochanter major femoris (apex)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_piriformis__art_coxae__retroflexion",
                    jointId: "art_coxae",
                    muscleId: "m_piriformis",
                    movementId: "art_coxae__retroflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_piriformis__art_coxae__abduction",
                    jointId: "art_coxae",
                    muscleId: "m_piriformis",
                    movementId: "art_coxae__abduction",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_piriformis__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_piriformis",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_piriformis.jpeg",
        description: `
De spier loopt door het foramen ischiadicum (sciaticum) majus en eindigt met een korte pees aan de binnenzijde van de bovenrand van de trochanter major femoris.
        `.trim(),
    }
);