import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "mm_subcostales",
        label: "mm. subcostales",
        regionIds: ["torso"],
        origos: [
            "facies interna costarum"
        ],
        insertions: [
            "facies interna costae bij een ondergelegen rib (overspant 1-2 ribben)",
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "mm_subcostales__breathing_out",
                    muscleId: "mm_subcostales",
                    functionDescription: "expiratie (door middel van detractie van de ribben)",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "mm_subcostales__support",
                    muscleId: "mm_subcostales",
                    functionDescription: "de borstkas ondersteunen",
                }
            ),
        ],
        image: "./images/muscles/mm_subcostales.jpeg",
        description: `

        `.trim(),
    }
);