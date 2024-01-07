import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_scalenus_posterior",
        label: "m. scalenus posterior",
        origos: [
            "processi transversi C5&nbsp;-&nbsp;C7",
        ],
        insertions: [
            "facies externa costae 2",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_scalenus_posterior__columna_vertebralis_cervicalis__flexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_posterior",
                    movementId: "columna_vertebralis_cervicalis__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_scalenus_posterior__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_posterior",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_scalenus_posterior__columna_vertebralis_cervicalis__rotation",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_posterior",
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
                    id: "m_scalenus_posterior__breathing",
                    muscleId: "m_scalenus_posterior",
                    functionDescription: "inspiratie (door middel van elevatie van de ribben)",
                    notes: ["bij gefixeerde halswervelkolom de bovenste ribben fixeren / heffen"],
                }
            )
        ],
        image: "./images/muscles/m_scalenus_posterior.jpeg",
    }
);