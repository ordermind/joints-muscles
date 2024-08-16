import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_quadratus_femoris",
        label: "m. quadratus femoris",
        origos: [
            "margo lateralis tuberis ischiadici",
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "crista intertrochanterica femoris",
                }
            ),
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. m. quadrati femoris",
                    notes: [
                        "L4&nbsp;-&nbsp;S1",
                    ]
                }
            ),
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_quadratus_femoris__art_coxae__adduction",
                    jointId: "art_coxae",
                    muscleId: "m_quadratus_femoris",
                    movementId: "art_coxae__adduction",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_quadratus_femoris__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_quadratus_femoris",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_quadratus_femoris.jpeg",
        description: `

        `.trim(),
    }
);