import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_obliquus_capitis_superior",
        label: "m. obliquus capitis superior",
        origos: [
            "processus transversus C1",
        ],
        insertions: [
            "os occipitale (tussen linea nuchae superior en linea nuchae inferior)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. suboccipitalis",
                    notes: [
                        "C1"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_obliquus_capitis_superior__juncturae_craniovertebrales__extension",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_obliquus_capitis_superior",
                    movementId: "juncturae_craniovertebrales__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_obliquus_capitis_superior__juncturae_craniovertebrales__lateroflexion",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_obliquus_capitis_superior",
                    movementId: "juncturae_craniovertebrales__lateroflexion",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_obliquus_capitis_superior__proprioception",
                    muscleId: "m_obliquus_capitis_superior",
                    functionDescription: "proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
        image: "./images/muscles/m_obliquus_capitis_superior.jpeg",
    }
);