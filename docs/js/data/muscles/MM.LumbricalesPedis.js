import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "mm_lumbricales_pedis";

export default new Muscle(
    {
        id: muscleId,
        label: "mm. lumbricales pedis",
        origos: [
            "tendines terminales m. flexoris digitorum longi"
        ],
        insertions: [
            "bases phalangum proximalium II&nbsp;-&nbsp;V",
            "aponeuroses dorsales phalangum II&nbsp;-&nbsp;V",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. plantaris medialis",
                    notes: [
                        "S2&nbsp;-&nbsp;S3",
                        "spier 1"
                    ]
                }
            ),
            new AnatomicStructure(
                {
                    label: "n. plantaris lateralis",
                    notes: [
                        "S2&nbsp;-&nbsp;S3",
                        "spier 2-4"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_metatarsophalangeae_2_5__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_metatarsophalangeae_2_5__adduction",
                    isPrimeMover: true,
                    notes: ["Dit komt neer op een (aaneen)sluiten van de tenen."]
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_interphalangeae_proximales_pedis_2_5__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_interphalangeae_distales_pedis_2_5__extension",
                    isPrimeMover: false,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);