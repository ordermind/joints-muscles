import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "mm_intercostales_externi",
        label: "mm. intercostales externi",
        regionIds: ["torso"],
        origos: [
            "margines inferiores costarum 1 - 11"
        ],
        insertions: [
            "margo superior bij de <strong>eerstvolgende</strong> lager gelegen rib (2 - 12)",
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "mm_intercostales_externi__breathing_in",
                    muscleId: "mm_intercostales_externi",
                    functionDescription: "inspiratie (door middel van elevatie van de ribben)",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "mm_intercostales_externi__support",
                    muscleId: "mm_intercostales_externi",
                    functionDescription: "de borstkas ondersteunen",
                }
            ),
        ],
        image: "./images/muscles/mm_intercostales_externi.jpeg",
        description: `
De vezels van de mm. intercostales externi verlopen <strong>van laterocraniaal naar mediocaudaal</strong>.

De mm. intercostales externi lopen dóór tot aan de aanhechting van de ribben aan de thoracale wervelkolom, maar ontbreken tot op enige afstand van het het sternum.
        `.trim(),
    }
);