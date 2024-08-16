import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "mm_interspinales_cervicis",
        label: "mm. interspinales cervicis",
        origos: [
            "processi spinosi C3&nbsp;-&nbsp;T2",
        ],
        insertions: [
            "processus spinosus bij de <strong>eerstvolgende</strong> hoger gelegen wervel (C2&nbsp;-&nbsp;T1)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "rami dorsales nervorum spinalium cervicalium et thoracicorum",
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "mm_interspinales_cervicis__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "mm_interspinales_cervicis",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: false,
                },
            ),
            new JointMuscleFunction(
                {
                    id: "mm_interspinales_cervicis__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "mm_interspinales_cervicis",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: false,
                },
            ),
        ],
        image: "./images/muscles/mm_interspinales_cervicis.jpeg",
        description: `
De spier loopt van processus spinosus naar de direct daarboven gelegen processus spinosus (monosegmentaal). Mm. interspinales komen alleen lumbaal en cervicaal voor.
        `,
    }
);