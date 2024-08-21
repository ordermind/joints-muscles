import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_rectus_femoris",
        label: "m. rectus femoris",
        origos: [
            "spina iliaca anterior inferior",
            "sulcus supraacetabularis",
        ],
        insertions: [
            "tuberositas tibiae (via de patella en het ligamentum patellae)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. femoralis",
                    notes: [
                        "L2&nbsp;-&nbsp;L4"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_rectus_femoris__art_coxae__anteflexion",
                    jointId: "art_coxae",
                    muscleId: "m_rectus_femoris",
                    movementId: "art_coxae__anteflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_rectus_femoris__art_genus__extension",
                    jointId: "art_genus",
                    muscleId: "m_rectus_femoris",
                    movementId: "art_genus__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_rectus_femoris.jpeg",
        description: `
Deze spier vormt, samen met de [Link type="Muscle" targetId="m_vastus_medialis" label="m. vastus medialis"], [Link type="Muscle" targetId="m_vastus_intermedius" label="m. vastus intermedius"] en [Link type="Muscle" targetId="m_vastus_lateralis" label="m. vastus lateralis"], de [Link type="Muscle" targetId="m_quadriceps_femoris" label="m. quadriceps femoris"]. Dit is de enige bi-articulaire spier daarvan; de andere spieren zijn mono-articulair.
        `.trim(),
    }
);