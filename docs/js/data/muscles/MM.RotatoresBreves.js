import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "mm_rotatores_breves",
        label: "mm. rotatores breves",
        origos: [
            "processi transversi T2 - T12",
        ],
        insertions: [
            "processus spinosus bij de <strong>eerstvolgende</strong> hoger gelegen wervel",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "mm_rotatores_breves__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "mm_rotatores_breves",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "mm_rotatores_breves__columna_vertebralis_thoracalis__rotation",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "mm_rotatores_breves",
                    movementId: "columna_vertebralis_thoracalis__rotation",
                    movementLabelOverride: "contralaterale rotatie",
                    isPrimeMover: false,
                    notes: ["contralaterale rotatie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "mm_rotatores_breves__spine",
                    muscleId: "mm_rotatores_breves",
                    functionDescription: "de vorm van de wervelkolom in stand houden"
                }
            )
        ],
        image: "./images/muscles/mm_rotatores_breves.jpeg",
    }
);