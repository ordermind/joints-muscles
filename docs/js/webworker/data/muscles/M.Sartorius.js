import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_sartorius",
        label: "m. sartorius",
        origos: [
            "spina iliaca anterior superior",
        ],
        insertions: [
            "facies medialis tibiae (via de pes anserinus superficialis)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_sartorius__art_coxae__anteflexion",
                    jointId: "art_coxae",
                    muscleId: "m_sartorius",
                    movementId: "art_coxae__anteflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_sartorius__art_coxae__abduction",
                    jointId: "art_coxae",
                    muscleId: "m_sartorius",
                    movementId: "art_coxae__abduction",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_sartorius__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_sartorius",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_sartorius__art_genus__flexion",
                    jointId: "art_genus",
                    muscleId: "m_sartorius",
                    movementId: "art_genus__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_sartorius__art_genus__endorotation",
                    jointId: "art_genus",
                    muscleId: "m_sartorius",
                    movementId: "art_genus__endorotation",
                    isPrimeMover: true,
                    notes: ["alleen bij gebogen knie"],
                }
            ),
        ],
        image: "./images/muscles/m_sartorius.jpeg",
        description: `
Een lange parallelvezelige spier. De eindpees vormt, samen met de pezen van de [Link type="Muscle" targetId="m_gracilis" label="m. gracilis"] en de [Link type="Muscle" targetId="m_semitendinosus" label="m. semitendinosus"], de <em>pes anserinus superficialis</em>.
        `.trim(),
    }
);