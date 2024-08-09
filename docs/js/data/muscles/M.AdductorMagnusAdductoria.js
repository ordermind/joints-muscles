import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_adductor_magnus_adductoria",
        label: "m. adductor magnus, pars adductoria",
        origos: [
            "ramus inferior ossis pubis",
            "ramus ossis ischii",
        ],
        insertions: [
            "linea aspera femoris (mediaal)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. obturatorius",
                    notes: [
                        "L2&nbsp;-&nbsp;L4"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_adductor_magnus_adductoria__art_coxae__anteflexion",
                    jointId: "art_coxae",
                    muscleId: "m_adductor_magnus_adductoria",
                    movementId: "art_coxae__anteflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_adductor_magnus_adductoria__art_coxae__adduction",
                    jointId: "art_coxae",
                    muscleId: "m_adductor_magnus_adductoria",
                    movementId: "art_coxae__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_adductor_magnus_adductoria__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_adductor_magnus_adductoria",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_adductor_magnus_adductoria.jpeg",
        description: `
Ook bekend als <em>pars superior</em> + <em>pars media</em>. Het bovenste gedeelte hiervan (pars superior) wordt soms als een aparte spier gezien, <em>m. adductor minimus</em> genaamd.
        `.trim(),
    }
);