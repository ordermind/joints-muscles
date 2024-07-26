import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_flexor_digitorum_profundus",
        label: "m. flexor digitorum profundus",
        origos: [
            "facies anterior et medialis ulnae (proximale 2/3 deel)",
            "membrana interossea antebrachii",
        ],
        insertions: [
            "bases phalangium distalium II&nbsp;-&nbsp;V (palmair)"
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_profundus__art_radiocarpalis__palmar_flexion",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_flexor_digitorum_profundus",
                    movementId: "art_radiocarpalis__palmar_flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_profundus__artt_metacarpophalangeae_2_5__flexion",
                    jointId: "artt_metacarpophalangeae_2_5",
                    muscleId: "m_flexor_digitorum_profundus",
                    movementId: "artt_metacarpophalangeae_2_5__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_profundus__artt_interphalangeae_proximales_manus_2_5__flexion",
                    jointId: "artt_interphalangeae_proximales_manus_2_5",
                    muscleId: "m_flexor_digitorum_profundus",
                    movementId: "artt_interphalangeae_proximales_manus_2_5__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_profundus__artt_interphalangeae_distales_manus_2_5__flexion",
                    jointId: "artt_interphalangeae_distales_manus_2_5",
                    muscleId: "m_flexor_digitorum_profundus",
                    movementId: "artt_interphalangeae_distales_manus_2_5__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_flexor_digitorum_profundus.jpeg",
        description: `

        `.trim(),
    }
);