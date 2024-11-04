import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_abductor_pollicis_longus",
        label: "m. abductor pollicis longus",
        regionIds: ["upper_extremity"],
        origos: [
            new AnatomicStructure(
                {
                    label: "facies posterior radii",
                }
            ),
            new AnatomicStructure(
                {
                    label: "facies posterior ulnae (in het midden)",
                    notes: ["proximaal van de <em>m. extensor pollicis longus</em>"],
                }
            ),
            "membrana interossea antebrachii",
        ],
        insertions: [
            "basis ossis metacarpalis I (radiaal)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. interosseus antebrachii posterior",
                    notes: [
                        "voortzetting van de <em>n. radialis</em>",
                        "C7&nbsp;-&nbsp;C8"
                    ]
                }
            )
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
De pees gaat samen met de pees van de [Link type="Muscle" targetId="m_extensor_pollicis_brevis" label="m. extensor pollicis brevis"] door de eerste tunnel (loge) onder het retinaculum extensorum van de pols.
        `.trim(),
    }
);