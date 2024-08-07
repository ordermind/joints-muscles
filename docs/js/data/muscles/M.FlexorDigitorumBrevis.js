import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

const muscleId = "m_flexor_digitorum_brevis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. flexor digitorum brevis",
        origos: [
            "processus medialis tuberis calcanei",
            "aponeurosis plantaris"
        ],
        insertions: [
            "latera phalangium mediarum II&nbsp;-&nbsp;V",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_metatarsophalangeae_2_5__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_interphalangeae_proximales_pedis_2_5__flexion",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "arch",
                    muscleId: muscleId,
                    functionDescription: "Ondersteunt de arcus pedis longitudinalis",
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);