import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_quadratus_lumborum",
        label: "m. quadratus lumborum",
        origos: [
            "crista iliaca (achterste deel)",
        ],
        insertions: [
            "costa 12",
            "processi costales L1-L4",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_quadratus_lumborum__columna_vertebralis_lumbalis__extension",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_quadratus_lumborum",
                    movementId: "columna_vertebralis_lumbalis__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_quadratus_lumborum__columna_vertebralis_lumbalis__lateroflexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_quadratus_lumborum",
                    movementId: "columna_vertebralis_lumbalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
        ],
        description: `
De spier ligt in de achterwand van de buikholte, vóór de m. erector spinae en wordt van deze spier gescheiden door de fascia thoracolumbalis. De spier zou een rol spelen bij de detractie van costa 12 (expiratie).
        `,
    }
);