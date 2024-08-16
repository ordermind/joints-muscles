import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_supraspinatus",
        label: "m. supraspinatus",
        origos: [
            "fossa supraspinata scapulae",
        ],
        insertions: [
            "tuberculum majus humeri (bovenste facet)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. suprascapularis",
                    notes: [
                        "voortzetting van de <em>n. radialis</em>",
                        "C5&nbsp;-&nbsp;C6"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_supraspinatus__art_humeri__abduction",
                    jointId: "art_humeri",
                    muscleId: "m_supraspinatus",
                    movementId: "art_humeri__abduction",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_supraspinatus__art_humeri",
                    muscleId: "m_supraspinatus",
                    functionDescription: "stabilisatie van de <em>art. humeri</em>",
                }
            ),
        ],
        image: "./images/muscles/m_supraspinatus.jpeg",
        description: `
Deze spier vormt samen met de [Link type="Muscle" targetId="m_infraspinatus" label="m. infraspinatus"], [Link type="Muscle" targetId="m_subscapularis" label="m. subscapularis"], en [Link type="Muscle" targetId="m_teres_minor" label="m. teres minor"] de zogenaamde "rotator cuff" of "rotatorenmanchet". De aan deze constructie deelnemende spieren spannen het kapsel van de articulatio humeri en houden de kop van de humerus op zijn plaats in de kom van de articulatio humeri.
        `.trim(),
    }
);