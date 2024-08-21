import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_semimembranosus",
        label: "m. semimembranosus",
        origos: [
            "tuber ischiadicum",
        ],
        insertions: [
            "condylus medialis tibiae (via de pes anserinus profundus)",
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
                    id: "m_semimembranosus__art_coxae__retroflexion",
                    jointId: "art_coxae",
                    muscleId: "m_semimembranosus",
                    movementId: "art_coxae__retroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semimembranosus__art_coxae__endorotation",
                    jointId: "art_coxae",
                    muscleId: "m_semimembranosus",
                    movementId: "art_coxae__endorotation",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semimembranosus__art_genus__flexion",
                    jointId: "art_genus",
                    muscleId: "m_semimembranosus",
                    movementId: "art_genus__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semimembranosus__art_genus__endorotation",
                    jointId: "art_genus",
                    muscleId: "m_semimembranosus",
                    movementId: "art_genus__endorotation",
                    isPrimeMover: true,
                    notes: ["alleen bij gebogen knie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_semimembranosus__pelvis",
                    muscleId: "m_semimembranosus",
                    functionDescription: "achteroverkantelen bekken (met bijbehorend afvlakken van lendenlordose)",
                    notes: ["alleen bij gefixeerde insertie"],
                }
            ),
        ],
        image: "./images/muscles/m_semimembranosus.jpeg",
        description: `

        `.trim(),
    }
);