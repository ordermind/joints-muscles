import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_rectus_capitis_anterior",
        label: "m. rectus capitis anterior",
        origos: [
            "massa lateralis C1",
            "processus transversus C1",
        ],
        insertions: [
            "os occipitale, pars basilaris",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_rectus_capitis_anterior__juncturae_craniovertebrales__flexion",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_rectus_capitis_anterior",
                    movementId: "juncturae_craniovertebrales__flexion",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_rectus_capitis_anterior__proprioception",
                    muscleId: "m_rectus_capitis_anterior",
                    functionDescription: "proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
        image: "./images/muscles/m_rectus_capitis_anterior.jpeg",
    }
);