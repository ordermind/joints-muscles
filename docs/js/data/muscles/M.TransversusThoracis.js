import AnatomicStructure from "../../data-types/AnatomicStructure.js";
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
            "extremitates sternales cartilaginum costarum 4&nbsp;-&nbsp;7",
        ],
        insertions: [
            "facies internae cartilaginum costarum 2&nbsp;-&nbsp;6",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "nn. intercostales",
                }
            ),
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