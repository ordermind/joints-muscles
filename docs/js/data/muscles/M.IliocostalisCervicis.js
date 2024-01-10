import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_iliocostalis_cervicis",
        label: "m. iliocostalis cervicis",
        origos: [
            "anguli costarum 3&nbsp;-&nbsp;6",
        ],
        insertions: [
            "processi transversi C4&nbsp;-&nbsp;C6",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_iliocostalis_cervicis__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_iliocostalis_cervicis",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_iliocostalis_cervicis__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_iliocostalis_cervicis",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_iliocostalis_cervicis__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_iliocostalis_cervicis",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_iliocostalis_cervicis__columna_vertebralis_thoracalis__lateroflexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_iliocostalis_cervicis",
                    movementId: "columna_vertebralis_thoracalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_iliocostalis_cervicis.jpeg",
        description: `
M. iliocostalis is onderdeel van de m. erector spinae.
        `,
    }
);