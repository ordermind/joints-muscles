import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_obliquus_capitis_inferior",
        label: "m. obliquus capitis inferior",
        origos: [
            "processus spinosus C2",
        ],
        insertions: [
            "processus transversus C1",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_obliquus_capitis_inferior__head_joints__extension",
                    jointId: "head_joints",
                    muscleId: "m_obliquus_capitis_inferior",
                    movementId: "head_joints__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_capitis_inferior__head_joints__rotation",
                    jointId: "head_joints",
                    muscleId: "m_obliquus_capitis_inferior",
                    movementId: "head_joints__rotation",
                    movementLabelOverride: "ipsilaterale rotatie",
                    isPrimeMover: true,
                    notes: ["ipsilaterale rotatie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_obliquus_capitis_superior__proprioception",
                    muscleId: "m_obliquus_capitis_superior",
                    functionDescription: "Proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
        image: "./images/muscles/m_obliquus_capitis_inferior.jpeg",
    }
);