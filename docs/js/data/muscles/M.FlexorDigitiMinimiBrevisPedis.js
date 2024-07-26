import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

const muscleId = "m_flexor_digiti_minimi_brevis_pedis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. flexor digiti minimi brevis pedis",
        origos: [
            "basis ossis metatarsalis V (plantair)"
        ],
        insertions: [
            "basis phalangis proximalis V (lateraal)"
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_metatarsophalangea_5__flexion",
                    isPrimeMover: false,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);