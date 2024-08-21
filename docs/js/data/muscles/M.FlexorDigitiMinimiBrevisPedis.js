import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

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
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. plantaris lateralis",
                    notes: ["S2&nbsp;-&nbsp;S3"]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_metatarsophalangea_5__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);
