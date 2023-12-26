import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_splenius_capitis",
        label: "m. splenius capitis",
        origos: [
            "processi spinosi C7 - T3",
            "ligamentum nuchae",
        ],
        insertions: [
            "processus mastoideus",
            "linea nuchae superior (lateraal)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_splenius_capitis__head_joints__extension",
                    jointId: "head_joints",
                    muscleId: "m_splenius_capitis",
                    movementId: "head_joints__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_splenius_capitis__head_joints__lateroflexion",
                    jointId: "head_joints",
                    muscleId: "m_splenius_capitis",
                    movementId: "head_joints__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_splenius_capitis__head_joints__rotation",
                    jointId: "head_joints",
                    muscleId: "m_splenius_capitis",
                    movementId: "head_joints__rotation",
                    movementLabelOverride: "ipsilaterale rotatie",
                    isPrimeMover: true,
                    notes: ["ipsilaterale rotatie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_splenius_capitis__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_splenius_capitis",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_splenius_capitis__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_splenius_capitis",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_splenius_capitis__columna_vertebralis_cervicalis__rotation",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_splenius_capitis",
                    movementId: "columna_vertebralis_cervicalis__rotation",
                    movementLabelOverride: "ipsilaterale rotatie",
                    isPrimeMover: true,
                    notes: ["ipsilaterale rotatie"],
                }
            ),
        ],
        image: "./images/muscles/m_splenius_capitis.jpeg",
    }
);