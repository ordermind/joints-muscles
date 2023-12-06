import Muscle from "../../data-types/Muscle.js";
import MuscleFunction from "../../data-types/MuscleFunction.js";

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
            new MuscleFunction(
                {
                    id: "mm_interspinales__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "mm_interspinales",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: false,
                },
            ),
            new MuscleFunction(
                {
                    id: "mm_interspinales__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "mm_interspinales",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: false,
                },
            ),
            new MuscleFunction(
                {
                    id: "mm_interspinales__columna_vertebralis_lumbalis__extension",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "mm_interspinales",
                    movementId: "columna_vertebralis_lumbalis__extension",
                    isPrimeMover: false,
                }
            ),
            new MuscleFunction(
                {
                    id: "mm_interspinales__columna_vertebralis_lumbalis__lateroflexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "mm_interspinales",
                    movementId: "columna_vertebralis_lumbalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
        ],
        description: `
De spier loopt van processus transversus naar processus transversus. De spier is monosegmentaal en komt alleen lumbaal en cervicaal voor.
        `,
    }
);