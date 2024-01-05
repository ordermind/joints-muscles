import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_rectus_capitis_lateralis",
        label: "m. rectus capitis lateralis",
        origos: [
            "processus transversus C1",
        ],
        insertions: [
            "processus jugularis ossis occipitalis",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_rectus_capitis_lateralis__juncturae_craniovertebrales__lateroflexion",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_rectus_capitis_lateralis",
                    movementId: "juncturae_craniovertebrales__lateroflexion",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_rectus_capitis_lateralis__proprioception",
                    muscleId: "m_rectus_capitis_lateralis",
                    functionDescription: "proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
        image: "./images/muscles/m_rectus_capitis_lateralis.jpeg",
    }
);