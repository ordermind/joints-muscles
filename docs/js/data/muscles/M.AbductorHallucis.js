import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

const muscleId = "m_abductor_hallucis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. abductor hallucis",
        origos: [
            "processus medialis tuberis calcanei",
            "retinaculum musculorum flexorum pedis",
            "aponeurosis plantaris",
        ],
        insertions: [
            "basis phalangis proximalis I (mediaal)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_metatarsophalangea_1__abduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_metatarsophalangea_1__flexion",
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