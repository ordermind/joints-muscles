import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_flexor_pollicis_brevis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. flexor pollicis brevis",
        origos: [
            new AnatomicStructure(
                {
                    label: "tuberculum ossis trapezii",
                    notes: ["caput superficiale"]
                }
            ),
            new AnatomicStructure(
                {
                    label: "retinaculum musculorum flexorum manus",
                    notes: ["caput superficiale"]
                }
            ),
            new AnatomicStructure(
                {
                    label: "os trapezoideum (palmair)",
                    notes: ["caput profundum"]
                }
            ),
            new AnatomicStructure(
                {
                    label: "os capitatum (palmair)",
                    notes: ["caput profundum"]
                }
            ),
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
                    label: "ramus recurrens n. medianus",
                    notes: [
                        "C8&nbsp;-&nbsp;T1",
                        "caput superficiale"
                    ]
                }
            ),
            new AnatomicStructure(
                {
                    label: "ramus profundus n. ulnaris",
                    notes: [
                        "C8&nbsp;-&nbsp;T1",
                        "caput profundum"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_carpometacarpalis_1__flexion",
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
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_metacarpophalangea_1__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);