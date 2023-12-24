import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_spinalis_cervicis",
        label: "m. spinalis cervicis",
        origos: [
            "processi spinosi C7-T1",
            "lig. nuchae",
        ],
        insertions: [
            "processi spinosi C2-C4"
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_spinalis_cervicis__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_spinalis_cervicis",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_spinalis_cervicis__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_spinalis_cervicis",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_spinalis_cervicis.jpeg",
    }
);