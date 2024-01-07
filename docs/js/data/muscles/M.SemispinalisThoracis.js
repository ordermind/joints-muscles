import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_semispinalis_thoracis",
        label: "m. semispinalis thoracis",
        origos: [
            "processi transversi T6&nbsp;-&nbsp;T10",
        ],
        insertions: [
            "processi spinosi C6&nbsp;-&nbsp;T4",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_thoracis__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_semispinalis_thoracis",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_thoracis__columna_vertebralis_cervicalis__rotation",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_semispinalis_thoracis",
                    movementId: "columna_vertebralis_cervicalis__rotation",
                    movementLabelOverride: "contralaterale rotatie",
                    isPrimeMover: false,
                    notes: ["contralaterale rotatie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_thoracis__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_semispinalis_thoracis",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_thoracis__columna_vertebralis_thoracalis__rotation",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_semispinalis_thoracis",
                    movementId: "columna_vertebralis_thoracalis__rotation",
                    movementLabelOverride: "contralaterale rotatie",
                    isPrimeMover: false,
                    notes: ["contralaterale rotatie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_semispinalis_thoracis__spine",
                    muscleId: "m_semispinalis_thoracis",
                    functionDescription: "de vorm van de wervelkolom in stand houden",
                }
            )
        ],
        image: "./images/muscles/m_semispinalis_thoracis.jpeg",
        description: `
Mapping van origos en inserties:

- T6 -> C6
- T7 -> C7
- T8 -> T1
- T9 -> T2
- T10 -> T3
- T11 -> T4
- T12 -> T4
        `
    }
);