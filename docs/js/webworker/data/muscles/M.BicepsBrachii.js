import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_biceps_brachii",
        label: "m. biceps brachii",
        origos: [
            new AnatomicStructure(
                {
                    label: "tuberculum supraglenoidale scapulae",
                    notes: ["caput longum"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "processus coracoideus scapulae",
                    notes: ["caput breve"],
                }
            ),
        ],
        insertions: [
            "tuberositas radii",
            "fascia antebrachii",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_biceps_brachii__art_cubiti__flexion",
                    jointId: "art_cubiti",
                    muscleId: "m_biceps_brachii",
                    movementId: "art_cubiti__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_biceps_brachii__art_cubiti__supination",
                    jointId: "art_cubiti",
                    muscleId: "m_biceps_brachii",
                    movementId: "art_cubiti__supination",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_biceps_brachii__art_humeri__anteflexion",
                    jointId: "art_humeri",
                    muscleId: "m_biceps_brachii",
                    movementId: "art_humeri__anteflexion",
                    isPrimeMover: false,
                    notes: ["bij contractie van beide koppen tegelijk"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_biceps_brachii__art_humeri__abduction",
                    jointId: "art_humeri",
                    muscleId: "m_biceps_brachii",
                    movementId: "art_humeri__abduction",
                    isPrimeMover: false,
                    notes: ["alleen caput longum"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_biceps_brachii__art_humeri__endorotation",
                    jointId: "art_humeri",
                    muscleId: "m_biceps_brachii",
                    movementId: "art_humeri__endorotation",
                    isPrimeMover: false,
                    notes: ["alleen caput longum"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_biceps_brachii__art_humeri__adduction",
                    jointId: "art_humeri",
                    muscleId: "m_biceps_brachii",
                    movementId: "art_humeri__adduction",
                    isPrimeMover: false,
                    notes: ["alleen caput breve"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_biceps_brachii__caput_humeri",
                    muscleId: "m_biceps_brachii",
                    functionDescription: "caput humeri ondersteunen in art. humeri",
                }
            )
        ],
        image: "./images/muscles/m_biceps_brachii.jpeg",
        description: `

        `.trim(),
    }
);