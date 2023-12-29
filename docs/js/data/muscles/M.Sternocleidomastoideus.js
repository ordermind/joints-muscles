import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_sternocleidomastoideus",
        label: "m. sternocleidomastoideus",
        origos: [
            "manubrium sterni",
            "extremitas sternalis claviculae",
        ],
        insertions: [
            "processus mastoideus",
            "linea nuchae superior (lateraal)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_sternocleidomastoideus__juncturae_craniovertebrales__extension",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_sternocleidomastoideus",
                    movementId: "juncturae_craniovertebrales__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_sternocleidomastoideus__juncturae_craniovertebrales__rotation",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_sternocleidomastoideus",
                    movementId: "juncturae_craniovertebrales__rotation",
                    movementLabelOverride: "contralaterale rotatie",
                    isPrimeMover: true,
                    notes: ["contralaterale rotatie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_sternocleidomastoideus__columna_vertebralis_cervicalis__flexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_sternocleidomastoideus",
                    movementId: "columna_vertebralis_cervicalis__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_sternocleidomastoideus__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_sternocleidomastoideus",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_sternocleidomastoideus__breathing",
                    muscleId: "m_sternocleidomastoideus",
                    functionDescription: "bij gefixeerde insertie het sternum en de clavicula fixeren / heffen ten behoeve van inspiratie."
                }
            )
        ],
        image: "./images/muscles/m_sternocleidomastoideus.jpeg",
    }
);