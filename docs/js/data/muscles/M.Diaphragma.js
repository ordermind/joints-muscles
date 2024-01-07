import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_diaphragma",
        label: "m. diaphragma",
        regionIds: ["torso"],
        origos: [
            new AnatomicStructure(
                {
                    label: "facies posterior processus xiphoidei",
                    notes: ["pars sternalis"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "facies interna cartilaginum costarum et costarum 7&nbsp;-&nbsp;12",
                    notes: ["pars costalis"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "arcus lumbocostales",
                    notes: ["pars lumbalis"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "facies anterior corporum vertebrales L1&nbsp;-&nbsp;L3",
                    notes: ["pars lumbalis"],
                }
            ),
        ],
        insertions: [
            "centrum tendineum",
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_diaphragma__breathing",
                    muscleId: "m_diaphragma",
                    functionDescription: "vergroot bij contractie de thorax en verlaagt de intrathoracale druk (inspiratie)",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "m_diaphragma__pressure",
                    muscleId: "m_diaphragma",
                    functionDescription: "verhoogt de intra-abdominale druk",
                    notes: ["bij gelijktijdige contractie van de buikspieren"],
                }
            ),
        ],
        image: "./images/muscles/m_diaphragma.jpeg",
        description: `
De spier insereert in feite aan zichzelf in het centrum tendineum en is op te vatten als een tweetal koepels, die bij contractie naar caudaal toe afplatten (met het centrum tendineum min of meer als punctum fixum).
        `.trim(),
    }
);