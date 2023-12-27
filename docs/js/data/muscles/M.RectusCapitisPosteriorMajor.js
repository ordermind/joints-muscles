import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_rectus_capitis_posterior_major",
        label: "m. rectus capitis posterior major",
        origos: [
            "processus spinosus C2",
        ],
        insertions: [
            "linea nuchae inferior (lateraal)",
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
                    movementLabelOverride: "ipsilaterale rotatie",
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
                    functionDescription: "proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
        image: "./images/muscles/m_rectus_capitis_posterior_major.jpeg",
    }
);