import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "mm_intertransversarii_lumborum",
        label: "mm. intertransversarii lumborum",
        origos: [
            "processi costarum L2&nbsp;-&nbsp;L5",
        ],
        insertions: [
            "processus costalis bij de <strong>eerstvolgende</strong> hoger gelegen wervel (L1&nbsp;-&nbsp;L4)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "mm_intertransversarii_lumborum__columna_vertebralis_lumbalis__lateroflexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "mm_intertransversarii_lumborum",
                    movementId: "columna_vertebralis_lumbalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/mm_intertransversarii_lumborum.jpeg",
        description: `
De spier loopt van processus transversus naar processus transversus. De spier is monosegmentaal en komt alleen lumbaal en cervicaal voor.
        `,
    }
);