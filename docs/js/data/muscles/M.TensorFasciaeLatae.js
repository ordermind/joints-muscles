import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_tensor_fasciae_latae",
        label: "m. tensor fasciae latae",
        origos: [
            "crista iliaca (ventraal)",
            "spina iliaca anterior superior",
        ],
        insertions: [
            "tractus iliotibialis",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. gluteus superior",
                    notes: ["L4&nbsp;-&nbsp;S1"]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_tensor_fasciae_latae__art_coxae__anteflexion",
                    jointId: "art_coxae",
                    muscleId: "m_tensor_fasciae_latae",
                    movementId: "art_coxae__anteflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_tensor_fasciae_latae__art_coxae__abduction",
                    jointId: "art_coxae",
                    muscleId: "m_tensor_fasciae_latae",
                    movementId: "art_coxae__abduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_tensor_fasciae_latae__art_coxae__endorotation",
                    jointId: "art_coxae",
                    muscleId: "m_tensor_fasciae_latae",
                    movementId: "art_coxae__endorotation",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_tensor_fasciae_latae__art_genus__flexion",
                    jointId: "art_genus",
                    muscleId: "m_tensor_fasciae_latae",
                    movementId: "art_genus__flexion",
                    isPrimeMover: false,
                    notes: ["alleen als er al > 20° flexie aanwezig is"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_tensor_fasciae_latae__art_genus__extension",
                    jointId: "art_genus",
                    muscleId: "m_tensor_fasciae_latae",
                    movementId: "art_genus__extension",
                    isPrimeMover: false,
                    notes: ["alleen als er al < 20° flexie aanwezig is"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_tensor_fasciae_latae__art_genus__exorotation",
                    jointId: "art_genus",
                    muscleId: "m_tensor_fasciae_latae",
                    movementId: "art_genus__exorotation",
                    isPrimeMover: false,
                    notes: ["alleen bij gebogen knie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_tensor_fasciae_latae__tractus_iliotibialis",
                    muscleId: "m_tensor_fasciae_latae",
                    functionDescription: "spannen van de <em>tractus iliotibialis</em>",
                }
            )
        ],
        image: "./images/muscles/m_tensor_fasciae_latae.jpeg",
        description: `
De tractus iliotibialis insereert aan het tuberculum van Gerdy op de tibia. Deze omstandigheid geeft de spier kleine functiecomponenten over het kniegewricht.
        `.trim(),
    }
);