import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_flexor_digitorum_brevis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. flexor digitorum brevis",
        origos: [
            new AnatomicStructure(
                {
                    label: "processus medialis tuberis calcanei",
                    notes: ["Via de <em>aponeurosis plantaris</em>"]
                }
            )
        ],
        insertions: [
            "latera phalangum mediarum II&nbsp;-&nbsp;V",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. plantaris medialis",
                    notes: ["S1&nbsp;-&nbsp;S3"]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_metatarsophalangeae_2_5__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_interphalangeae_proximales_pedis_2_5__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "arch",
                    muscleId: muscleId,
                    functionDescription: "ondersteunt de <em>arcus pedis longitudinalis</em>",
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);
