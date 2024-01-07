import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_extensor_digitorum_longus",
        label: "m. extensor digitorum longus",
        origos: [
            "condylus lateralis tibiae",
            "facies medialis fibulae (proximale 3/4 deel)",
            "membrana interossea cruris",
        ],
        insertions: [
            "phalanges distales II&nbsp;-&nbsp;V (dorsaal)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_extensor_digitorum_longus__art_talocruralis__dorsal_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_extensor_digitorum_longus",
                    movementId: "art_talocruralis__dorsal_flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_digitorum_longus__art_talotarsalis__eversion",
                    jointId: "art_talotarsalis",
                    muscleId: "m_extensor_digitorum_longus",
                    movementId: "art_talotarsalis__eversion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_digitorum_longus__artt_metatarsophalangeae_2_5__extension",
                    jointId: "artt_metatarsophalangeae_2_5",
                    muscleId: "m_extensor_digitorum_longus",
                    movementId: "artt_metatarsophalangeae_2_5__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_digitorum_longus__artt_interphalangeae_proximales_pedum_2_5__extension",
                    jointId: "artt_interphalangeae_proximales_pedum_2_5",
                    muscleId: "m_extensor_digitorum_longus",
                    movementId: "artt_interphalangeae_proximales_pedum_2_5__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_digitorum_longus__artt_interphalangeae_distales_pedum_2_5__extension",
                    jointId: "artt_interphalangeae_distales_pedum_2_5",
                    muscleId: "m_extensor_digitorum_longus",
                    movementId: "artt_interphalangeae_distales_pedum_2_5__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_extensor_digitorum_longus.jpeg",
        description: `
De m. extensor digitorum longus heeft vaak een extra pees, die [Link type="Muscle" targetId="m_fibularis_tertius" label="m. fibularis tertius"] genoemd wordt.

Deze spier is, net als [Link type="Muscle" targetId="m_tibialis_anterior" label="m. tibialis anterior"] en [Link type="Muscle" targetId="m_extensor_hallucis_longus" label="m. extensor hallucis longus"], onderdeel van het <strong>anterieure compartiment</strong> van het onderbeen.

<img class="d-block float-xxl-end" src="./images/misc/muscle_compartments_lower_leg.jpg" />
        `.trim(),
    }
);