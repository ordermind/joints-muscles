import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

const muscleId = "m_opponens_digiti_minimi_pedis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. opponens digiti minimi pedis",
        origos: [
            "basis ossis metatarsalis V (plantair)",
            "vagina tendinis m. fibularis longi"
        ],
        insertions: [
            "facies lateralis ossis metatarsalis V"
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_metatarsophalangea_5__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_metatarsophalangea_5__abduction",
                    isPrimeMover: false,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);