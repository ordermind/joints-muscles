import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "mm_intercostales_intimi",
        label: "mm. intercostales intimi",
        regionIds: ["torso"],
        origos: [
            "margines superiores costarum 2 - 12"
        ],
        insertions: [
            "margo inferior bij de <strong>eerstvolgende</strong> hoger gelegen rib (1 - 11)",
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "mm_intercostales_intimi__breathing_out",
                    muscleId: "mm_intercostales_intimi",
                    functionDescription: "expiratie (door middel van detractie van de ribben)",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "mm_intercostales_intimi__support",
                    muscleId: "mm_intercostales_intimi",
                    functionDescription: "de borstkas ondersteunen",
                }
            ),
        ],
        image: "./images/muscles/mm_intercostales_intimi.jpeg",
        description: `
De vezels van de mm. intercostales intimi verlopen <strong>van mediocraniaal naar laterocaudaal</strong>.
        `.trim(),
    }
);