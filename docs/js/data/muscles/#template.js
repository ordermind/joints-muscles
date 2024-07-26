import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

const muscleId = "";

export default new Muscle(
    {
        id: muscleId,
        label: "",
        origos: [

        ],
        insertions: [

        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "",
                    muscleId,
                    functionDescription: "",
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `

        `.trim(),
    }
);