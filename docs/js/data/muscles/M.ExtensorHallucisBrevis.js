import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_extensor_hallucis_brevis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. extensor hallucis brevis",
        origos: [
            new AnatomicStructure(
                {
                    label: "facies dorsalis calcanei",
                    notes: ["mediaal van de origo van <em>m. extensor digitorum brevis</em>"],
                }
            )
        ],
        insertions: [
            "basis phalangis proximalis I (dorsaal)"
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. fibularis profundus",
                    notes: [
                        "S1&nbsp;-&nbsp;S2"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_metatarsophalangea_1__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);
