import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "mm_rotatores_longi",
        label: "mm. rotatores longi",
        origos: [
            "processi transversi T2-T12",
        ],
        insertions: [
            "processus spinosus bij de <strong>2 niveaus</strong> hoger gelegen wervel",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "mm_rotatores_longi__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "mm_rotatores_longi",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "mm_rotatores_longi__columna_vertebralis_thoracalis__rotation",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "mm_rotatores_longi",
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
                    id: "mm_rotatores_longi__spine",
                    muscleId: "mm_rotatores_longi",
                    functionDescription: "handhaven van de stand van de wervelkolom"
                }
            )
        ],
        image: "./images/muscles/mm_rotatores_longi.jpeg",
    }
);