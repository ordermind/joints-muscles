import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_longissimus_thoracis",
        label: "m. longissimus thoracis",
        origos: [
            "crista sacralis medialis",
            "facies dorsalis ossis sacri",
            "crista iliaca (mediaal)",
            "fascia thoracolumbalis",
            "processi spinosi et costarum L1&nbsp;-&nbsp;L5",
        ],
        insertions: [
            "processi costarum L1&nbsp;-&nbsp;L5",
            "processi transversi T1&nbsp;-&nbsp;T12",
            "anguli costarum 7&nbsp;-&nbsp;12",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_longissimus_thoracis__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_longissimus_thoracis",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus_thoracis__columna_vertebralis_thoracalis__lateroflexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_longissimus_thoracis",
                    movementId: "columna_vertebralis_thoracalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus_thoracis__columna_vertebralis_lumbalis__extension",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_longissimus_thoracis",
                    movementId: "columna_vertebralis_lumbalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longissimus_thoracis__columna_vertebralis_lumbalis__lateroflexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_longissimus_thoracis",
                    movementId: "columna_vertebralis_lumbalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_longissimus_thoracis.jpeg",
        description: `
M. longissimus is onderdeel van de m. erector spinae.
        `,
    }
);