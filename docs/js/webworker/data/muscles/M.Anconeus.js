import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_anconeus",
        label: "m. anconeus",
        origos: [
            "epicondylus lateralis humeri (dorsaal)",
        ],
        insertions: [
            "facies posterior ulnae (proximale 1/4 deel)",
            "facies lateralis olecrani",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_anconeus__art_cubiti__extension",
                    jointId: "art_cubiti",
                    muscleId: "m_anconeus",
                    movementId: "art_cubiti__extension",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_anconeus__capsule",
                    muscleId: "m_anconeus",
                    functionDescription: "het gewrichtskapsel van de art. cubiti spannen",
                }
            ),
        ],
        image: "./images/muscles/m_anconeus.jpeg",
        description: `
Het is klein spiertje dat belangrijker is als kapselspanner dan als elleboogstrekker.

Wat betreft topografie sluit de spier ook aan bij de [Link type="Joint" targetId="m_extensor_carpi_ulnaris" label="m. extensor carpi ulnaris"].
        `.trim(),
    }
);