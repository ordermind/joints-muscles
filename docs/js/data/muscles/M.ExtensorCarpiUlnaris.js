import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_extensor_carpi_ulnaris",
        label: "m. extensor carpi ulnaris",
        origos: [
            new AnatomicStructure(
                {
                    label: "epicondylus lateralis humeri",
                    notes: ["via de common extensor tendon (CET)"],
                }
            ),
            "margo posterior ulnae",
        ],
        insertions: [
            "basis ossis metacarpalis V (ulnair)",
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
                    id: "m_extensor_carpi_ulnaris__art_radiocarpalis__dorsal_flexion",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_extensor_carpi_ulnaris",
                    movementId: "art_radiocarpalis__dorsal_flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_carpi_ulnaris__art_radiocarpalis__ulnar_deviation",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_extensor_carpi_ulnaris",
                    movementId: "art_radiocarpalis__ulnar_deviation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_extensor_carpi_ulnaris.jpeg",
        description: `
De pees van de origo wordt de "common extensor tendon" (CET) genoemd. Dit komt omdat dezelfde pees gebruikt wordt door zowel deze spier als de [Link type="Muscle" targetId="m_extensor_carpi_radialis_brevis" label="m. extensor carpi radialis brevis"], [Link type="Muscle" targetId="m_extensor_digitorum" label="m. extensor digitorum"], en [Link type="Muscle" targetId="m_extensor_digiti_minimi" label="m. extensor digiti minimi"].

De pees van de insertie gaat door de zesde tunnel (loge / peesschede) onder het <em>retinaculum extensorum</em> van de pols.
        `.trim(),
    }
);