import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_flexor_hallucis_longus",
        label: "m. flexor hallucis longus",
        regionIds: ["lower_extremity"],
        origos: [
            "facies posterior fibulae (distale 2/3 deel)",
            "membrana interossea cruris",
        ],
        insertions: [
            "basis phalangis distalis I (plantair)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. tibialis",
                    notes: ["S2&nbsp;-&nbsp;S3"]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_flexor_hallucis_longus__art_talocruralis__plantar_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_flexor_hallucis_longus",
                    movementId: "art_talocruralis__plantar_flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_hallucis_longus__art_talotarsalis__inversion",
                    jointId: "art_talotarsalis",
                    muscleId: "m_flexor_hallucis_longus",
                    movementId: "art_talotarsalis__inversion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_hallucis_longus__art_metatarsophalangea_1__flexion",
                    jointId: "art_metatarsophalangea_1",
                    muscleId: "m_flexor_hallucis_longus",
                    movementId: "art_metatarsophalangea_1__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_hallucis_longus__art_interphalangea_pedis_1__flexion",
                    jointId: "art_interphalangea_pedis_1",
                    muscleId: "m_flexor_hallucis_longus",
                    movementId: "art_interphalangea_pedis_1__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_flexor_hallucis_longus.jpeg",
        description: `
Deze spier is, net als [Link type="Muscle" targetId="m_tibialis_posterior" label="m. tibialis posterior"] en [Link type="Muscle" targetId="m_flexor_digitorum_longus" label="m. flexor digitorum longus"], onderdeel van het <strong>diepe dorsale compartiment</strong> van het onderbeen.

<img class="d-block float-xxl-end" src="./images/misc/muscle_compartments_lower_leg.jpg" />
        `.trim(),
    }
);