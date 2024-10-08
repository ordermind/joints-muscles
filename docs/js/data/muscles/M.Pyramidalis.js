import AnatomicStructure from "../../data-types/AnatomicStructure.js";
import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_pyramidalis",
        label: "m. pyramidalis",
        regionIds: ["torso"],
        origos: [
            "crista pubica",
            "symphysis pubica",
        ],
        insertions: [
            "linea alba",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. subcostalis",
                    notes: [
                        "T12",
                    ]
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_pyramidalis__linea_alba",
                    muscleId: "m_pyramidalis",
                    functionDescription: "de <em>linea alba</em> spannen",
                }
            )
        ],
        image: "./images/muscles/m_pyramidalis.jpeg",
        description: `De spier ligt caudaal over de m. rectus abdominis heen.`,
    }
);