import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_flexor_pollicis_longus",
        label: "m. flexor pollicis longus",
        origos: [
            "facies anterior radii",
            "membrana interossea antebrachii",
        ],
        insertions: [
            "basis phalangis distalis I (palmair)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_flexor_pollicis_longus__art_radiocarpalis__palmar_flexion",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_flexor_pollicis_longus",
                    movementId: "art_radiocarpalis__palmar_flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_pollicis_longus__art_carpometacarpalis_1__flexion",
                    jointId: "art_carpometacarpalis_1",
                    muscleId: "m_flexor_pollicis_longus",
                    movementId: "art_carpometacarpalis_1__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_pollicis_longus__art_metacarpophalangea_1__flexion",
                    jointId: "art_metacarpophalangea_1",
                    muscleId: "m_flexor_pollicis_longus",
                    movementId: "art_metacarpophalangea_1__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_pollicis_longus__art_interphalangea_manus_1__flexion",
                    jointId: "art_interphalangea_manus_1",
                    muscleId: "m_flexor_pollicis_longus",
                    movementId: "art_interphalangea_manus_1__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_flexor_pollicis_longus.jpeg",
        description: `

        `.trim(),
    }
);