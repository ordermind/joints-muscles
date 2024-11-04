import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_flexor_digitorum_profundus",
        label: "m. flexor digitorum profundus",
        regionIds: ["upper_extremity"],
        origos: [
            "facies anterior et medialis ulnae (proximale 2/3 deel)",
            "membrana interossea antebrachii",
        ],
        insertions: [
            "bases phalangum distalium II&nbsp;-&nbsp;V (palmair)"
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. interosseus antebrachii anterior",
                    notes: [
                        "een tak van de <em>n. medianus</em>",
                        "C8&nbsp;-&nbsp;T1",
                        "digiti II et III"
                    ]
                }
            ),
            new AnatomicStructure(
                {
                    label: "n. ulnaris",
                    notes: [
                        "C8&nbsp;-&nbsp;T1",
                        "digiti IV et V"
                    ]
                }
            )
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