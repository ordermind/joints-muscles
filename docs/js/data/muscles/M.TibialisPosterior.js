import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_tibialis_posterior",
        label: "m. tibialis posterior",
        origos: [
            "facies posterior tibiae",
            "facies posterior fibulae",
            "membrana interossea cruris",
        ],
        insertions: [
            "tuberositas ossis navicularis",
            "ossa cuneiformia (plantair)",
            "os cuboideum",
            "bases ossium metatarsalium II&nbsp;-&nbsp;IV",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_tibialis_posterior__art_talocruralis__plantar_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_tibialis_posterior",
                    movementId: "art_talocruralis__plantar_flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_tibialis_posterior__art_talotarsalis__inversion",
                    jointId: "art_talotarsalis",
                    muscleId: "m_tibialis_posterior",
                    movementId: "art_talotarsalis__inversion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_tibialis_posterior.jpeg",
        description: `
Deze spier is, net als [Link type="Muscle" targetId="m_flexor_hallucis_longus" label="m. flexor hallucis longus"] en [Link type="Muscle" targetId="m_flexor_digitorum_longus" label="m. flexor digitorum longus"], onderdeel van het <strong>diepe dorsale compartiment</strong> van het onderbeen.

<img class="d-block float-xxl-end" src="./images/misc/muscle_compartments_lower_leg.jpg" />
        `.trim(),
    }
);