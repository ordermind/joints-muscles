import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "mm_intertransversarii_posteriores_cervicis",
        label: "mm. intertransversarii posteriores cervicis",
        origos: [
            "processi transversi C2&nbsp;-&nbsp;T1",
        ],
        insertions: [
            "processus transversus bij de <strong>eerstvolgende</strong> hoger gelegen wervel (C1&nbsp;-&nbsp;C7)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "rami dorsales nervorum spinalium cervicalium",
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "mm_intertransversarii_posteriores_cervicis__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "mm_intertransversarii_posteriores_cervicis",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: false,
                },
            ),
        ],
        image: "./images/muscles/mm_intertransversarii_posteriores_cervicis.jpeg",
        description: `
De spier loopt van processus transversus naar processus transversus. De spier is monosegmentaal en komt alleen lumbaal en cervicaal voor.
        `,
    }
);