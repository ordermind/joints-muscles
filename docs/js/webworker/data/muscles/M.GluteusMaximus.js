import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_gluteus_maximus",
        label: "m. gluteus maximus",
        origos: [
            "facies glutea alae ossis ilii (dorsaal van de linea glutea posterior)",
            "facies dorsalis ossis sacri",
            "fascia thoracolumbalis",
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "tractus iliotibialis",
                    notes: ["bovenste vezels"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "tuberositas glutea femoris",
                    notes: ["onderste vezels"],
                }
            ),
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_gluteus_maximus__art_coxae__retroflexion",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_maximus",
                    movementId: "art_coxae__retroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gluteus_maximus__art_coxae__abduction",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_maximus",
                    movementId: "art_coxae__abduction",
                    isPrimeMover: false,
                    notes: ["alleen bovenste vezels"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gluteus_maximus__art_coxae__adduction",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_maximus",
                    movementId: "art_coxae__adduction",
                    isPrimeMover: false,
                    notes: ["alleen onderste vezels"],
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_gluteus_maximus__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_gluteus_maximus",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_gluteus_maximus.jpeg",
        description: `
De tractus iliotibialis insereert aan het tuberculum van Gerdy op de tibia. Deze omstandigheid geeft de spier een kleine functiecomponent over het kniegewricht (zie [Link type="Muscle" targetId="m_tensor_fasciae_latae" label="m. tensor fasciae latae"]).
        `.trim(),
    }
);