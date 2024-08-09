import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_biceps_femoris",
        label: "m. biceps femoris",
        origos: [
            new AnatomicStructure(
                {
                    label: "tuber ischiadicum",
                    notes: ["caput longum"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "linea aspera femoris (distale helft, lateraal)",
                    notes: ["caput breve"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "linea supracondylaris lateralis femoris",
                    notes: ["caput breve"],
                }
            ),
        ],
        insertions: [
            "caput fibulae (lateraal)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. ischiadicus",
                    notes: [
                        "L5&nbsp;-&nbsp;S2"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_biceps_femoris__art_genus__flexion",
                    jointId: "art_genus",
                    muscleId: "m_biceps_femoris",
                    movementId: "art_genus__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_biceps_femoris__art_genus__exorotation",
                    jointId: "art_genus",
                    muscleId: "m_biceps_femoris",
                    movementId: "art_genus__exorotation",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_biceps_femoris__art_coxae__retroflexion",
                    jointId: "art_coxae",
                    muscleId: "m_biceps_femoris",
                    movementId: "art_coxae__retroflexion",
                    isPrimeMover: true,
                    notes: ["alleen caput longum"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_biceps_femoris__pelvis",
                    muscleId: "m_biceps_femoris",
                    functionDescription: "achteroverkantelen bekken (met bijbehorend afvlakken van lendenlordose)",
                    notes: [
                        "alleen caput longum",
                        "alleen bij gefixeerde insertie",
                    ],
                }
            ),
        ],
        image: "./images/muscles/m_biceps_femoris.jpeg",
        description: `

        `.trim(),
    }
);