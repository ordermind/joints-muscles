import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_obliquus_internus_abdominis",
        label: "m. obliquus internus abdominis",
        origos: [
            "crista iliaca",
        ],
        insertions: [
            "costae 9-12 (onderrand)",
            "via de rectusschede aan de linea alba",
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
                    functionDescription: "achteroverkantelen bekken (bij gefixeerde thorax)",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "m_obliquus_internus_abdominis__ribs",
                    muscleId: "m_obliquus_internus_abdominis",
                    functionDescription: "detractie van de ribben (expiratie)",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "m_obliquus_internus_abdominis__pressure",
                    muscleId: "m_obliquus_internus_abdominis",
                    functionDescription: "verhoogt intra-abdominale druk (bij gelijktijdige contractie met het diafragma)",
                }
            ),
        ],
        description: `
De spier ligt geheel onder de [Link type="Muscle" targetId="m_obliquus_externus_abdominis" label="m. obliquus externus abdominis"], met uitzondering van een klein gedeelte dat oppervlakkig ligt in het trigonum lumbale.

M. obliquus externus abdominis en m obliquus internus abdominis worden ook wel aangeduid als de <strong>schuine buikspieren</strong>.

De schuine buikspieren vormen met betrekking tot hun rotatiecomponent ten opzichte van de wervelkolom een functionele eenheid.
        `,
    }
);