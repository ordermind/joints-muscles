import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_scalenus_anterior",
        label: "m. scalenus anterior",
        origos: [
            "processi transversi C3&nbsp;-&nbsp;C6",
        ],
        insertions: [
            "tuberculum musculi scaleni anterioris",
            "margo superior costae 1",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "rami anteriores nervorum spinalium cervicalium",
                    notes: [
                        "C4&nbsp;-&nbsp;C6"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_scalenus_anterior__columna_vertebralis_cervicalis__flexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_anterior",
                    movementId: "columna_vertebralis_cervicalis__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_scalenus_anterior__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_anterior",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_scalenus_anterior__columna_vertebralis_cervicalis__rotation",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_anterior",
                    movementId: "columna_vertebralis_cervicalis__rotation",
                    movementLabelOverride: "contralaterale rotatie",
                    isPrimeMover: false,
                    notes: ["contralaterale rotatie"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_scalenus_anterior__breathing",
                    muscleId: "m_scalenus_anterior",
                    functionDescription: "inspiratie (door middel van elevatie van de ribben)",
                    notes: ["bij gefixeerde halswervelkolom de eerste rib heffen"],
                }
            )
        ],
        image: "./images/muscles/m_scalenus_anterior.jpeg",
    }
);