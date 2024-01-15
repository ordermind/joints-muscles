import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_fibularis_brevis",
        label: "m. fibularis brevis",
        origos: [
            "facies lateralis fibulae (distale 2/3 deel)",
        ],
        insertions: [
            "tuberositas ossis metatarsalis V",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_fibularis_brevis__art_talocruralis__plantar_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_fibularis_brevis",
                    movementId: "art_talocruralis__plantar_flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_fibularis_brevis__art_talotarsalis__eversion",
                    jointId: "art_talotarsalis",
                    muscleId: "m_fibularis_brevis",
                    movementId: "art_talotarsalis__eversion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_fibularis_brevis.jpeg",
        description: `
Ook bekend als <em>m. peroneus brevis</em>.

Deze spier is, net als [Link type="Muscle" targetId="m_fibularis_longus" label="m. fibularis longus"], onderdeel van het <strong>laterale compartiment</strong> van het onderbeen.

<img class="d-block float-xxl-end" src="./images/misc/muscle_compartments_lower_leg.jpg" />
        `.trim(),
    }
);