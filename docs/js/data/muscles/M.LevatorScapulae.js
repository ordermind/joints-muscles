import Muscle from "../../data-types/Muscle.js";
import MuscleFunction from "../../data-types/MuscleFunction.js";

export default new Muscle(
    {
        id: "m_levator_scapulae",
        label: "m. levator_scapulae",
        origos: [
            "processi transversi C1-C4",
        ],
        insertions: [
            "angulus superior scapulae",
            "margo medialis scapulae (craniaal)",
        ],
        functions: [
            new MuscleFunction(
                {
                    id: "m_levator_scapulae__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_levator_scapulae",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: false,
                    notes: ["alleen bij gefixeerde insertie"],
                }
            ),
            new MuscleFunction(
                {
                    id: "m_levator_scapulae__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_levator_scapulae",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: false,
                    notes: ["alleen bij gefixeerde insertie"],
                }
            ),
            new MuscleFunction(
                {
                    id: "m_levator_scapulae__columna_vertebralis_cervicalis__rotation",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_levator_scapulae",
                    movementId: "columna_vertebralis_cervicalis__rotation",
                    isPrimeMover: false,
                    notes: ["ipsilaterale rotatie", "alleen bij gefixeerde insertie"],
                }
            ),
            new MuscleFunction(
                {
                    id: "m_levator_scapulae__shoulder_girdle__elevation",
                    jointId: "shoulder_girdle",
                    muscleId: "m_levator_scapulae",
                    movementId: "shoulder_girdle__elevation",
                    isPrimeMover: true,
                }
            ),
        ]
    }
);