import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_psoas_minor";

export default new Muscle(
    {
        id: muscleId,
        label: "m. psoas minor",
        origos: [
            "corpora vertebrarum T12&nbsp;-&nbsp;L1"
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "eminentia iliopubica",
                    notes: ["een verhevenheid die het punt markeert waar het os ilium en os pubis samenkomen"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "pecten ossis pubis",
                    notes: ["deze lijn zit op de ramus superior ossis pubis"],
                }
            ),
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "ramus anterior n. spinalis lumbalis",
                    notes: [
                        "L1",
                    ],
                    conflictingWith: [
                        "rami anteriores nervorum spinalium lumborum",
                    ],
                }
            ),
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "columna_vertebralis_thoracalis__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "columna_vertebralis_lumbalis__flexion",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "pelvis",
                    muscleId: muscleId,
                    functionDescription: "achteroverkantelen bekken (met bijbehorend afvlakken van lendenlordose)",
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `
N.B. Deze spier is alleen bij 50% van de individuen aanwezig.
        `.trim(),
    }
);