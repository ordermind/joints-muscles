import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_iliocostalis_lumborum",
        label: "m. iliocostalis lumborum",
        origos: [
            "crista sacralis lateralis",
            "crista iliaca (mediaal)",
            "fascia thoracolumbalis",
        ],
        insertions: [
            "processi costarum L1 - L4",
            "anguli costarum 7 - 12",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_iliocostalis_lumborum__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_iliocostalis_lumborum",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_iliocostalis_lumborum__columna_vertebralis_thoracalis__lateroflexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_iliocostalis_lumborum",
                    movementId: "columna_vertebralis_thoracalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_iliocostalis_lumborum__columna_vertebralis_lumbalis__extension",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_iliocostalis_lumborum",
                    movementId: "columna_vertebralis_lumbalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_iliocostalis_lumborum__columna_vertebralis_lumbalis__lateroflexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_iliocostalis_lumborum",
                    movementId: "columna_vertebralis_lumbalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_iliocostalis_lumborum.jpeg",
        description: `
M. iliocostalis is onderdeel van de m. erector spinae.
        `,
    }
);