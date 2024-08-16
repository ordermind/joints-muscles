import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_opponens_pollicis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. opponens pollicis",
        origos: [
            "tuberculum ossis trapezii",
            "retinaculum musculorum flexorum manus",
        ],
        insertions: [
            "margo radialis ossis metacarpalis I"
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "ramus recurrens n. medianus",
                    notes: [
                        "C8&nbsp;-&nbsp;T1"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_carpometacarpalis_1__abduction",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_carpometacarpalis_1__opposition",
                    isPrimeMover: true,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);