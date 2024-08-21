import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_extensor_digitorum_brevis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. extensor digitorum brevis",
        origos: [
            "facies dorsolateralis calcanei"
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "aponeuroses dorsales phalangum II&nbsp;-&nbsp;IV",
                    notes: ["via de pezen van de <em>m. extensor digitorum longus</em>"],
                }
            ),
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. fibularis profundus",
                    notes: [
                        "L5&nbsp;-&nbsp;S1"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_metatarsophalangeae_2_4__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_interphalangeae_proximales_pedis_2_4__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_interphalangeae_distales_pedis_2_4__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `
De spier heeft meestal geen pees naar de 5e teen.
        `.trim(),
    }
);
