import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_trapezius_descendens",
        label: "m. trapezius, pars descendens",
        origos: [
            "linea nuchae superior (mediaal)",
            "protuberantia occipitalis externa",
            "ligamentum nuchae",
        ],
        insertions: [
            "extremitas acromialis claviculae",
            "acromion",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_trapezius_descendens__head_joints__extension",
                    jointId: "head_joints",
                    muscleId: "m_trapezius_descendens",
                    movementId: "head_joints__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_trapezius_descendens__head_joints__lateroflexion",
                    jointId: "head_joints",
                    muscleId: "m_trapezius_descendens",
                    movementId: "head_joints__lateroflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_trapezius_descendens__head_joints__rotation",
                    jointId: "head_joints",
                    muscleId: "m_trapezius_descendens",
                    movementId: "head_joints__rotation",
                    movementLabelOverride: "contralaterale rotatie",
                    isPrimeMover: false,
                    notes: ["contralaterale rotatie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_trapezius_descendens__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_trapezius_descendens",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_trapezius_descendens__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_trapezius_descendens",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_trapezius_descendens__shoulder_girdle__retraction",
                    jointId: "shoulder_girdle",
                    muscleId: "m_trapezius_descendens",
                    movementId: "shoulder_girdle__retraction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_trapezius_descendens__shoulder_girdle__elevation",
                    jointId: "shoulder_girdle",
                    muscleId: "m_trapezius_descendens",
                    movementId: "shoulder_girdle__elevation",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_trapezius_descendens__shoulder_girdle__laterorotation",
                    jointId: "shoulder_girdle",
                    muscleId: "m_trapezius_descendens",
                    movementId: "shoulder_girdle__laterorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_trapezius_descendens__fixate_scapula",
                    muscleId: "m_trapezius_descendens",
                    functionDescription: "de scapula (en daarmee de schoudergordel) fixeren",
                }
            )
        ],
        image: "./images/muscles/m_trapezius_descendens.jpeg",
    }
);