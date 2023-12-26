import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_pyramidalis",
        label: "m. pyramidalis",
        origos: [
            "symphysis pubica",
        ],
        insertions: [
            "linea alba",
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_pyramidalis__linea_alba",
                    muscleId: "m_pyramidalis",
                    functionDescription: "spant de linea alba",
                }
            )
        ],
        image: "./images/muscles/m_pyramidalis.jpeg",
        description: `De spier ligt caudaal over de m. rectus abdominis heen.`,
    }
);