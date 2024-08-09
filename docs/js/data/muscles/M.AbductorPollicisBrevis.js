import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_abductor_pollicis_brevis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. abductor pollicis brevis",
        origos: [
            new AnatomicStructure({
                label: "eminentia carpi radialis",
                notes: [
                    "een verheving gevormd door de tubercula van os scaphoideum en os trapezium bij de palmaire zijde van de hand"
                ]
            }),
            "retinaculum musculorum flexorum manus"
        ],
        insertions: [
            new AnatomicStructure({
                label: "basis phalangis proximalis I (radiaal)",
                notes: [
                    "via het radiale sesambeentje"
                ]
            }),
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. medianus",
                    notes: [
                        "ramus recurrens",
                        "C8,&nbsp;T1"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_carpometacarpalis_1__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_carpometacarpalis_1__abduction",
                    isPrimeMover: true,
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