import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_longus_colli",
        label: "m. longus colli",
        origos: [
            "pars recta/verticalis: voorzijden van de wervellichamen C5-T3",
            "pars obliqua superior: processi transversi C3-C5",
            "pars obliqua inferior: voorzijden van de wervellichamen T1-T3",
        ],
        insertions: [
            "pars recta/verticalis: voorzijden van de wervellichamen C2-C4",
            "pars obliqua superior: tuberculum anterius van de atlas",
            "pars obliqua inferior: processi transversi C5-C6",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_longus_colli__columna_vertebralis_cervicalis__flexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_longus_colli",
                    movementId: "columna_vertebralis_cervicalis__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longus_colli__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_longus_colli",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longus_colli__columna_vertebralis_cervicalis__rotation",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_longus_colli",
                    movementId: "columna_vertebralis_cervicalis__rotation",
                    movementLabelOverride: "contralaterale rotatie",
                    isPrimeMover: false,
                    notes: ["contralaterale rotatie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_longus_colli__proprioception",
                    muscleId: "m_longus_colli",
                    functionDescription: "Proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
        image: "./images/muscles/m_longus_colli.jpeg",
    }
);