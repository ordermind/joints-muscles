import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "mm_levatores_costarum",
        label: "mm. levatores costarum",
        origos: [
            "processi transversi C7&nbsp;-&nbsp;T11",
        ],
        insertions: [
            "facies posterior costae bij de <strong>eerstvolgende</strong> lager gelegen wervel (T1&nbsp;-&nbsp;T12)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "ramus dorsalis n. spinalis cervicalis",
                    notes: ["C8"],
                    conflictingWith: [
                        "n. spinalis cervicalis",
                        "rami dorsales nervorum spinalium cervicalium"
                    ],
                }
            ),
            new AnatomicStructure(
                {
                    label: "rami dorsales nervorum spinalium thoracicorum",
                    notes: ["T1&nbsp;-&nbsp;T11"]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "mm_levatores_costarum__columna_vertebralis_thoracalis__lateroflexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "mm_levatores_costarum",
                    movementId: "columna_vertebralis_thoracalis__lateroflexion",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "mm_levatores_costarum__ribs",
                    muscleId: "mm_levatores_costarum",
                    functionDescription: "heffen van de ribben (zonder duidelijke koppeling aan inspiratie)",
                }
            )
        ],
        image: "./images/muscles/mm_levatores_costarum.jpeg",
        description: `
De spieren liggen ventraal ten opzichte van de laterale streng van de m. erector spinae. Ondanks de naamgeving van de spier is de heffunctie waarschijnlijk gering.
        `.trim(),
    }
);