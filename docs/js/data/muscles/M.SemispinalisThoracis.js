import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_semispinalis_thoracis",
        label: "m. semispinalis, pars thoracis",
        origos: [
            "processi transversi T6-T12",
        ],
        insertions: [
            "processus spinosus bij een bovengelegen wervel C6-T4",
            `
mapping:
<ul>
<li>T6 -> C6</li>
<li>T7 -> C7</li>
<li>T8 -> T1</li>
<li>T9 -> T2</li>
<li>T10 -> T3</li>
<li>T11 -> T4</li>
<li>T12 -> T4</li>
</ul>
            `
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
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_thoracis__columna_vertebralis_thoracalis__rotation",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_semispinalis_thoracis",
                    movementId: "columna_vertebralis_thoracalis__rotation",
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
                    functionDescription: "houdt de vorm van de wervelkolom in stand",
                }
            )
        ],
        image: "./images/muscles/m_semispinalis_thoracis.jpeg",
    }
);