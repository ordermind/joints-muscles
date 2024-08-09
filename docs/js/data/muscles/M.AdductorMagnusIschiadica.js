import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_adductor_magnus_ischiadica",
        label: "m. adductor magnus, pars ischiadica",
        origos: [
            "tuber ischiadicum",
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "tuberculum adductorium femoris",
                    notes: ["proximaal van epicondylus medialis femoris"],
                }
            )
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. ischiadicus",
                    notes: [
                        "L4"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_adductor_magnus_ischiadica__art_coxae__retroflexion",
                    jointId: "art_coxae",
                    muscleId: "m_adductor_magnus_ischiadica",
                    movementId: "art_coxae__retroflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_adductor_magnus_ischiadica__art_coxae__adduction",
                    jointId: "art_coxae",
                    muscleId: "m_adductor_magnus_ischiadica",
                    movementId: "art_coxae__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_adductor_magnus_ischiadica__art_coxae__endorotation",
                    jointId: "art_coxae",
                    muscleId: "m_adductor_magnus_ischiadica",
                    movementId: "art_coxae__endorotation",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_adductor_magnus_ischiadica.jpeg",
        description: `
Ook bekend als <em>pars inferior</em>. Dit onderdeel van de m. adductor magnus wordt vaak als een hamstring-spier gezien, en wordt daardoor in het Engels ook de "hamstring part" genoemd. Het onderscheidt zich van de andere adductoren door (behalve de adductie) bij te dragen aan retroflexie en endorotatie, i.p.v. anteflexie en exorotatie zoals bij de andere adductoren.
        `.trim(),
    }
);