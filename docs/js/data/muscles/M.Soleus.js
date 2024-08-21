import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_soleus",
        label: "m. soleus",
        origos: [
            "caput fibulae (dorsaal)",
            "linea m. solei tibiae",
            "margo medialis tibiae",
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "tuber calcanei (via de tendo calcaneus)",
                }
            ),
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. tibialis",
                    notes: ["S1&nbsp;-&nbsp;S2"]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_soleus__art_talocruralis__plantar_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_soleus",
                    movementId: "art_talocruralis__plantar_flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_soleus__art_talotarsalis__inversion",
                    jointId: "art_talotarsalis",
                    muscleId: "m_soleus",
                    movementId: "art_talotarsalis__inversion",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_soleus.jpeg",
        description: `
M. soleus bestaat voornamelijk uit type I spiervezels en is een belangrijke spier voor de staande postuur.

De spier vormt samen met de [Link type="Muscle" targetId="m_soleus" label="m. gastrocnemius"] de [Link type="Muscle" targetId="m_triceps_surae" label="m. triceps surae"]. Beide spieren hebben een gemeenschappelijke insertiepees, de tendo calcaneus (tendo achillis of achillespees).

Deze spier is, net als [Link type="Muscle" targetId="m_soleus" label="m. gastrocnemius"], onderdeel van het <strong>oppervlakkige dorsale compartiment</strong> van het onderbeen.

<img class="d-block float-xxl-end" src="./images/misc/muscle_compartments_lower_leg.jpg" />
        `.trim(),
    }
);