import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_extensor_carpi_radialis_brevis",
        label: "m. extensor carpi radialis brevis",
        origos: [
            new AnatomicStructure(
                {
                    label: "epicondylus lateralis humeri",
                    notes: ["via de common extensor tendon (CET)"],
                }
            ),
        ],
        insertions: [
            "basis ossis metacarpalis III (dorsaal)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_extensor_carpi_radialis_brevis__art_cubiti__supination",
                    jointId: "art_cubiti",
                    muscleId: "m_extensor_carpi_radialis_brevis",
                    movementId: "art_cubiti__supination",
                    isPrimeMover: false,
                    notes: ["alleen vanuit pronatiestand"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_carpi_radialis_brevis__art_radiocarpalis__dorsal_flexion",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_extensor_carpi_radialis_brevis",
                    movementId: "art_radiocarpalis__dorsal_flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_carpi_radialis_brevis__art_radiocarpalis__radial_deviation",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_extensor_carpi_radialis_brevis",
                    movementId: "art_radiocarpalis__radial_deviation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_extensor_carpi_radialis_brevis.jpeg",
        description: `
De pees van de origo wordt de "common extensor tendon" (CET) genoemd. Dit komt omdat dezelfde pees gebruikt wordt door zowel deze spier als de [Link type="Muscle" targetId="m_extensor_carpi_ulnaris" label="m. extensor carpi ulnaris"], [Link type="Muscle" targetId="m_extensor_digitorum" label="m. extensor digitorum"], en [Link type="Muscle" targetId="m_extensor_digiti_minimi" label="m. extensor digiti minimi"].

De pees van de insertie gaat samen met de pees van de [Link type="Muscle" targetId="m_extensor_carpi_radialis_longus" label="m. extensor carpi radialis longus"] door de tweede tunnel (loge / peesschede) onder het <em>retinaculum extensorum</em> van de pols.
        `.trim(),
    }
);