import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_latissimus_dorsi",
        label: "m. latissimus dorsi",
        origos: [
            new AnatomicStructure(
                {
                    label: "processi spinosi T7&nbsp;-&nbsp;T12",
                    notes: ["pars vertebralis"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "facies posteriores costarum 9&nbsp;-&nbsp;12",
                    notes: ["pars costalis"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "crista iliaca (dorsale 1/3 deel)",
                    notes: ["pars iliaca"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "fascia thoracolumbalis",
                    notes: ["pars iliaca"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "angulus inferior scapulae",
                    notes: ["pars scapularis"],
                }
            ),
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "crista tuberculi minoris humeri",
                }
            ),
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. thoracodorsalis",
                    notes: [
                        "C6&nbsp;-&nbsp;C8"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_latissimus_dorsi__shoulder_girdle__retraction",
                    jointId: "shoulder_girdle",
                    muscleId: "m_latissimus_dorsi",
                    movementId: "shoulder_girdle__retraction",
                    isPrimeMover: false,
                    notes: ["alleen bij fixatie van de <em>art. humeri</em>"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_latissimus_dorsi__shoulder_girdle__depression",
                    jointId: "shoulder_girdle",
                    muscleId: "m_latissimus_dorsi",
                    movementId: "shoulder_girdle__depression",
                    isPrimeMover: false,
                    notes: ["alleen bij fixatie van de <em>art. humeri</em>"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_latissimus_dorsi__art_humeri__retroflexion",
                    jointId: "art_humeri",
                    muscleId: "m_latissimus_dorsi",
                    movementId: "art_humeri__retroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_latissimus_dorsi__art_humeri__adduction",
                    jointId: "art_humeri",
                    muscleId: "m_latissimus_dorsi",
                    movementId: "art_humeri__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_latissimus_dorsi__art_humeri__endorotation",
                    jointId: "art_humeri",
                    muscleId: "m_latissimus_dorsi",
                    movementId: "art_humeri__endorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_latissimus_dorsi__ribs",
                    muscleId: "m_latissimus_dorsi",
                    functionDescription: "expiratie (door middel van detractie van de ribben)",
                }
            ),
        ],
        image: "./images/muscles/m_latissimus_dorsi.jpeg",
        description: `

        `.trim(),
    }
);