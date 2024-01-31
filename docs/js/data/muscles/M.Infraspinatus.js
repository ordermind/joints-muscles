import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_infraspinatus",
        label: "m. infraspinatus",
        origos: [
            "fossa infraspinata scapulae",
        ],
        insertions: [
            "tuberculum majus humeri (middelste facet)",
            "capsula articularis humeri",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_infraspinatus__art_humeri__exorotation",
                    jointId: "art_humeri",
                    muscleId: "m_infraspinatus",
                    movementId: "art_humeri__exorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_infraspinatus__art_humeri",
                    muscleId: "m_infraspinatus",
                    functionDescription: "stabilisatie van de art. humeri",
                }
            ),
        ],
        image: "./images/muscles/m_infraspinatus.jpeg",
        description: `
Deze spier vormt samen met de [Link type="Muscle" targetId="m_supraspinatus" label="m. supraspinatus"], [Link type="Muscle" targetId="m_subscapularis" label="m. subscapularis"], en [Link type="Muscle" targetId="m_teres_minor" label="m. teres minor"] de zogenaamde "rotator cuff" of "rotatorenmanchet". De aan deze constructie deelnemende spieren spannen het kapsel van de articulatio humeri en houden de kop van de humerus op zijn plaats in de kom van de articulatio humeri.
        `.trim(),
    }
);