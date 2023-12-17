import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_semispinalis_cervicis",
        label: "m. semispinalis cervicis",
        origos: [
            "processi transversi T1-T6",
        ],
        insertions: [
            "processus spinosus bij een bovengelegen wervel C2-C7",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_cervicis__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_semispinalis_cervicis",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_cervicis__columna_vertebralis_cervicalis__rotation",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_semispinalis_cervicis",
                    movementId: "columna_vertebralis_cervicalis__rotation",
                    movementLabelOverride: "contralaterale rotatie",
                    isPrimeMover: true,
                    notes: ["contralaterale rotatie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_semispinalis_cervicis__spine",
                    muscleId: "m_semispinalis_cervicis",
                    functionDescription: "houdt de vorm van de wervelkolom in stand",
                }
            )
        ],
        image: "./images/muscles/m_semispinalis_cervicis.jpeg",
        description: `
Mapping van origos en inserties:

- T1 -> C2
- T2 -> C3
- T3 -> C4
- T4 -> C5
- T5 -> C6
- T6 -> C7
        `
    }
);