import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_teres_minor",
        label: "m. teres minor",
        origos: [
            "margo lateralis scapulae (bovenste 2/3 deel)"
        ],
        insertions: [
            "tuberculum majus humeri (onderste facet)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. axillaris",
                    notes: [
                        "C5&nbsp;-&nbsp;C6"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_teres_minor__art_humeri__exorotation",
                    jointId: "art_humeri",
                    muscleId: "m_teres_minor",
                    movementId: "art_humeri__exorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_teres_minor__art_humeri",
                    muscleId: "m_teres_minor",
                    functionDescription: "stabilisatie van de <em>art. humeri</em>",
                }
            ),
        ],
        image: "./images/muscles/m_teres_minor.jpeg",
        description: `
Deze spier vormt samen met de [Link type="Muscle" targetId="m_supraspinatus" label="m. supraspinatus"], [Link type="Muscle" targetId="m_infraspinatus" label="m. infraspinatus"], en [Link type="Muscle" targetId="m_subscapularis" label="m. subscapularis"] de zogenaamde "rotator cuff" of "rotatorenmanchet". De aan deze constructie deelnemende spieren spannen het kapsel van de articulatio humeri en houden de kop van de humerus op zijn plaats in de kom van de articulatio humeri.
        `.trim(),
    }
);