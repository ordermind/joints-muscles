import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_plantaris",
        label: "m. plantaris",
        origos: [
            new AnatomicStructure(
                {
                    label: "linea supracondylaris lateralis femoris",
                    notes: ["proximaal van de origo van de laterale kop van m. gastrocnemius"],
                }
            ),
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "facies posterior calcanei (mediaal van de tendo calcaneus)",
                }
            ),
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. tibialis",
                    notes: [
                        "S1&nbsp;-&nbsp;S2"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_plantaris__art_genus__flexion",
                    jointId: "art_genus",
                    muscleId: "m_plantaris",
                    movementId: "art_genus__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_plantaris__art_talocruralis__plantar_flexion",
                    jointId: "art_talocruralis",
                    muscleId: "m_plantaris",
                    movementId: "art_talocruralis__plantar_flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_plantaris__art_talotarsalis__inversion",
                    jointId: "art_talotarsalis",
                    muscleId: "m_plantaris",
                    movementId: "art_talotarsalis__inversion",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_plantaris.jpeg",
        description: `
Deze spier is niet altijd aanwezig.
        `.trim(),
    }
);