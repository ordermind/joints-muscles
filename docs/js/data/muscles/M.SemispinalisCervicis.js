import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_semispinalis_cervicis",
        label: "m. semispinalis cervicis",
        origos: [
            "processi transversi T1&nbsp;-&nbsp;T6",
        ],
        insertions: [
            "processi spinosi C2&nbsp;-&nbsp;C7",
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
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_cervicis__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_semispinalis_cervicis",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_semispinalis_cervicis__spine",
                    muscleId: "m_semispinalis_cervicis",
                    functionDescription: "de vorm van de wervelkolom in stand houden",
                }
            )
        ],
        image: "./images/muscles/m_semispinalis_cervicis.jpeg",
        description: `

        `.trim(),
    }
);