import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

const muscleId = "m_flexor_digiti_minimi_brevis_manus";

export default new Muscle(
    {
        id: muscleId,
        label: "m. flexor digiti minimi brevis manus",
        origos: [
            "hamulus ossis hamati",
            "retinaculum musculorum flexorum manus"
        ],
        insertions: [
            "basis phalangis proximalis V (ulnair)"
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_metacarpophalangea_5__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);