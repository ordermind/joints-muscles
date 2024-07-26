import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

const muscleId = "mm_interossei_dorsales_pedis";

export default new Muscle(
    {
        id: muscleId,
        label: "mm. interossei dorsales pedis",
        origos: [
            "facies adjacentes ossium metatarsalium I&nbsp;-&nbsp;V"
        ],
        insertions: [
            "bases phalanges proximales II&nbsp;-&nbsp;IV",
            "aponeuroses dorsales phalangium II&nbsp;-&nbsp;IV",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_metatarsophalangeae_2_4__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_metatarsophalangeae_2_4__abduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_metatarsophalangea_2__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_interphalangeae_proximales_pedis_2_4__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "artt_interphalangeae_distales_pedis_2_4__extension",
                    isPrimeMover: false,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `
Deze spieren zijn in tegenstelling tot de [Link type="Muscle" targetId="mm_interossei_plantares" label="mm. interossei plantares"] twéékoppig. De functie komt neer op het spreiden van de 3e en 4e teen ten opzichte van de 2e teen (abductie van de tenen). Hierbij gaat men uit van de verplaatsing ten opzichte van de as van teen (digitus) II. De 2e teen heeft dus twee mm. interossei dorsales: één insertie bij de mediale zijde en één bij de laterale zijde.
        `.trim(),
    }
);