import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

const muscleId = "m_opponens_pollicis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. opponens pollicis",
        origos: [
            "tuberculum ossis trapezii",
            "retinaculum musculorum flexorum manus",
        ],
        insertions: [
            "margo radialis ossis metacarpalis I"
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_carpometacarpalis_1__abduction",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_carpometacarpalis_1__opposition",
                    isPrimeMover: true,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);