import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_adductor_magnus_adductoria",
        label: "m. adductor magnus, pars adductoria",
        origos: [
            "ramus inferior ossis pubis",
            "ramus ossis ischii",
        ],
        insertions: [
            "linea aspera femoris",
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
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_adductor_magnus_adductoria__pelvis",
                    muscleId: "m_adductor_magnus_adductoria",
                    functionDescription: "het bekken stabiliseren tijdens lopen",
                }
            ),
        ],
        image: "./images/muscles/m_adductor_magnus_adductoria.jpeg",
        description: `
Ook bekend als <em>pars superior</em> + <em>pars media</em>. Het bovenste gedeelte hiervan (pars superior) wordt soms als een aparte spier gezien, <em>m. adductor minimus</em> genaamd.
        `.trim(),
    }
);