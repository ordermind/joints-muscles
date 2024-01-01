import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_fibularis_brevis",
        label: "m. fibularis brevis",
        origos: [
            "facies lateralis fibulae (distale 2/3 deel)",
            "septa intermuscularia crurum anterius en posterius",
        ],
        insertions: [
            "tuberositas ossis metatarsalis V",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_fibularis_brevis__art_talocruralis__plantar_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_fibularis_brevis",
                    movementId: "art_talocruralis__plantar_flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_fibularis_brevis__art_talotarsalis__eversion",
                    jointId: "art_talotarsalis",
                    muscleId: "m_fibularis_brevis",
                    movementId: "art_talotarsalis__eversion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_fibularis_brevis.jpeg",
        description: `
Ook bekend als <em>m. peroneus brevis</em>.
        `.trim(),
    }
);