import Muscle from "../../data-types/Muscle.js";
import MuscleFunction from "../../data-types/MuscleFunction.js";

export default new Muscle(
    {
        id: "mm_interspinales",
        label: "mm. interspinales",
        origos: [
            "processus spinosus",
        ],
        insertions: [
            "processus spinosus bij de <strong>eerstvolgende</strong> hoger gelegen wervel",
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
                    id: "mm_interspinales__columna_vertebralis_lumbalis__extension",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "mm_interspinales",
                    movementId: "columna_vertebralis_lumbalis__extension",
                    isPrimeMover: false,
                }
            ),
        ],
        description: `
De spier loopt van processus spinosus naar de direct daarboven gelegen processus spinosus (monosegmentaal). Mm. interspinales komen alleen lumbaal en cervicaal voor.
        `,
    }
);