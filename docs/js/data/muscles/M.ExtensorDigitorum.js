import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_extensor_digitorum",
        label: "m. extensor digitorum",
        origos: [
            new AnatomicStructure(
                {
                    label: "epicondylus lateralis humeri",
                    notes: ["via de common extensor tendon (CET)"],
                }
            ),
        ],
        insertions: [
            "aponeuroses dorsales phalangium II&nbsp;-&nbsp;V",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_extensor_digitorum__art_radiocarpalis__dorsal_flexion",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_extensor_digitorum",
                    movementId: "art_radiocarpalis__dorsal_flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_digitorum__artt_metacarpophalangeae_2_5__extension",
                    jointId: "artt_metacarpophalangeae_2_5",
                    muscleId: "m_extensor_digitorum",
                    movementId: "artt_metacarpophalangeae_2_5__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_digitorum__artt_interphalangeae_proximales_manuum_2_5__extension",
                    jointId: "artt_interphalangeae_proximales_manuum_2_5",
                    muscleId: "m_extensor_digitorum",
                    movementId: "artt_interphalangeae_proximales_manuum_2_5__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_extensor_digitorum__artt_interphalangeae_distales_manuum_2_5__extension",
                    jointId: "artt_interphalangeae_distales_manuum_2_5",
                    muscleId: "m_extensor_digitorum",
                    movementId: "artt_interphalangeae_distales_manuum_2_5__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_extensor_digitorum.jpeg",
        description: `
De pees van de origo wordt de "common extensor tendon" (CET) genoemd. Dit komt omdat dezelfde pees gebruikt wordt door zowel deze spier als de [Link type="Muscle" targetId="m_extensor_carpi_radialis_brevis" label="m. extensor carpi radialis brevis"], [Link type="Muscle" targetId="m_extensor_carpi_ulnaris" label="m. extensor carpi ulnaris"], en [Link type="Muscle" targetId="m_extensor_digiti_minimi" label="m. extensor digiti minimi"].

De pezen van de insertie gaan samen met de pees van de [Link type="Muscle" targetId="m_extensor_indicis" label="m. extensor indicis"] door de vierde tunnel (loge / peesschede) onder het <em>retinaculum extensorum</em> van de pols.
        `.trim(),
    }
);