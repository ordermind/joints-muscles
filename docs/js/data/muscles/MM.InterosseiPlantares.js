import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "mm_interossei_plantares";

export default new Muscle(
    {
        id: muscleId,
        label: "mm. interossei plantares",
        origos: [
            "facies mediales ossium metatarsalium III&nbsp;-&nbsp;V"
        ],
        insertions: [
            "bases phalangum proximalium III&nbsp;-&nbsp;V (mediaal)",
            "aponeuroses dorsales phalangum III&nbsp;-&nbsp;V",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. plantaris lateralis",
                    notes: ["S2&nbsp;-&nbsp;S3"]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_metatarsophalangeae_3_5__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_metatarsophalangeae_3_5__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_interphalangeae_proximales_pedis_3_5__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_interphalangeae_distales_pedis_3_5__extension",
                    isPrimeMover: false,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `
Deze spieren zijn in tegenstelling tot de [Link type="Muscle" targetId="mm_interossei_dorsales_pedis" label="mm. interossei dorsales"] éénkoppig. De functie komt neer op het sluiten van de tenen 3, 4, 5 ten opzichte van de 2e teen (adductie van de tenen). Hierbij gaat men uit van de verplaatsing ten opzichte van de as van teen (digitus) II. De 2e teen heeft dus geen m. interosseus plantaris.
        `.trim(),
    }
);