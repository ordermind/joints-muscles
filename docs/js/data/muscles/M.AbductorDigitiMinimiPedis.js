import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

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
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. plantaris lateralis",
                    notes: ["S1&nbsp;-&nbsp;S3"]
                }
            )
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
                    functionDescription: "ondersteunt de <strong>arcus pedis longitudinalis</strong>",
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);