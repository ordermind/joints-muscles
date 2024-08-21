import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_quadratus_plantae";

export default new Muscle(
    {
        id: muscleId,
        label: "m. quadratus plantae",
        origos: [
            "facies plantaris tuberis calcanei",

        ],
        insertions: [
            "tendines terminales m. flexoris digitorum longi"
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. plantaris lateralis",
                    notes: ["S1&nbsp;-&nbsp;S3"]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_metatarsophalangeae_2_5__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_interphalangeae_proximales_pedis_2_5__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_interphalangeae_distales_pedis_2_5__flexion",
                    isPrimeMover: false,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `
Een andere naam voor deze spier is <em>m. flexor accessorius</em>.

De spier optimaliseert de trekrichting van de [Link type="Muscle" targetId="m_flexor_digitorum_longus" label="m. flexor digitorum longus"]. De hier beschreven functie is beredeneerd via de pezen van laatstgenoemde spier.
        `.trim(),
    }
);