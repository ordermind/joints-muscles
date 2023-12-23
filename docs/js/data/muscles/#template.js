import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "",
        label: "",
        origos: [

        ],
        insertions: [
            
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "",
                    jointId: "",
                    muscleId: "",
                    movementId: "",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "",
        description: ``,
    }
);