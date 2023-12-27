import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_scalenus_medius",
        label: "m. scalenus medius",
        origos: [
            "processi transversi (C1)C2 - C7",
        ],
        insertions: [
            "margo costalis superior 1",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_scalenus_medius__columna_vertebralis_cervicalis__flexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_medius",
                    movementId: "columna_vertebralis_cervicalis__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_scalenus_medius__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_medius",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_scalenus_medius__columna_vertebralis_cervicalis__rotation",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_medius",
                    movementId: "columna_vertebralis_cervicalis__rotation",
                    movementLabelOverride: "ipsilaterale rotatie",
                    isPrimeMover: false,
                    notes: ["ipsilaterale rotatie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_scalenus_medius__breathing",
                    muscleId: "m_scalenus_medius",
                    functionDescription: "bij gefixeerde halswervelkolom de bovenste ribben fixeren / heffen ten behoeve van inspiratie",
                }
            )
        ],
        image: "./images/muscles/m_scalenus_medius.jpeg",
    }
);