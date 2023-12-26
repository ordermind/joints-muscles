import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_longus_capitis",
        label: "m. longus capitis",
        origos: [
            "processi transversi C3 - C6",
        ],
        insertions: [
            "os occipitale, pars basilaris",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_longus_capitis__head_joints__flexion",
                    jointId: "head_joints",
                    muscleId: "m_longus_capitis",
                    movementId: "head_joints__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longus_capitis__head_joints__rotation",
                    jointId: "head_joints",
                    muscleId: "m_longus_capitis",
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
                    id: "m_longus_capitis__proprioception",
                    muscleId: "m_longus_capitis",
                    functionDescription: "Proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
        image: "./images/muscles/m_longus_capitis.jpeg",
    }
);