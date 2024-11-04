import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "mm_lumbricales_manus";

export default new Muscle(
    {
        id: muscleId,
        label: "mm. lumbricales manus",
        origos: [
            "tendines terminales m. flexoris digitorum profundi"
        ],
        insertions: [
            "aponeuroses dorsales phalangum II&nbsp;-&nbsp;V"
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. medianus",
                    notes: [
                        "C8&nbsp;-&nbsp;T1",
                        "spier 1&nbsp;-&nbsp;2"
                    ],
                    conflictingWith: [
                        "n. interosseus antebrachii anterior",
                        "ramus recurrens n. mediani",
                    ],
                }
            ),
            new AnatomicStructure(
                {
                    label: "n. ulnaris",
                    notes: [
                        "C8&nbsp;-&nbsp;T1",
                        "spier 3&nbsp;-&nbsp;4"
                    ],
                    conflictingWith: ["ramus superficialis n. ulnaris", "ramus profundus n. ulnaris"],
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_metacarpophalangeae_2_5__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_metacarpophalangeae_2_5__adduction",
                    isPrimeMover: true,
                    notes: ["radiaaladductie - de vingers bewegen naar de duim toe"]
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_interphalangeae_proximales_manus_2_5__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_interphalangeae_distales_manus_2_5__extension",
                    isPrimeMover: false,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);