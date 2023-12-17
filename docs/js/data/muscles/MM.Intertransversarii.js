import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "mm_intertransversarii",
        label: "mm. intertransversarii",
        origos: [
            "processus transversus",
        ],
        insertions: [
            "processus transversus bij <strong>dezelfde</strong> wervel als de origo",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "mm_intertransversarii__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "mm_intertransversarii",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: false,
                },
            ),
            new JointMuscleFunction(
                {
                    id: "mm_intertransversarii__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "mm_intertransversarii",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: false,
                },
            ),
            new JointMuscleFunction(
                {
                    id: "mm_intertransversarii__columna_vertebralis_lumbalis__extension",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "mm_intertransversarii",
                    movementId: "columna_vertebralis_lumbalis__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "mm_intertransversarii__columna_vertebralis_lumbalis__lateroflexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "mm_intertransversarii",
                    movementId: "columna_vertebralis_lumbalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/mm_intertransversarii.jpeg",
        description: `
De spier loopt van processus transversus naar processus transversus. De spier is monosegmentaal en komt alleen lumbaal en cervicaal voor.
        `,
    }
);