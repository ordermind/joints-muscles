import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_semispinalis_capitis",
        label: "m. semispinalis, pars capitis",
        origos: [
            "processi transversi C3-T6",
        ],
        insertions: [
            "os occipitale tussen linea nuchae superior en linea nuchae inferior",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_capitis__head_joints__extension",
                    jointId: "head_joints",
                    muscleId: "m_semispinalis_capitis",
                    movementId: "head_joints__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_capitis__head_joints__lateroflexion",
                    jointId: "head_joints",
                    muscleId: "m_semispinalis_capitis",
                    movementId: "head_joints__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_capitis__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_semispinalis_capitis",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_semispinalis_capitis__spine",
                    muscleId: "m_semispinalis_capitis",
                    functionDescription: "houdt de vorm van de wervelkolom in stand",
                }
            )
        ],
        image: "./images/muscles/m_semispinalis_capitis.jpeg",
    }
);