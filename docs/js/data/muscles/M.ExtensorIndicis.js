import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_extensor_indicis",
        label: "m. extensor indicis",
        origos: [
            new AnatomicStructure(
                {
                    label: "facies posterior ulnae (distaal)",
                    notes: ["distaal van de <em>m. extensor pollicis longus</em>"],
                }
            ),
            "membrana interossea antebrachii",
        ],
        insertions: [
            "aponeurosis dorsalis phalangis II",
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
                    id: "m_extensor_indicis__art_radiocarpalis__dorsal_flexion",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_extensor_indicis",
                    movementId: "art_radiocarpalis__dorsal_flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_indicis__art_metacarpophalangea_2__extension",
                    jointId: "art_metacarpophalangea_2",
                    muscleId: "m_extensor_indicis",
                    movementId: "art_metacarpophalangea_2__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_indicis__art_interphalangea_proximalis_manus_2__extension",
                    jointId: "art_interphalangea_proximalis_manus_2",
                    muscleId: "m_extensor_indicis",
                    movementId: "art_interphalangea_proximalis_manus_2__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_indicis__art_interphalangea_distalis_manus_2__extension",
                    jointId: "art_interphalangea_distalis_manus_2",
                    muscleId: "m_extensor_indicis",
                    movementId: "art_interphalangea_distalis_manus_2__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_extensor_indicis.jpeg",
        description: `
De spier is anatomisch-topografisch wél, maar functioneel niet te onderscheiden van de component van de [Link type="Muscle" targetId="m_extensor_digitorum" label="m. extensor digitorum"] waarvan de pees eveneens naar de tweede vinger (index) gaat.

De pees van de insertie gaat samen met de pezen van de [Link type="Muscle" targetId="m_extensor_digitorum" label="m. extensor digitorum"] door de vierde tunnel (loge / peesschede) onder het <em>retinaculum extensorum</em> van de pols.
        `.trim(),
    }
);