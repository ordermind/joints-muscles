import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

const muscleId = "mm_interossei_dorsales_manus";

export default new Muscle(
    {
        id: muscleId,
        label: "mm. interossei dorsales manus",
        origos: [
            "facies adjacentes ossium metacarpalium I&nbsp;-&nbsp;V"
        ],
        insertions: [
            "bases phalangum proximalium II&nbsp;-&nbsp;IV",
            "aponeuroses dorsales phalangum II&nbsp;-&nbsp;IV",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_metacarpophalangeae_2_4__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_metacarpophalangeae_2_4__abduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_interphalangeae_proximales_manus_2_4__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "artt_interphalangeae_distales_manus_2_4__extension",
                    isPrimeMover: false,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `
Deze spieren zijn in tegenstelling tot de [Link type="Muscle" targetId="mm_interossei_palmares" label="mm. interossei palmares"] tweekoppig. De functie komt neer op het spreiden van de vingers. Hierbij gaat men uit van de as van de derde vinger (digitus III). Vinger III heeft dus twee mm. interossei dorsales.
        `.trim(),
    }
);