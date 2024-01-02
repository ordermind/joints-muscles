import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_tibialis_anterior",
        label: "m. tibialis anterior",
        origos: [
            "condylus lateralis tibiae",
            "facies lateralis tibiae (proximale 2/3 deel)",
            "membrana interossea cruris",
        ],
        insertions: [
            "os cuneiforme mediale (mediaal)",
            "basis ossis metatarsalis I (mediaal)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_tibialis_anterior__art_talocruralis__dorsal_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_tibialis_anterior",
                    movementId: "art_talocruralis__dorsal_flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_tibialis_anterior__art_talotarsalis__inversion",
                    jointId: "art_talotarsalis",
                    muscleId: "m_tibialis_anterior",
                    movementId: "art_talotarsalis__inversion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_tibialis_anterior.jpeg",
        description: `
De insertie van deze spier ligt dichtbij de insertie van de [Link type="Muscle" targetId="m_fibularis_longus" label="m. fibularis longus"].

Deze spier is, net als [Link type="Muscle" targetId="m_extensor_hallucis_longus" label="m. extensor hallucis longus"] en [Link type="Muscle" targetId="m_extensor_digitorum_longus" label="m. extensor digitorum longus"], onderdeel van het <strong>anterieure compartiment</strong> van het onderbeen.

<img class="d-block float-xxl-end" src="./images/misc/muscle_compartments_lower_leg.jpg" />
        `.trim(),
    }
);