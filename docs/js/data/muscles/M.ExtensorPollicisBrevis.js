import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_extensor_pollicis_brevis",
        label: "m. extensor pollicis brevis",
        origos: [
            new AnatomicStructure(
                {
                    label: "facies posterior radii",
                }
            ),
            "membrana interossea antebrachii",
        ],
        insertions: [
            "basis phalangis proximalis I (dorsaal)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. interosseus posterior",
                    notes: [
                        "C7,&nbsp;C8"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_extensor_pollicis_brevis__art_radiocarpalis__radial_deviation",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_extensor_pollicis_brevis",
                    movementId: "art_radiocarpalis__radial_deviation",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_pollicis_brevis__art_carpometacarpalis_1__extension",
                    jointId: "art_carpometacarpalis_1",
                    muscleId: "m_extensor_pollicis_brevis",
                    movementId: "art_carpometacarpalis_1__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_pollicis_brevis__art_carpometacarpalis_1__adduction",
                    jointId: "art_carpometacarpalis_1",
                    muscleId: "m_extensor_pollicis_brevis",
                    movementId: "art_carpometacarpalis_1__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_pollicis_brevis__art_metacarpophalangea_1__extension",
                    jointId: "art_metacarpophalangea_1",
                    muscleId: "m_extensor_pollicis_brevis",
                    movementId: "art_metacarpophalangea_1__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_extensor_pollicis_brevis.jpeg",
        description: `
De pees van de insertie gaat samen met de pees van de [Link type="Muscle" targetId="m_abductor_pollicis_longus" label="m. abductor pollicis longus"] door de eerste tunnel (loge) onder het retinaculum extensorum van de pols.

Soms zie je in de literatuur dat deze spier <em>repositie</em> van [Link type="Joint" targetId="art_carpometacarpalis_1" label="CMC I"] uitvoert. Repositie is een combinatiebeweging van extensie en adductie. De tegengestelde beweging is <em>oppositie</em> die dus een combinatie van flexie en abductie is.
        `.trim(),
    }
);