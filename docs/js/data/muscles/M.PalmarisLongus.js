import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_palmaris_longus",
        label: "m. palmaris longus",
        origos: [
            new AnatomicStructure(
                {
                    label: "epicondylus medialis humeri",
                    notes: ["via de common flexor tendon (CFT)"],
                }
            ),
        ],
        insertions: [
            "aponeurosis palmaris",
            "retinaculum musculorum flexorum manus",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_palmaris_longus__art_cubiti__flexion",
                    jointId: "art_cubiti",
                    muscleId: "m_palmaris_longus",
                    movementId: "art_cubiti__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_palmaris_longus__art_radiocarpalis__palmar_flexion",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_palmaris_longus",
                    movementId: "art_radiocarpalis__palmar_flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_palmaris_longus__aponeurose",
                    muscleId: "m_palmaris_longus",
                    functionDescription: "spannen van de palmairaponeurose",
                }
            ),
        ],
        image: "./images/muscles/m_palmaris_longus.jpeg",
        description: `
Deze spier ontbreekt soms. De palmairaponeurose is dan echter wel aanwezig.
        `.trim(),
    }
);