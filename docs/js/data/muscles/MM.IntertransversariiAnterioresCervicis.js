import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "mm_intertransversarii_anteriores_cervicis",
        label: "mm. intertransversarii anteriores cervicis",
        origos: [
            "processi transversi C3 - T1",
        ],
        insertions: [
            "processus transversus bij de <strong>eerstvolgende</strong> hoger gelegen wervel",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "mm_intertransversarii_anteriores_cervicis__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "mm_intertransversarii_anteriores_cervicis",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: false,
                },
            ),
        ],
        image: "./images/muscles/mm_intertransversarii_anteriores_cervicis.jpeg",
        description: `
De spier loopt van processus transversus naar processus transversus. De spier is monosegmentaal en komt alleen lumbaal en cervicaal voor.
        `,
    }
);