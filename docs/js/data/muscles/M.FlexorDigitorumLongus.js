import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_flexor_digitorum_longus",
        label: "m. flexor digitorum longus",
        origos: [
            "facies posterior tibiae (distaal van de linea m. solei tibiae)",
        ],
        insertions: [
            "bases phalangium distalium II - V (plantair)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_longus__art_talocruralis__plantar_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_flexor_digitorum_longus",
                    movementId: "art_talocruralis__plantar_flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_longus__art_talotarsalis__inversion",
                    jointId: "art_talotarsalis",
                    muscleId: "m_flexor_digitorum_longus",
                    movementId: "art_talotarsalis__inversion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_longus__artt_metatarsophalangeae_2_5__flexion",
                    jointId: "artt_metatarsophalangeae_2_5",
                    muscleId: "m_flexor_digitorum_longus",
                    movementId: "artt_metatarsophalangeae_2_5__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_longus__artt_interphalangeae_proximales_pedum_2_5__flexion",
                    jointId: "artt_interphalangeae_proximales_pedum_2_5",
                    muscleId: "m_flexor_digitorum_longus",
                    movementId: "artt_interphalangeae_proximales_pedum_2_5__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_longus__artt_interphalangeae_distales_pedum_2_5__flexion",
                    jointId: "artt_interphalangeae_distales_pedum_2_5",
                    muscleId: "m_flexor_digitorum_longus",
                    movementId: "artt_interphalangeae_distales_pedum_2_5__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_flexor_digitorum_longus.jpeg",
        description: `

        `.trim(),
    }
);