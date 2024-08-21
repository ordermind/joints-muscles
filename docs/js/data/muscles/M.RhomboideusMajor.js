import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_rhomboideus_major";

export default new Muscle(
    {
        id: muscleId,
        label: "m. rhomboideus major",
        origos: [
            new AnatomicStructure(
                {
                    label: "processi spinosi (T1)T2&nbsp;-&nbsp;T4(T5)",
                    notes: ["De exacte wervels van de origo zijn volgens Nederlandse bronnen T1-T4 en volgens Engelstalige bronnen T2-T5."],
                }
            ),
        ],
        insertions: [
            "margo medialis scapulae (caudaal van het <em>trigonum spinae scapulae</em>)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. dorsalis scapulae",
                    notes: [
                        "C4&nbsp;-&nbsp;C5"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__retraction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__elevation",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__mediorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_rhomboideus_major.jpeg",
        description: `

        `.trim(),
    }
);