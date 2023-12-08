import Muscle from "../../data-types/Muscle.js";
import MuscleFunction from "../../data-types/MuscleFunction.js";

export default new Muscle(
    {
        id: "",
        label: "",
        origos: [

        ],
        insertions: [
            
        ],
        functions: [
            new MuscleFunction(
                {
                    id: "",
                    jointId: "",
                    muscleId: "",
                    movementId: "",
                    isPrimeMover: false,
                }
            ),
        ],
        description: ``,
    }
);