import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_rectus_capitis_posterior_major",
        label: "m. rectus capitis posterior major",
        origos: [
            "processus spinosus van de axis",
        ],
        insertions: [
            "linea nuchae inferior (mediale 1/3 deel)"
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_rectus_capitis_posterior_major__head_joints__extension",
                    jointId: "head_joints",
                    muscleId: "m_rectus_capitis_posterior_major",
                    movementId: "head_joints__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_rectus_capitis_posterior_major__head_joints__rotation",
                    jointId: "head_joints",
                    muscleId: "m_rectus_capitis_posterior_major",
                    movementId: "head_joints__rotation",
                    isPrimeMover: false,
                    notes: ["ipsilaterale rotatie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_rectus_capitis_posterior_major__proprioception",
                    muscleId: "m_rectus_capitis_posterior_major",
                    functionDescription: "Proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
    }
);