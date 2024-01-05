import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_quadratus_lumborum",
        label: "m. quadratus lumborum",
        origos: [
            "crista iliaca (dorsaal)",
        ],
        insertions: [
            "margo inferior costae 12",
            "processi costarum L1 - L4",
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
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_quadratus_lumborum.jpeg",
        description: `
De spier ligt in de achterwand van de buikholte, vóór de m. erector spinae en wordt van deze spier gescheiden door de fascia thoracolumbalis.

De spier zou een rol spelen bij de detractie van costa 12 (expiratie).
        `,
    }
);