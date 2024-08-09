import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_adductor_pollicis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. adductor pollicis",
        origos: [
            new AnatomicStructure(
                {
                    label: "os capitatum (palmair)",
                    notes: ["caput obliquum"]
                }
            ),
            new AnatomicStructure(
                {
                    label: "bases ossium metacarpalium II et III (palmair)",
                    notes: ["caput obliquum"]
                }
            ),
            new AnatomicStructure(
                {
                    label: "os metacarpi III (palmair)",
                    notes: ["caput transversum"]
                }
            ),
        ],
        insertions: [
            new AnatomicStructure({
                label: "basis phalangis proximalis I (mediaal)",
                notes: [
                    "via het ulnaire sesambeentje"
                ]
            }),
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. ulnaris",
                    notes: [
                        "Diepe tak",
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
                    movementId: "art_carpometacarpalis_1__adduction",
                    isPrimeMover: true,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);