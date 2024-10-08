import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_subclavius";

export default new Muscle(
    {
        id: muscleId,
        label: "m. subclavius",
        origos: [
            "facies superior costae 1 (mediaal)",
            "cartilago costalis 1",
        ],
        insertions: [
            "facies inferior extremitatis acromialis claviculae",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. subclavius",
                    notes: [
                        "C5&nbsp;-&nbsp;C6"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__depression",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "art_sternoclavicularis",
                    muscleId: muscleId,
                    functionDescription: "stabilisatie van de <em>art. sternoclavicularis</em>",
                }
            ),
        ],
        image: "./images/muscles/m_subclavius.jpeg",
        description: `

        `.trim(),
    }
);