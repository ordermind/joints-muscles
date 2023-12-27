import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_serratus_posterior_superior",
        label: "m. serratus posterior superior",
        regionIds: ["spine"],
        origos: [
            "processi spinosi C7 - T3",
            "ligamentum nuchae",
        ],
        insertions: [
            "margines costales superiores 2 - 5",
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_serratus_posterior_superior__ribs",
                    muscleId: "m_serratus_posterior_superior",
                    functionDescription: "elevatie van de ribben (inspiratie)",
                }
            )
        ],
        image: "./images/muscles/m_serratus_posterior_superior.jpeg",
        description: `De spier ligt dorsaal van de m. erector spinae en ventraal van de mm. rhomboidei.`,
    }
);