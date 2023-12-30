import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_longus_colli",
        label: "m. longus colli",
        origos: [
            "<em>pars recta/verticalis</em>: facies anteriores corporum vertebralium C5 - T3",
            "<em>pars obliqua superior</em>: processi transversi C3 - C5",
            "<em>pars obliqua inferior</em>: facies anteriores corporum vertebralium T1 - T3",
        ],
        insertions: [
            "<em>pars recta/verticalis</em>: facies anteriores corporum vertebralium C2 - C4",
            "<em>pars obliqua superior</em>: tuberculum anterius C1",
            "<em>pars obliqua inferior</em>: processi transversi C5 - C6",
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
                    functionDescription: "proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
        image: "./images/muscles/m_longus_colli.jpeg",
    }
);