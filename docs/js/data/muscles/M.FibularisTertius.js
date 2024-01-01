import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_fibularis_tertius",
        label: "m. fibularis tertius",
        origos: [
            "soms facies medialis fibulae (distale 1/3 deel) en membrana interossea cruris",
            "soms een extra pees van de m. extensor digitorum longus",
        ],
        insertions: [
            "basis ossis metatarsalis V (dorsaal)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_fibularis_tertius__art_talocruralis__dorsal_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_fibularis_tertius",
                    movementId: "art_talocruralis__dorsal_flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_fibularis_tertius__art_talotarsalis__eversion",
                    jointId: "art_talotarsalis",
                    muscleId: "m_fibularis_tertius",
                    movementId: "art_talotarsalis__eversion",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_fibularis_tertius.jpeg",
        description: `
Ook bekend als <em>m. peroneus tertius</em>. Deze spier is niet altijd aanwezig en de origo's kunnen ook varieren.
        `.trim(),
    }
);