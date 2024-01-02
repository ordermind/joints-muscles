import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_popliteus",
        label: "m. popliteus",
        origos: [
            "condylus lateralis femoris (lateraal)",
        ],
        insertions: [
            "facies posterior tibiae (proximaal van de linea m. solei)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_popliteus__art_genus__flexion",
                    jointId: "art_genus",
                    muscleId: "m_popliteus",
                    movementId: "art_genus__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_popliteus__art_genus__endorotation",
                    jointId: "art_genus",
                    muscleId: "m_popliteus",
                    movementId: "art_genus__endorotation",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_popliteus.jpeg",
        description: `
De rol van de musculus popliteus als buiger van de knie is vrij onbeduidend. Desalniettemin speelt de musculus popliteus een belangrijke rol bij het initiëren van flexie van de volledig gestrekte ("vergrendelde") knie. Daarom wordt de musculus popliteus aangeduid als "de sleutel om de knie te ontgrendelen", wat essentieel is voor de processen van lopen, opstaan en gaan zitten.
        `.trim(),
    }
);