import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_longus_colli",
        label: "m. longus colli",
        origos: [
            new AnatomicStructure(
                {
                    label: "facies anteriores corporum vertebralium C5&nbsp;-&nbsp;T3",
                    notes: ["pars recta/verticalis"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "processi transversi C3&nbsp;-&nbsp;C5",
                    notes: ["pars obliqua superior"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "facies anteriores corporum vertebralium T1&nbsp;-&nbsp;T3",
                    notes: ["pars obliqua inferior"],
                }
            ),
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "facies anteriores corporum vertebralium C2&nbsp;-&nbsp;C4",
                    notes: ["pars recta/verticalis"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "tuberculum anterius C1",
                    notes: ["pars obliqua superior"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "processi transversi C5&nbsp;-&nbsp;C6",
                    notes: ["pars obliqua inferior"],
                }
            ),
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_longus_colli__columna_vertebralis_cervicalis__flexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_longus_colli",
                    movementId: "columna_vertebralis_cervicalis__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longus_colli__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_longus_colli",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_longus_colli__columna_vertebralis_cervicalis__rotation",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_longus_colli",
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
                    id: "m_longus_colli__proprioception",
                    muscleId: "m_longus_colli",
                    functionDescription: "proprioceptieve informatie uit de nekregio leveren, onder andere via de spierspoeltjes"
                }
            )
        ],
        image: "./images/muscles/m_longus_colli.jpeg",
    }
);