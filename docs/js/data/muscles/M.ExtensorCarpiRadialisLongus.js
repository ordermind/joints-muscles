import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_extensor_carpi_radialis_longus",
        label: "m. extensor carpi radialis longus",
        origos: [
            new AnatomicStructure(
                {
                    label: "crista supracondylaris lateralis humeri",
                    notes: ["distaal van de <em>m. brachioradialis</em>"],
                }
            ),
        ],
        insertions: [
            "basis ossis metacarpalis II (dorsaal)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. radialis",
                    notes: [
                        "C5&nbsp;-&nbsp;C8"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_extensor_carpi_radialis_longus__art_cubiti__flexion",
                    jointId: "art_cubiti",
                    muscleId: "m_extensor_carpi_radialis_longus",
                    movementId: "art_cubiti__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_carpi_radialis_longus__art_cubiti__supination",
                    jointId: "art_cubiti",
                    muscleId: "m_extensor_carpi_radialis_longus",
                    movementId: "art_cubiti__supination",
                    isPrimeMover: false,
                    notes: ["alleen vanuit pronatiestand"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_carpi_radialis_longus__art_radiocarpalis__dorsal_flexion",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_extensor_carpi_radialis_longus",
                    movementId: "art_radiocarpalis__dorsal_flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_carpi_radialis_longus__art_radiocarpalis__radial_deviation",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_extensor_carpi_radialis_longus",
                    movementId: "art_radiocarpalis__radial_deviation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_extensor_carpi_radialis_longus.jpeg",
        description: `
De pees van de insertie gaat samen met de pees van de [Link type="Muscle" targetId="m_extensor_carpi_radialis_brevis" label="m. extensor carpi radialis brevis"] door de tweede tunnel (loge / peesschede) onder het <em>retinaculum extensorum</em> van de pols.
        `.trim(),
    }
);