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
                    label: "condylus medialis femoris (dorsaal)",
                    notes: ["caput mediale"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "condylus lateralis femoris (dorsaal)",
                    notes: ["caput laterale"],
                }
            ),
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
                    id: "m_gastrocnemius__art_genus__flexion",
                    jointId: "art_genus",
                    muscleId: "m_gastrocnemius",
                    movementId: "art_genus__flexion",
                    isPrimeMover: false,
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
            new JointMuscleFunction(
                {
                    id: "m_gastrocnemius__art_talotarsalis__inversion",
                    jointId: "art_talotarsalis",
                    muscleId: "m_gastrocnemius",
                    movementId: "art_talotarsalis__inversion",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_gastrocnemius.jpeg",
        description: `
M. gastrocnemius bestaat voornamelijk uit type II spiervezels en is vooral betrokken bij explosieve bewegingen zoals springen of hardlopen.

De spier vormt samen met de [Link type="Muscle" targetId="m_soleus" label="m. soleus"] de [Link type="Muscle" targetId="m_triceps_surae" label="m. triceps surae"]. Beide spieren hebben een gemeenschappelijke insertiepees, de tendo calcaneus (tendo achillis of achillespees).

Deze spier is, net als [Link type="Muscle" targetId="m_soleus" label="m. soleus"], onderdeel van het <strong>oppervlakkige dorsale compartiment</strong> van het onderbeen.

<img class="d-block float-xxl-end" src="./images/misc/muscle_compartments_lower_leg.jpg" />
        `.trim(),
    }
);