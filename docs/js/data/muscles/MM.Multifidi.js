import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "mm_multifidi",
        label: "mm. multifidi",
        origos: [
            "processi transversi",
        ],
        insertions: [
            "processus spinosus bij een bovengelegen wervel (overspant 2-4 wervels)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "mm_multifidi__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "mm_multifidi",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "mm_multifidi__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "mm_multifidi",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "mm_multifidi__columna_vertebralis_cervicalis__rotation",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "mm_multifidi",
                    movementId: "columna_vertebralis_cervicalis__rotation",
                    isPrimeMover: false,
                    notes: ["contralaterale rotatie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "mm_multifidi__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "mm_multifidi",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "mm_multifidi__columna_vertebralis_thoracalis__lateroflexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "mm_multifidi",
                    movementId: "columna_vertebralis_thoracalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "mm_multifidi__columna_vertebralis_thoracalis__rotation",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "mm_multifidi",
                    movementId: "columna_vertebralis_thoracalis__rotation",
                    isPrimeMover: false,
                    notes: ["contralaterale rotatie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "mm_multifidi__columna_vertebralis_lumbalis__extension",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "mm_multifidi",
                    movementId: "columna_vertebralis_lumbalis__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "mm_multifidi__columna_vertebralis_lumbalis__lateroflexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "mm_multifidi",
                    movementId: "columna_vertebralis_lumbalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "mm_multifidi__columna_vertebralis_lumbalis__rotation",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "mm_multifidi",
                    movementId: "columna_vertebralis_lumbalis__rotation",
                    isPrimeMover: false,
                    notes: ["contralaterale rotatie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "mm_multifidi__spine_form",
                    muscleId: "mm_multifidi",
                    functionDescription: "houden de vorm van de wervelkolom in stand",
                }
            )
        ],
        image: "./images/muscles/mm_multifidi.jpeg",
        description: `
De spier loopt van processus transversus naar processus spinosus (overbrugt 2-4
wervels en reikt van sacraal tot cervicaal)
        `,
    }
);