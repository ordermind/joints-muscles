import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_extensor_digiti_minimi",
        label: "m. extensor digiti minimi",
        origos: [
            new AnatomicStructure(
                {
                    label: "epicondylus lateralis humeri",
                    notes: ["via de common extensor tendon (CET)"],
                }
            ),
        ],
        insertions: [
            "aponeurosis dorsalis phalangis V",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_extensor_digiti_minimi__art_radiocarpalis__dorsal_flexion",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_extensor_digiti_minimi",
                    movementId: "art_radiocarpalis__dorsal_flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_digiti_minimi__art_metacarpophalangea_5__extension",
                    jointId: "art_metacarpophalangea_5",
                    muscleId: "m_extensor_digiti_minimi",
                    movementId: "art_metacarpophalangea_5__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_digiti_minimi__art_interphalangea_proximalis_manus_5__extension",
                    jointId: "art_interphalangea_proximalis_manus_5",
                    muscleId: "m_extensor_digiti_minimi",
                    movementId: "art_interphalangea_proximalis_manus_5__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_digiti_minimi__art_interphalangea_distalis_manus_5__extension",
                    jointId: "art_interphalangea_distalis_manus_5",
                    muscleId: "m_extensor_digiti_minimi",
                    movementId: "art_interphalangea_distalis_manus_5__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_extensor_digiti_minimi.jpeg",
        description: `
De spier is anatomisch-topografisch wel, maar functioneel niet te onderscheiden van de component van de [Link type="Muscle" targetId="m_extensor_digitorum" label="m. extensor digitorum"] waarvan de pees eveneens naar de vijfde vinger gaat.

De pees van de origo wordt de "common extensor tendon" (CET) genoemd. Dit komt omdat dezelfde pees gebruikt wordt door zowel deze spier als de [Link type="Muscle" targetId="m_extensor_carpi_radialis_brevis" label="m. extensor carpi radialis brevis"], [Link type="Muscle" targetId="m_extensor_carpi_ulnaris" label="m. extensor carpi ulnaris"], en [Link type="Muscle" targetId="m_extensor_digitorum" label="m. extensor digitorum"].

De pees van de insertie gaat door de vijfde tunnel (loge / peesschede) onder het <em>retinaculum extensorum</em> van de pols.
        `.trim(),
    }
);