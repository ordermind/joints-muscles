import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_obliquus_capitis_superior",
        label: "m. obliquus capitis superior",
        origos: [
            "processus transversus van de atlas",
        ],
        insertions: [
            "linea nuchae inferior (middelste derde), boven de insertie van m. rectus capitis posterior major",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_obliquus_capitis_superior__head_joints__extension",
                    jointId: "head_joints",
                    muscleId: "m_obliquus_capitis_superior",
                    movementId: "head_joints__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_capitis_superior__head_joints__lateroflexion",
                    jointId: "head_joints",
                    muscleId: "m_obliquus_capitis_superior",
                    movementId: "head_joints__lateroflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_capitis_superior__head_joints__rotation",
                    jointId: "head_joints",
                    muscleId: "m_obliquus_capitis_superior",
                    movementId: "head_joints__rotation",
                    isPrimeMover: false,
                    notes: ["contralaterale rotatie"],
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
        image: "./images/muscles/m_obliquus_capitis_superior.jpeg",
    }
);