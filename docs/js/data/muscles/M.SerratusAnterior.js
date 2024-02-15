import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_serratus_anterior";

export default new Muscle(
    {
        id: muscleId,
        label: "m. serratus anterior",
        origos: [
            new AnatomicStructure(
                {
                    label: "facies externae costarum 1&nbsp;-&nbsp;9",
                    notes: ["er is een grote variatie bij verschillende bronnen wat betreft de exacte ribben van de origo van de verschillende delen van de spier"]
                }
            ),
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "angulus superior scapulae",
                    notes: ["pars superior"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "margo medialis scapulae",
                    notes: ["pars intermedia", "pars inferior"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "angulus inferior scapulae",
                    notes: ["pars inferior"],
                }
            ),
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__protraction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__depression",
                    isPrimeMover: true,
                    notes: ["alleen pars inferior"],
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__laterorotation",
                    isPrimeMover: true,
                    notes: ["alleen pars inferior"],
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "breathing",
                    muscleId: muscleId,
                    functionDescription: "inspiratie (door middel van elevatie van de ribben)",
                    notes: ["alleen bij fixatie van de scapula"],
                }
            ),
        ],
        image: "./images/muscles/m_serratus_anterior.jpeg",
        description: `
Deze spier kan de scapula, en daarmee de schoudergordel, fixeren.
        `.trim(),
    }
);