import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

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
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. accessorius",
                }
            ),
            new AnatomicStructure(
                {
                    label: "rami anteriores nervorum spinalium cervicalium",
                    notes: [
                        "C3&nbsp;-&nbsp;C4"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_trapezius_descendens__juncturae_craniovertebrales__extension",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_trapezius_descendens",
                    movementId: "juncturae_craniovertebrales__extension",
                    isPrimeMover: false,
                    notes: ["alleen bij gefixeerde insertie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_trapezius_descendens__juncturae_craniovertebrales__lateroflexion",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_trapezius_descendens",
                    movementId: "juncturae_craniovertebrales__lateroflexion",
                    isPrimeMover: false,
                    notes: ["alleen bij gefixeerde insertie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_trapezius_descendens__juncturae_craniovertebrales__rotation",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_trapezius_descendens",
                    movementId: "juncturae_craniovertebrales__rotation",
                    movementLabelOverride: "contralaterale rotatie",
                    isPrimeMover: false,
                    notes: ["contralaterale rotatie"],
                    notes: ["alleen bij gefixeerde insertie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_trapezius_descendens__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_trapezius_descendens",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: false,
                    notes: ["alleen bij gefixeerde insertie"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_trapezius_descendens__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_trapezius_descendens",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: false,
                    notes: ["alleen bij gefixeerde insertie"],
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
                    functionDescription: "de <em>scapula</em> (en daarmee de schoudergordel) fixeren",
                }
            )
        ],
        image: "./images/muscles/m_trapezius_descendens.jpeg",
    }
);