import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

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
                    movementId: "artt_metacarpophalangeae_2_5__abduction",
                    isPrimeMover: true,
                    notes: ["alleen radiaalabductie - de vingers bewegen naar de duim toe"]
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