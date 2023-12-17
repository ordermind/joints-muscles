import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_rectus_capitis_anterior",
        label: "m. rectus capitis anterior",
        origos: [
            "massa lateralis van de atlas",
        ],
        insertions: [
            "os occipitale, pars basilaris"
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_rectus_capitis_anterior__head_joints__flexion",
                    jointId: "head_joints",
                    muscleId: "m_rectus_capitis_anterior",
                    movementId: "head_joints__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_rectus_capitis_anterior__head_joints__lateroflexion",
                    jointId: "head_joints",
                    muscleId: "m_rectus_capitis_anterior",
                    movementId: "head_joints__lateroflexion",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_rectus_capitis_anterior__proprioception",
                    muscleId: "m_rectus_capitis_anterior",
                    functionDescription: "Proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
        image: "./images/muscles/m_rectus_capitis_anterior.jpeg",
    }
);