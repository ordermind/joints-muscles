import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_flexor_digitorum_superficialis",
        label: "m. flexor digitorum superficialis",
        origos: [
            new AnatomicStructure(
                {
                    label: "epicondylus medialis humeri",
                    notes: ["caput humeroulnare"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "processus coronoideus ulnae",
                    notes: ["caput humeroulnare"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "margo anterior radii (proximaal)",
                    notes: ["caput radii"],
                }
            ),
        ],
        insertions: [
            "latera phalangium mediae II&nbsp;-&nbsp;V",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_superficialis__art_cubiti__flexion",
                    jointId: "art_cubiti",
                    muscleId: "m_flexor_digitorum_superficialis",
                    movementId: "art_cubiti__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_superficialis__art_radiocarpalis__palmar_flexion",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_flexor_digitorum_superficialis",
                    movementId: "art_radiocarpalis__palmar_flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_superficialis__artt_metacarpophalangeae_2_5__flexion",
                    jointId: "artt_metacarpophalangeae_2_5",
                    muscleId: "m_flexor_digitorum_superficialis",
                    movementId: "artt_metacarpophalangeae_2_5__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_digitorum_superficialis__artt_interphalangeae_proximales_manuum_2_5__flexion",
                    jointId: "artt_interphalangeae_proximales_manuum_2_5",
                    muscleId: "m_flexor_digitorum_superficialis",
                    movementId: "artt_interphalangeae_proximales_manuum_2_5__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_flexor_digitorum_superficialis.jpeg",
        description: `

        `.trim(),
    }
);