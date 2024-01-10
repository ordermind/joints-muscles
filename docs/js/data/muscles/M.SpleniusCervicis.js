import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_splenius_cervicis",
        label: "m. splenius cervicis",
        origos: [
            "processi spinosi T3&nbsp;-&nbsp;T6",
        ],
        insertions: [
            "processi transversi C1&nbsp;-&nbsp;C3",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_splenius_cervicis__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_splenius_cervicis",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_splenius_cervicis__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_splenius_cervicis",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_splenius_cervicis__columna_vertebralis_cervicalis__rotation",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_splenius_cervicis",
                    movementId: "columna_vertebralis_cervicalis__rotation",
                    movementLabelOverride: "ipsilaterale rotatie",
                    isPrimeMover: true,
                    notes: ["ipsilaterale rotatie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_splenius_cervicis__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_splenius_cervicis",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_splenius_cervicis__columna_vertebralis_thoracalis__lateroflexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_splenius_cervicis",
                    movementId: "columna_vertebralis_thoracalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_splenius_cervicis.jpeg",
    }
);