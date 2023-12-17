import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_rectus_capitis_posterior_minor",
        label: "m. rectus capitis posterior minor",
        origos: [
            "tuberculum posterius van de atlas",
        ],
        insertions: [
            "linea nuchae inferior (mediale 1/3 deel)"
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_rectus_capitis_posterior_minor__head_joints__extension",
                    jointId: "head_joints",
                    muscleId: "m_rectus_capitis_posterior_minor",
                    movementId: "head_joints__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_rectus_capitis_posterior_minor__head_joints__rotation",
                    jointId: "head_joints",
                    muscleId: "m_rectus_capitis_posterior_minor",
                    movementId: "head_joints__rotation",
                    isPrimeMover: false,
                    notes: ["ipsilaterale rotatie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_rectus_capitis_posterior_minor__proprioception",
                    muscleId: "m_rectus_capitis_posterior_minor",
                    functionDescription: "Proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
        image: "./images/muscles/m_rectus_capitis_posterior_minor.jpeg",
    }
);