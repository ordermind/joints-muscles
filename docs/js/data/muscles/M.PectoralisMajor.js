import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_pectoralis_major",
        label: "m. pectoralis major",
        origos: [
            new AnatomicStructure(
                {
                    label: "facies anterior claviculae (mediale helft)",
                    notes: ["pars clavicularis"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "facies anterior sterni",
                    notes: ["pars sternocostalis"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "cartilagines costales 1&nbsp;-&nbsp;6",
                    notes: ["pars sternocostalis"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "lamina anterior vaginae musculi recti abdominis",
                    notes: ["pars abdominalis"],
                }
            ),
        ],
        insertions: [
            "crista tuberculi majoris humeri",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_pectoralis_major__shoulder_girdle__protraction",
                    jointId: "shoulder_girdle",
                    muscleId: "m_pectoralis_major",
                    movementId: "shoulder_girdle__protraction",
                    isPrimeMover: true,
                    notes: [
                        "alleen bij fixatie van de <em>art. humeri</em>",
                        "met name pars sternocostalis",
                    ],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_pectoralis_major__art_humeri__anteflexion",
                    jointId: "art_humeri",
                    muscleId: "m_pectoralis_major",
                    movementId: "art_humeri__anteflexion",
                    isPrimeMover: true,
                    notes: ["met name pars clavicularis"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_pectoralis_major__art_humeri__retroflexion",
                    jointId: "art_humeri",
                    muscleId: "m_pectoralis_major",
                    movementId: "art_humeri__retroflexion",
                    isPrimeMover: false,
                    notes: [
                        "alleen vanuit anteflexiestand",
                        "pars sternocostalis en pars abdominalis",
                    ],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_pectoralis_major__art_humeri__adduction",
                    jointId: "art_humeri",
                    muscleId: "m_pectoralis_major",
                    movementId: "art_humeri__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_pectoralis_major__art_humeri__endorotation",
                    jointId: "art_humeri",
                    muscleId: "m_pectoralis_major",
                    movementId: "art_humeri__endorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_pectoralis_major__breathing",
                    muscleId: "m_pectoralis_major",
                    functionDescription: "inspiratie (door middel van elevatie van de ribben)",
                    notes: ["alleen bij fixatie van de <em>art. humeri</em>"],
                }
            ),
        ],
        image: "./images/muscles/m_pectoralis_major.jpeg",
        description: `

        `.trim(),
    }
);