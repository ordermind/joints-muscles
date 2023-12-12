import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_scalenus_posterior",
        label: "m. scalenus posterior",
        origos: [
            "processus transversi C5-C7 (tubercula posteriora)"
        ],
        insertions: [
            "costa 2 (3)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_scalenus_posterior__columna_vertebralis_cervicalis__flexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_posterior",
                    movementId: "columna_vertebralis_cervicalis__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_scalenus_posterior__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_posterior",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
        ],
    }
);