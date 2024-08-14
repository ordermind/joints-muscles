import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_pectineus",
        label: "m. pectineus",
        origos: [
            new AnatomicStructure(
                {
                    label: "pecten ossis pubis",
                    notes: ["deze lijn zit op de ramus superior ossis pubis"],
                }
            ),
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "linea pectinea femoris",
                    notes: ["proximale voortzetting van de linea aspera femoris"],
                }
            ),
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_pectineus__art_coxae__anteflexion",
                    jointId: "art_coxae",
                    muscleId: "m_pectineus",
                    movementId: "art_coxae__anteflexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_pectineus__art_coxae__adduction",
                    jointId: "art_coxae",
                    muscleId: "m_pectineus",
                    movementId: "art_coxae__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_pectineus__art_coxae__exorotation",
                    jointId: "art_coxae",
                    muscleId: "m_pectineus",
                    movementId: "art_coxae__exorotation",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_pectineus.jpeg",
        description: `

        `.trim(),
    }
);