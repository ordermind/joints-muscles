import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_flexor_hallucis_brevis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. flexor hallucis brevis",
        origos: [
            "ossa cuneiformia (plantair)",
            "os cuboideum (plantair)",
        ],
        insertions: [
            new AnatomicStructure({
                label: "basis phalangis proximalis I (mediaal)",
                notes: ["plantair van de insertie van <em>m. abductor hallucis</em>"],
            }),
            new AnatomicStructure({
                label: "basis phalangis proximalis I (lateraal)",
                notes: ["plantair van de insertie van <em>m. adductor hallucis</em>"],
            })
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_metatarsophalangea_1__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "arch",
                    muscleId: muscleId,
                    functionDescription: "Ondersteunt de arcus pedis longitudinalis",
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);
