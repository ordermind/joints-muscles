import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_extensor_pollicis_longus",
        label: "m. extensor pollicis longus",
        regionIds: ["upper_extremity"],
        origos: [
            new AnatomicStructure(
                {
                    label: "facies posterior ulnae (in het midden)",
                    notes: ["distaal van de <em>m. abductor pollicis longus</em>"],
                }
            ),
            "membrana interossea antebrachii",
        ],
        insertions: [
            "basis phalangis distalis I (dorsaal)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. interosseus antebrachii posterior",
                    notes: [
                        "voortzetting van de <em>n. radialis</em>",
                        "C7&nbsp;-&nbsp;C8"
                    ],
                    conflictingWith: ["n. radialis"],
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_extensor_pollicis_longus__art_radiocarpalis__dorsal_flexion",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_extensor_pollicis_longus",
                    movementId: "art_radiocarpalis__dorsal_flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_pollicis_longus__art_radiocarpalis__radial_deviation",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_extensor_pollicis_longus",
                    movementId: "art_radiocarpalis__radial_deviation",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_pollicis_longus__art_carpometacarpalis_1__extension",
                    jointId: "art_carpometacarpalis_1",
                    muscleId: "m_extensor_pollicis_longus",
                    movementId: "art_carpometacarpalis_1__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_pollicis_longus__art_carpometacarpalis_1__adduction",
                    jointId: "art_carpometacarpalis_1",
                    muscleId: "m_extensor_pollicis_longus",
                    movementId: "art_carpometacarpalis_1__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_pollicis_longus__art_metacarpophalangea_1__extension",
                    jointId: "art_metacarpophalangea_1",
                    muscleId: "m_extensor_pollicis_longus",
                    movementId: "art_metacarpophalangea_1__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_pollicis_longus__art_interphalangea_manus_1__extension",
                    jointId: "art_interphalangea_manus_1",
                    muscleId: "m_extensor_pollicis_longus",
                    movementId: "art_interphalangea_manus_1__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_extensor_pollicis_longus.jpeg",
        description: `
De pees gaat door de derde tunnel (loge / peesschede) onder het <em>retinaculum extensorum</em> van de pols.

Soms zie je in de literatuur dat deze spier <em>repositie</em> van [Link type="Joint" targetId="art_carpometacarpalis_1" label="CMC I"] uitvoert. Repositie is een combinatiebeweging van extensie en adductie. De tegengestelde beweging is <em>oppositie</em> die dus een combinatie van flexie en abductie is.
        `.trim(),
    }
);