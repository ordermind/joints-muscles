import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "mm_intertransversarii_lumborum",
        label: "mm. intertransversarii lumborum",
        origos: [
            "processi costales L2&nbsp;-&nbsp;L5",
        ],
        insertions: [
            "processus costalis bij de <strong>eerstvolgende</strong> hoger gelegen wervel (L1&nbsp;-&nbsp;L4)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "rami anteriores nervorum spinalium lumborum",
                }
            )
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