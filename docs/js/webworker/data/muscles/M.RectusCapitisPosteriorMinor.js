import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_rectus_capitis_posterior_minor",
        label: "m. rectus capitis posterior minor",
        origos: [
            "tuberculum posterius C1",
        ],
        insertions: [
            "linea nuchae inferior (mediaal)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_rectus_capitis_posterior_minor__juncturae_craniovertebrales__extension",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_rectus_capitis_posterior_minor",
                    movementId: "juncturae_craniovertebrales__extension",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_rectus_capitis_posterior_minor__proprioception",
                    muscleId: "m_rectus_capitis_posterior_minor",
                    functionDescription: "proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
        image: "./images/muscles/m_rectus_capitis_posterior_minor.jpeg",
    }
);