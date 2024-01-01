import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_obliquus_externus_abdominis",
        label: "m. obliquus externus abdominis",
        origos: [
            "facies externae costarum 5 - 12",
        ],
        insertions: [
            "linea alba",
            "crista iliaca (ventrale 2/3 deel)",
            "tuberculum pubicum",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_obliquus_externus_abdominis__columna_vertebralis_thoracalis__flexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_obliquus_externus_abdominis",
                    movementId: "columna_vertebralis_thoracalis__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_externus_abdominis__columna_vertebralis_thoracalis__lateroflexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_obliquus_externus_abdominis",
                    movementId: "columna_vertebralis_thoracalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_externus_abdominis__columna_vertebralis_thoracalis__rotation",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_obliquus_externus_abdominis",
                    movementId: "columna_vertebralis_thoracalis__rotation",
                    movementLabelOverride: "contralaterale rotatie",
                    isPrimeMover: true,
                    notes: ["contralaterale rotatie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_externus_abdominis__columna_vertebralis_lumbalis__flexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_obliquus_externus_abdominis",
                    movementId: "columna_vertebralis_lumbalis__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_externus_abdominis__columna_vertebralis_lumbalis__lateroflexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_obliquus_externus_abdominis",
                    movementId: "columna_vertebralis_lumbalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_externus_abdominis__columna_vertebralis_lumbalis__rotation",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_obliquus_externus_abdominis",
                    movementId: "columna_vertebralis_lumbalis__rotation",
                    movementLabelOverride: "contralaterale rotatie",
                    isPrimeMover: true,
                    notes: ["contralaterale rotatie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_obliquus_externus_abdominis__pelvis",
                    muscleId: "m_obliquus_externus_abdominis",
                    functionDescription: "achteroverkantelen bekken",
                    notes: ["bij gefixeerde thorax"],
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "m_obliquus_externus_abdominis__ribs",
                    muscleId: "m_obliquus_externus_abdominis",
                    functionDescription: "detractie van de ribben (expiratie)",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "m_obliquus_externus_abdominis__pressure",
                    muscleId: "m_obliquus_externus_abdominis",
                    functionDescription: "verhoogt intra-abdominale druk (bij gelijktijdige contractie met het diafragma)",
                }
            ),
        ],
        image: "./images/muscles/m_obliquus_externus_abdominis.jpeg",
        description: `
De spier heeft 8 koppen die alterneren met de koppen van de [Link type="Muscle" targetId="m_serratus_anterior" label="m. serratus anterior"] en de [Link type="Muscle" targetId="m_latissimus_dorsi" label="m. latissimus dorsi"].

De spier vormt de ventrale begrenzing van het trigonum lumbale (petiti). Dit is het driehoekje waar de [Link type="Muscle" targetId="m_obliquus_internus_abdominis" label="m. obliquus internus abdominis"] oppervlakkig ligt.

M. obliquus externus abdominis en m obliquus internus abdominis worden ook wel aangeduid als de <strong>schuine buikspieren</strong>.

De schuine buikspieren vormen met betrekking tot hun rotatiecomponent ten opzichte van de wervelkolom een functionele eenheid.
        `,
    }
);