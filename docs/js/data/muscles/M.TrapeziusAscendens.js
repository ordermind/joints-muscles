import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

const muscleId = "m_trapezius_ascendens";

export default new Muscle(
    {
        id: muscleId,
        label: "m. trapezius, pars ascendens",
        origos: [
            new AnatomicStructure(
                {
                    label: "processi spinosi T2-T5&nbsp;-&nbsp;T12",
                    notes: ["afhankelijk van de bron kan de bovenste wervel van de origo varieren tussen T2-T5"],
                }
            ),
        ],
        insertions: [
            "crista inferior spinae scapulae (mediale 2/3 deel)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__retraction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__depression",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__laterorotation",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "fixate_scapula",
                    muscleId: muscleId,
                    functionDescription: "de <em>scapula</em> (en daarmee de schoudergordel) fixeren",
                }
            )
        ],
        image: "./images/muscles/m_trapezius_ascendens.jpeg",
    }
);