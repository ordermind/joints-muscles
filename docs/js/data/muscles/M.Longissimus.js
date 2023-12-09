import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_longissimus",
        label: "m. longissimus",
        origos: [
            "os sacrum",
            "crista iliaca",
            "processi spinosi bij LWK",
            "processi transversi bij BWK en HWK",
        ],
        insertions: [
            "costae 1-12",
            "fascia thoracolumbalis, diep blad",
            "processi transversi",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_longissimus__head_joints__extension",
                    jointId: "head_joints",
                    muscleId: "m_longissimus",
                    movementId: "head_joints__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus__head_joints__lateroflexion",
                    jointId: "head_joints",
                    muscleId: "m_longissimus",
                    movementId: "head_joints__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus__head_joints__rotation",
                    jointId: "head_joints",
                    muscleId: "m_longissimus",
                    movementId: "head_joints__rotation",
                    isPrimeMover: true,
                    notes: ["ipsilaterale rotatie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_longissimus",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_longissimus",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus__columna_vertebralis_cervicalis__rotation",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_longissimus",
                    movementId: "columna_vertebralis_cervicalis__rotation",
                    isPrimeMover: true,
                    notes: ["wellicht contralaterale rotatie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_longissimus",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus__columna_vertebralis_thoracalis__lateroflexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_longissimus",
                    movementId: "columna_vertebralis_thoracalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus__columna_vertebralis_thoracalis__rotation",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_longissimus",
                    movementId: "columna_vertebralis_thoracalis__rotation",
                    isPrimeMover: true,
                    notes: ["ipsilaterale rotatie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus__columna_vertebralis_lumbalis__extension",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_longissimus",
                    movementId: "columna_vertebralis_lumbalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus__columna_vertebralis_lumbalis__lateroflexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_longissimus",
                    movementId: "columna_vertebralis_lumbalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus__columna_vertebralis_lumbalis__rotation",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_longissimus",
                    movementId: "columna_vertebralis_lumbalis__rotation",
                    isPrimeMover: true,
                    notes: ["ipsilaterale rotatie"],
                }
            ),
        ],
        description: `
M. longissimus is onderdeel van de m. erector spinae.

De vezels lopen van os sacrum en fascia thoracolumbalis naar de ribben en de processus transversi van de lumbale en thoracale wervels (m. longisimus thoracis), van de processus transversi van de bovenste thoracale wervels naar de processus transversi van de cervicale wervels (m. longissimus cervicis) en de processus transversi van de cervicale wervels naar de processus mastoideus van de schedel (m. longissimus capitis)
        `,
    }
);