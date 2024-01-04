import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_transversus_thoracis",
        label: "m. transversus thoracis",
        regionIds: ["torso"],
        origos: [
            "facies inferoposterior corporis sterni",
            "facies posterior processus xiphoidei",
            "extremitates sternalis cartilaginum costarum 4 - 7",
        ],
        insertions: [
            "facies interna cartilaginum costarum 2 - 6",
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_transversus_thoracis__breathing_out",
                    muscleId: "m_transversus_thoracis",
                    functionDescription: "expiratie (door middel van detractie van de ribben)",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "m_transversus_thoracis__support",
                    muscleId: "m_transversus_thoracis",
                    functionDescription: "de borstkas ondersteunen",
                }
            ),
        ],
        image: "./images/muscles/m_transversus_thoracis.jpeg",
        description: `
Deze spier is enige spier die het sternum met de ribben verbindt.
        `.trim(),
    }
);