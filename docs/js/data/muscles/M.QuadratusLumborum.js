import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_quadratus_lumborum",
        label: "m. quadratus lumborum",
        origos: [
            "crista iliaca (dorsaal)",
        ],
        insertions: [
            "margo inferior costae 12",
            "processi costales L1&nbsp;-&nbsp;L4",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. subcostalis",
                    notes: [
                        "L12",
                    ]
                }
            ),
            new AnatomicStructure(
                {
                    label: "rami anteriores nervorum spinalium lumborum",
                    notes: [
                        "L1&nbsp;-&nbsp;L4"
                    ]
                }
            )
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
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_quadratus_lumborum__pelvis",
                    muscleId: "m_quadratus_lumborum",
                    functionDescription: "vooroverkantelen bekken (met bijbehorende toename van lendenlordose)",
                    notes: ["alleen bij gefixeerde insertie"],
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