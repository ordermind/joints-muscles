import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_obliquus_internus_abdominis",
        label: "m. obliquus internus abdominis",
        origos: [
            "crista iliaca (ventrale 2/3 deel)",
            "fascia thoracolumbalis",
        ],
        insertions: [
            "linea alba",
            "margines inferiores costarum (9)10 - 12",
            "crista pubica",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_obliquus_internus_abdominis__columna_vertebralis_thoracalis__flexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_obliquus_internus_abdominis",
                    movementId: "columna_vertebralis_thoracalis__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_internus_abdominis__columna_vertebralis_thoracalis__lateroflexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_obliquus_internus_abdominis",
                    movementId: "columna_vertebralis_thoracalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_internus_abdominis__columna_vertebralis_thoracalis__rotation",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_obliquus_internus_abdominis",
                    movementId: "columna_vertebralis_thoracalis__rotation",
                    movementLabelOverride: "ipsilaterale rotatie",
                    isPrimeMover: true,
                    notes: ["ipsilaterale rotatie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_internus_abdominis__columna_vertebralis_lumbalis__flexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_obliquus_internus_abdominis",
                    movementId: "columna_vertebralis_lumbalis__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_internus_abdominis__columna_vertebralis_lumbalis__lateroflexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_obliquus_internus_abdominis",
                    movementId: "columna_vertebralis_lumbalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_internus_abdominis__columna_vertebralis_lumbalis__rotation",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_obliquus_internus_abdominis",
                    movementId: "columna_vertebralis_lumbalis__rotation",
                    movementLabelOverride: "ipsilaterale rotatie",
                    isPrimeMover: true,
                    notes: ["ipsilaterale rotatie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_obliquus_internus_abdominis__pelvis",
                    muscleId: "m_obliquus_internus_abdominis",
                    functionDescription: "achteroverkantelen bekken",
                    notes: ["bij gefixeerde thorax"],
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "m_obliquus_internus_abdominis__ribs",
                    muscleId: "m_obliquus_internus_abdominis",
                    functionDescription: "expiratie (door middel van detractie van de ribben)",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "m_obliquus_internus_abdominis__pressure",
                    muscleId: "m_obliquus_internus_abdominis",
                    functionDescription: "verhoogt de intra-abdominale druk",
                    notes: ["bij gelijktijdige contractie met het diafragma"],
                }
            ),
        ],
        image: "./images/muscles/m_obliquus_internus_abdominis.jpeg",
        description: `
De spier ligt geheel onder de [Link type="Muscle" targetId="m_obliquus_externus_abdominis" label="m. obliquus externus abdominis"], met uitzondering van een klein gedeelte dat oppervlakkig ligt in het trigonum lumbale.

M. obliquus externus abdominis en m obliquus internus abdominis worden ook wel aangeduid als de <strong>schuine buikspieren</strong>.

De schuine buikspieren vormen met betrekking tot hun rotatiecomponent ten opzichte van de wervelkolom een functionele eenheid.
        `,
    }
);