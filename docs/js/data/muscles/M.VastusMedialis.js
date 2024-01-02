import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_vastus_medialis",
        label: "m. vastus medialis",
        origos: [
            "mediale zijde van het corpus femoris tot aan de linea aspera",
        ],
        insertions: [
            "tuberositas tibiae (via de patella en het ligamentum patellae)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_vastus_medialis__art_genus__extension",
                    jointId: "art_genus",
                    muscleId: "m_vastus_medialis",
                    movementId: "art_genus__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_vastus_medialis.jpeg",
        description: `
Deze spier vormt, samen met de [Link type="Muscle" targetId="m_rectus_femoris" label="m. rectus femoris"], [Link type="Muscle" targetId="m_vastus_intermedius" label="m. vastus intermedius"] en [Link type="Muscle" targetId="m_vastus_lateralis" label="m. vastus lateralis"], de [Link type="Muscle" targetId="m_quadriceps_femoris" label="m. quadriceps femoris"].
        `.trim(),
    }
);