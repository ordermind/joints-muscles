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
                    muscleId: muscleId,
                    movementId: "",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "",
                    muscleId: muscleId,
                    functionDescription: "",
                }
            ),
        ],
        image: "",
        description: `

        `.trim(),
    }
);