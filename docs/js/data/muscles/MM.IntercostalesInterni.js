import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "mm_intercostales_interni",
        label: "mm. intercostales interni",
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
                    id: "mm_intercostales_interni__breathing_out",
                    muscleId: "mm_intercostales_interni",
                    functionDescription: "expiratie (door middel van verlagen van de ribben)",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "mm_intercostales_interni__support",
                    muscleId: "mm_intercostales_interni",
                    functionDescription: "de borstkas ondersteunen",
                }
            ),
        ],
        image: "./images/muscles/mm_intercostales_interni.jpeg",
        description: `
De vezels van de mm. intercostales interni verlopen <strong>van mediocraniaal naar laterocaudaal</strong>.

De mm. intercostales interni lopen door tot aan de aanhechting van de ribben aan het sternum, maar ontbreken tot op enige afstand van de wervelkolom. De parasternaal gelegen delen, waarvan de vezels dus de naburige ribkraakbeenderen verbinden, worden ook wel de <em>interchondrale mm. intercostales (interni)</em> genoemd.
        `.trim(),
    }
);