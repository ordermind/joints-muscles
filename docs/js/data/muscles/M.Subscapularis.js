import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_subscapularis",
        label: "m. subscapularis",
        origos: [
            "fossa subscapularis scapulae",
        ],
        insertions: [
            "tuberculum minus humeri",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. subscapularis superior",
                    notes: [
                        "C5&nbsp;-&nbsp;C6"
                    ]
                }
            ),
            new AnatomicStructure(
                {
                    label: "n. subscapularis inferior",
                    notes: [
                        "C5&nbsp;-&nbsp;C6"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_subscapularis__art_humeri__endorotation",
                    jointId: "art_humeri",
                    muscleId: "m_subscapularis",
                    movementId: "art_humeri__endorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_subscapularis__art_humeri",
                    muscleId: "m_subscapularis",
                    functionDescription: "stabilisatie van de <em>art. humeri</em>",
                }
            ),
        ],
        image: "./images/muscles/m_subscapularis.jpeg",
        description: `
Deze spier vormt samen met de [Link type="Muscle" targetId="m_supraspinatus" label="m. supraspinatus"], [Link type="Muscle" targetId="m_infraspinatus" label="m. infraspinatus"], en [Link type="Muscle" targetId="m_teres_minor" label="m. teres minor"] de zogenaamde "rotator cuff" of "rotatorenmanchet". De aan deze constructie deelnemende spieren spannen het kapsel van de articulatio humeri en houden de kop van de humerus op zijn plaats in de kom van de articulatio humeri.
        `.trim(),
    }
);