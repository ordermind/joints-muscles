import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_rectus_abdominis",
        label: "m. rectus abdominis",
        origos: [
            "voorzijde ribkraakbeen costae 5-7",
            "processus xiphoideus sterni",
        ],
        insertions: [
            "symphysis pubica",
            "bovenrand os pubis",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_rectus_abdominis__columna_vertebralis_thoracalis__flexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_rectus_abdominis",
                    movementId: "columna_vertebralis_thoracalis__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_rectus_abdominis__columna_vertebralis_lumbalis__flexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_rectus_abdominis",
                    movementId: "columna_vertebralis_lumbalis__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_rectus_abdominis__pelvis",
                    muscleId: "m_rectus_abdominis",
                    functionDescription: "achteroverkantelen bekken (bij gefixeerde thorax)",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "m_rectus_abdominis__ribs",
                    muscleId: "m_rectus_abdominis",
                    functionDescription: "detractie van de ribben (expiratie)",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "m_rectus_abdominis__pressure",
                    muscleId: "m_rectus_abdominis",
                    functionDescription: "<strong>(gering)</strong> verhoogt intra-abdominale druk (bij gelijktijdige contractie met het diafragma).",
                }
            ),
        ],
        image: "./images/muscles/m_rectus_abdominis.jpeg",
    }
);