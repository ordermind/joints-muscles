import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_flexor_digitorum_longus",
        label: "m. flexor digitorum longus",
        origos: [
            "facies posterior tibiae (distaal van de linea m. solei)",
        ],
        insertions: [
            "bases phalangium distalium II&nbsp;-&nbsp;V (plantair)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_longus__art_talocruralis__plantar_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_flexor_digitorum_longus",
                    movementId: "art_talocruralis__plantar_flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_longus__art_talotarsalis__inversion",
                    jointId: "art_talotarsalis",
                    muscleId: "m_flexor_digitorum_longus",
                    movementId: "art_talotarsalis__inversion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_longus__artt_metatarsophalangeae_2_5__flexion",
                    jointId: "artt_metatarsophalangeae_2_5",
                    muscleId: "m_flexor_digitorum_longus",
                    movementId: "artt_metatarsophalangeae_2_5__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_longus__artt_interphalangeae_proximales_pedis_2_5__flexion",
                    jointId: "artt_interphalangeae_proximales_pedis_2_5",
                    muscleId: "m_flexor_digitorum_longus",
                    movementId: "artt_interphalangeae_proximales_pedis_2_5__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_longus__artt_interphalangeae_distales_pedis_2_5__flexion",
                    jointId: "artt_interphalangeae_distales_pedis_2_5",
                    muscleId: "m_flexor_digitorum_longus",
                    movementId: "artt_interphalangeae_distales_pedis_2_5__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_flexor_digitorum_longus.jpeg",
        description: `
Deze spier is, net als [Link type="Muscle" targetId="m_tibialis_posterior" label="m. tibialis posterior"] en [Link type="Muscle" targetId="m_flexor_hallucis_longus" label="m. flexor hallucis longus"], onderdeel van het <strong>diepe dorsale compartiment</strong> van het onderbeen.

<img class="d-block float-xxl-end" src="./images/misc/muscle_compartments_lower_leg.jpg" />
        `.trim(),
    }
);