import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

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
                    functionDescription: "ondersteunt de <em>arcus pedis longitudinalis</em>",
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);