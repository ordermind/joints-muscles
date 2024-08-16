import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_pectoralis_minor";

export default new Muscle(
    {
        id: muscleId,
        label: "m. pectoralis minor",
        origos: [
            "facies anteriores costarum 3&nbsp;-&nbsp;5",
        ],
        insertions: [
            "processus coracoideus scapulae",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "nn. pectorales laterales et mediales",
                    notes: [
                        "C5&nbsp;-&nbsp;T1"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__protraction",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__depression",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__mediorotation",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__breathing",
                    muscleId: muscleId,
                    functionDescription: "inspiratie (door middel van elevatie van de ribben)",
                    notes: [
                        "alleen bij fixatie van de <em>scapula</em>",
                    ],
                }
            ),
        ],
        image: "./images/muscles/m_pectoralis_minor.jpeg",
        description: `

        `.trim(),
    }
);