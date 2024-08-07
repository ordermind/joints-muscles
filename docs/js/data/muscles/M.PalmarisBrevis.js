import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

const muscleId = "m_palmaris_brevis";

export default new Muscle(
    {
        id: muscleId,
        label: "m. palmaris brevis",
        origos: [
            "aponeurosis palmaris",
            "retinaculum musculorum flexorum manus"
        ],
        insertions: [
            "Cutis lateris ulnaris manus",
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "skin",
                    muscleId,
                    functionDescription: "Spant de huid van de pinkmuis",
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);