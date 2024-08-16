import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_scalenus_medius",
        label: "m. scalenus medius",
        origos: [
            "processi transversi (C1)C2&nbsp;-&nbsp;C7",
        ],
        insertions: [
            "margo superior costae 1",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "rami anteriores nervorum spinalium cervicalium",
                    notes: [
                        "C3&nbsp;-&nbsp;C8"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_scalenus_medius__columna_vertebralis_cervicalis__flexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_medius",
                    movementId: "columna_vertebralis_cervicalis__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_scalenus_medius__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_scalenus_medius",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_scalenus_medius__breathing",
                    muscleId: "m_scalenus_medius",
                    functionDescription: "inspiratie (door middel van elevatie van de ribben)",
                    notes: ["bij gefixeerde halswervelkolom de eerste rib heffen"],
                }
            )
        ],
        image: "./images/muscles/m_scalenus_medius.jpeg",
    }
);