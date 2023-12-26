import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_longissimus_cervicis",
        label: "m. longissimus cervicis",
        origos: [
            "processi transversi T1-T5",
        ],
        insertions: [
            "processi transversi C2-C6",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_longissimus_cervicis__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_longissimus_cervicis",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus_cervicis__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_longissimus_cervicis",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_longissimus_cervicis.jpeg",
        description: `
M. longissimus is onderdeel van de m. erector spinae.
        `,
    }
);