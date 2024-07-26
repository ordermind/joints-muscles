import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
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
                    label: "aponeuroses dorsales phalangium II&nbsp;-&nbsp;IV",
                    notes: ["via de pezen van de <em>m. extensor digitorum longus</em>"],
                }
            ),
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
                    movementId: "artt_interphalangeae_proximales_pedum_2_4__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_interphalangeae_distales_pedum_2_4__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);