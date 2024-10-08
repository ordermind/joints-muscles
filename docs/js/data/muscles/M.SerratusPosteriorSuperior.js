import AnatomicStructure from "../../data-types/AnatomicStructure.js";
import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_serratus_posterior_superior",
        label: "m. serratus posterior superior",
        regionIds: ["torso"],
        origos: [
            "processi spinosi C7&nbsp;-&nbsp;T3",
            "ligamentum nuchae",
        ],
        insertions: [
            "margines superiores costarum 2&nbsp;-&nbsp;5",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "nn. intercostales",
                    notes: [
                        "T2&nbsp;-&nbsp;T5",
                    ]
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_serratus_posterior_superior__ribs",
                    muscleId: "m_serratus_posterior_superior",
                    functionDescription: "inspiratie (door middel van elevatie van de ribben)",
                }
            )
        ],
        image: "./images/muscles/m_serratus_posterior_superior.jpeg",
        description: `De spier ligt dorsaal van de m. erector spinae en ventraal van de mm. rhomboidei.`,
    }
);