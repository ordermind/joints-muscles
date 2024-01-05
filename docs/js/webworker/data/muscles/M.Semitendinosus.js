import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_semitendinosus",
        label: "m. semitendinosus",
        origos: [
            "tuber ischiadicum",
        ],
        insertions: [
            "facies medialis tibiae (via de pes anserinus superficialis)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_semitendinosus__art_coxae__retroflexion",
                    jointId: "art_coxae",
                    muscleId: "m_semitendinosus",
                    movementId: "art_coxae__retroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semitendinosus__art_coxae__endorotation",
                    jointId: "art_coxae",
                    muscleId: "m_semitendinosus",
                    movementId: "art_coxae__endorotation",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semitendinosus__art_genus__flexion",
                    jointId: "art_genus",
                    muscleId: "m_semitendinosus",
                    movementId: "art_genus__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semitendinosus__art_genus__endorotation",
                    jointId: "art_genus",
                    muscleId: "m_semitendinosus",
                    movementId: "art_genus__endorotation",
                    isPrimeMover: true,
                    notes: ["alleen bij gebogen knie"],
                }
            ),
        ],
        image: "./images/muscles/m_semitendinosus.jpeg",
        description: `
De distale eindpees vormt, samen met de pezen van de [Link type="Muscle" targetId="m_gracilis" label="m. gracilis"] en de [Link type="Muscle" targetId="m_sartorius" label="m. sartorius"], de <em>pes anserinus superficialis</em>.
        `.trim(),
    }
);