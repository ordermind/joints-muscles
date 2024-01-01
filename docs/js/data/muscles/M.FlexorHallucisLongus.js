import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_flexor_hallucis_longus",
        label: "m. flexor hallucis longus",
        origos: [
            "facies posterior fibulae (distale 2/3 deel)",
            "membrana interossea cruris",
        ],
        insertions: [
            "basis phalangis distalis I (plantair)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_flexor_hallucis_longus__art_talocruralis__plantar_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_flexor_hallucis_longus",
                    movementId: "art_talocruralis__plantar_flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_hallucis_longus__art_talotarsalis__inversion",
                    jointId: "art_talotarsalis",
                    muscleId: "m_flexor_hallucis_longus",
                    movementId: "art_talotarsalis__inversion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_hallucis_longus__art_metatarsophalangea_1__flexion",
                    jointId: "art_metatarsophalangea_1",
                    muscleId: "m_flexor_hallucis_longus",
                    movementId: "art_metatarsophalangea_1__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_hallucis_longus__art_interphalangea_pedis_1__flexion",
                    jointId: "art_interphalangea_pedis_1",
                    muscleId: "m_flexor_hallucis_longus",
                    movementId: "art_interphalangea_pedis_1__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_flexor_hallucis_longus.jpeg",
        description: `

        `.trim(),
    }
);