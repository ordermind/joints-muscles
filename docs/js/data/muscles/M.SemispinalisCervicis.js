import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_semispinalis_cervicis",
        label: "m. semispinalis, pars cervicis",
        origos: [
            "processi transversi T1-T6",
        ],
        insertions: [
            "processus spinosus bij een bovengelegen wervel C2-C7",
            `
mapping:
<ul>
<li>T1 -> C2</li>
<li>T2 -> C3</li>
<li>T3 -> C4</li>
<li>T4 -> C5</li>
<li>T5 -> C6</li>
<li>T6 -> C7</li>
</ul>
            `
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
    }
);