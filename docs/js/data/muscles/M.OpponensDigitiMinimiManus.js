import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

const muscleId = "m_opponens_digiti_minimi_manus";

export default new Muscle(
    {
        id: muscleId,
        label: "m. opponens digiti minimi manus",
        origos: [
            "hamulus ossis hamati",
            "retinaculum musculorum flexorum manus"
        ],
        insertions: [
            "os metacarpi V (ulnair)"
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_carpometacarpalis_5__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);