import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_abductor_pollicis_longus",
        label: "m. abductor pollicis longus",
        origos: [
            "facies posterior radii",
            "facies posterior ulnae",
            "membrana interossea antebrachii (proximale 1/3 deel)",
        ],
        insertions: [
            "basis ossis metacarpalis I (radiaal)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_abductor_pollicis_longus__art_radiocarpalis__radial_deviation",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_abductor_pollicis_longus",
                    movementId: "art_radiocarpalis__radial_deviation",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_abductor_pollicis_longus__art_carpometacarpalis_1__extension",
                    jointId: "art_carpometacarpalis_1",
                    muscleId: "m_abductor_pollicis_longus",
                    movementId: "art_carpometacarpalis_1__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_abductor_pollicis_longus__art_carpometacarpalis_1__abduction",
                    jointId: "art_carpometacarpalis_1",
                    muscleId: "m_abductor_pollicis_longus",
                    movementId: "art_carpometacarpalis_1__abduction",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_abductor_pollicis_longus.jpeg",
        description: `
De pees gaat samen met de pees van de m. extensor pollicis brevis door de eerste tunnel (loge) onder het retinaculum extensorum van de pols.
        `.trim(),
    }
);