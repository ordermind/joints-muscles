import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_adductor_hallucis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. adductor hallucis",
        origos: [
            new AnatomicStructure(
                {
                    label: "bases ossium metatarsalium II - IV (plantair)",
                    notes: ["caput obliquum"]
                }
            ),
            new AnatomicStructure(
                {
                    label: "tendo m. fibularis longi",
                    notes: ["caput obliquum"]
                }
            ),
            new AnatomicStructure(
                {
                    label: "ligg. metatarsophalangealia plantaria digitorum III - V",
                    notes: ["caput transversum"]
                }
            ),
        ],
        insertions: [
            "basis phalangis proximalis I (lateraal)"
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_metatarsophalangea_1__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_metatarsophalangea_1__flexion",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "longitudinal_arch",
                    muscleId: muscleId,
                    functionDescription: "Ondersteunt de arcus pedis longitudinalis",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "transverse_arch",
                    muscleId: muscleId,
                    functionDescription: "Ondersteunt de arcus pedis transversus",
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);