import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "mm_interspinales_lumborum",
        label: "mm. interspinales lumborum",
        origos: [
            "processi spinosi T11&nbsp;-&nbsp;L5",
        ],
        insertions: [
            "processus spinosus bij de <strong>eerstvolgende</strong> hoger gelegen wervel (T10&nbsp;-&nbsp;L4)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "rami dorsales nervorum spinalium thoracicorum et lumborum",
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "mm_interspinales_lumborum__columna_vertebralis_lumbalis__extension",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "mm_interspinales_lumborum",
                    movementId: "columna_vertebralis_lumbalis__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "mm_interspinales_lumborum__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "mm_interspinales_lumborum",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/mm_interspinales_lumborum.jpeg",
        description: `
De spier loopt van processus spinosus naar de direct daarboven gelegen processus spinosus (monosegmentaal). Mm. interspinales komen alleen lumbaal en cervicaal voor.
        `,
    }
);