import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_scalenus_medius",
        label: "m. scalenus medius",
        origos: [
            "processus transversi (C1) C2-C7 (tubercula posteriora)"
        ],
        insertions: [
            "costa 1",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_scalenus_medius__columna_vertebralis_cervicalis__flexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_medius",
                    movementId: "columna_vertebralis_cervicalis__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_scalenus_medius__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_medius",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
        ],
    }
);