import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_extensor_hallucis_longus",
        label: "m. extensor hallucis longus",
        origos: [
            "facies medialis fibulae (middelste helft)",
            "membrana interossea cruris",
        ],
        insertions: [
            "basis phalangis distalis I (dorsaal)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_extensor_hallucis_longus__art_talocruralis__dorsal_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_extensor_hallucis_longus",
                    movementId: "art_talocruralis__dorsal_flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_hallucis_longus__art_metatarsophalangea_1__extension",
                    jointId: "art_metatarsophalangea_1",
                    muscleId: "m_extensor_hallucis_longus",
                    movementId: "art_metatarsophalangea_1__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_hallucis_longus__art_interphalangea_pedis_1__extension",
                    jointId: "art_interphalangea_pedis_1",
                    muscleId: "m_extensor_hallucis_longus",
                    movementId: "art_interphalangea_pedis_1__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_extensor_hallucis_longus.jpeg",
        description: `

        `.trim(),
    }
);