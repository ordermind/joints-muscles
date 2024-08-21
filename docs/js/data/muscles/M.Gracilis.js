import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_gracilis",
        label: "m. gracilis",
        origos: [
            "ramus inferior ossis pubis",
        ],
        insertions: [
            "facies medialis tibiae (via de pes anserinus superficialis)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. obturatorius",
                    notes: ["L2&nbsp;-&nbsp;L3"]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_gracilis__art_coxae__anteflexion",
                    jointId: "art_coxae",
                    muscleId: "m_gracilis",
                    movementId: "art_coxae__anteflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gracilis__art_coxae__adduction",
                    jointId: "art_coxae",
                    muscleId: "m_gracilis",
                    movementId: "art_coxae__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gracilis__art_genus__flexion",
                    jointId: "art_genus",
                    muscleId: "m_gracilis",
                    movementId: "art_genus__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gracilis__art_genus__endorotation",
                    jointId: "art_genus",
                    muscleId: "m_gracilis",
                    movementId: "art_genus__endorotation",
                    isPrimeMover: true,
                    notes: ["alleen bij gebogen knie"],
                }
            ),
        ],
        image: "./images/muscles/m_gracilis.jpeg",
        description: `
De spier ligt distaal tussen de pezen van de [Link type="Muscle" targetId="m_sartorius" label="m. sartorius"] en [Link type="Muscle" targetId="m_semitendinosus" label="m. semitendinosus"] en zijn distale eindpees vormt, samen met de pezen van de [Link type="Muscle" targetId="m_semitendinosus" label="m. semitendinosus"] en de [Link type="Muscle" targetId="m_sartorius" label="m. sartorius"], de <em>pes anserinus superficialis</em>.
        `.trim(),
    }
);