import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_levator_scapulae",
        label: "m. levator scapulae",
        origos: [
            "processi transversi C1 - C4",
        ],
        insertions: [
            "angulus superior scapulae",
            "margo medialis scapulae (craniaal)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_levator_scapulae__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_levator_scapulae",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: false,
                    notes: ["alleen bij gefixeerde insertie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_levator_scapulae__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_levator_scapulae",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: false,
                    notes: ["alleen bij gefixeerde insertie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_levator_scapulae__columna_vertebralis_cervicalis__rotation",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_levator_scapulae",
                    movementId: "columna_vertebralis_cervicalis__rotation",
                    movementLabelOverride: "ipsilaterale rotatie",
                    isPrimeMover: false,
                    notes: ["ipsilaterale rotatie", "alleen bij gefixeerde insertie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_levator_scapulae__shoulder_girdle__elevation",
                    jointId: "shoulder_girdle",
                    muscleId: "m_levator_scapulae",
                    movementId: "shoulder_girdle__elevation",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_levator_scapulae__shoulder_girdle__mediorotation",
                    jointId: "shoulder_girdle",
                    muscleId: "m_levator_scapulae",
                    movementId: "shoulder_girdle__mediorotation",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_levator_scapulae.jpeg",
    }
);