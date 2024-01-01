import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js"

export default new Muscle(
    {
        id: "m_gastrocnemius",
        label: "m. gastrocnemius",
        origos: [
            new AnatomicStructure(
                {
                    label: "condylus medialis femoris",
                    notes: ["caput mediale"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "condylus lateralis femoris",
                    notes: ["caput laterale"],
                }
            ),
        ],
        insertions: [
            "tuber calcanei via de tendo calcaneus",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_gastrocnemius__art_genus__flexion",
                    jointId: "art_genus",
                    muscleId: "m_gastrocnemius",
                    movementId: "art_genus__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gastrocnemius__art_talocruralis__plantar_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_gastrocnemius",
                    movementId: "art_talocruralis__plantar_flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_gastrocnemius.jpeg",
        description: `
De spier vormt samen met de [Link type="Muscle" targetId="m_soleus" label="m. soleus"] de <em>m. triceps surae</em>. Beide spieren hebben een gemeenschappelijke insertiepees, de tendo calcaneus (tendo achillis of achillespees).
        `.trim(),
    }
);