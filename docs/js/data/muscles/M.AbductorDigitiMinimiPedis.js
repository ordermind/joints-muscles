import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

const muscleId = "m_abductor_digiti_minimi_pedis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. abductor digiti minimi pedis",
        origos: [
            "processus lateralis tuberis calcanei",
            "aponeurosis plantaris"
        ],
        insertions: [
            "tuberositas ossis metatarsalis V",
            "basis phalangis proximalis V (lateraal)"
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_metatarsophalangea_5__abduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_metatarsophalangea_5__flexion",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "longitudinal_arch",
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