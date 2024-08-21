import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_vastus_intermedius",
        label: "m. vastus intermedius",
        origos: [
            "ventrale en laterale zijde van het corpus femoris (proximale 2/3 deel)",
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
                    id: "m_vastus_intermedius__art_genus__extension",
                    jointId: "art_genus",
                    muscleId: "m_vastus_intermedius",
                    movementId: "art_genus__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_vastus_intermedius.jpeg",
        description: `
Deze spier vormt, samen met de [Link type="Muscle" targetId="m_rectus_femoris" label="m. rectus femoris"], [Link type="Muscle" targetId="m_vastus_medialis" label="m. vastus medialis"] en [Link type="Muscle" targetId="m_vastus_lateralis" label="m. vastus lateralis"], de [Link type="Muscle" targetId="m_quadriceps_femoris" label="m. quadriceps femoris"].

De m. vastus intermedius wordt bedekt door de andere spieren van de [Link type="Muscle" targetId="m_quadriceps_femoris" label="m. quadriceps femoris"].
        `.trim(),
    }
);