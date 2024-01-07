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
                    id: "m_longus_capitis__juncturae_craniovertebrales__flexion",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_longus_capitis",
                    movementId: "juncturae_craniovertebrales__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longus_capitis__juncturae_craniovertebrales__rotation",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_longus_capitis",
                    movementId: "juncturae_craniovertebrales__rotation",
                    movementLabelOverride: "ipsilaterale rotatie",
                    isPrimeMover: false,
                    notes: ["ipsilaterale rotatie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longus_capitis__columna_vertebralis_cervicalis__flexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_longus_capitis",
                    movementId: "columna_vertebralis_cervicalis__flexion",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_longus_capitis__proprioception",
                    muscleId: "m_longus_capitis",
                    functionDescription: "proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
        image: "./images/muscles/m_longus_capitis.jpeg",
    }
);