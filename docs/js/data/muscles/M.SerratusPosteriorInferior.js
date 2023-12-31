import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_serratus_posterior_inferior",
        label: "m. serratus posterior inferior",
        regionIds: ["torso"],
        origos: [
            "processi spinosi T11 - L2",
        ],
        insertions: [
            "margines costales inferiores 9 - 12",
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_serratus_posterior_inferior__ribs",
                    muscleId: "m_serratus_posterior_inferior",
                    functionDescription: "detractie van de ribben (expiratie)",
                }
            )
        ],
        image: "./images/muscles/m_serratus_posterior_inferior.jpeg",
        description: `De spier ligt dorsaal van de m. erector spinae en ventraal van de m. latissimus dorsi.`,
    }
);