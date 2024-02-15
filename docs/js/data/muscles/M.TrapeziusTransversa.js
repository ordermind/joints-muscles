import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

const muscleId = "m_trapezius_transversa";

export default new Muscle(
    {
        id: muscleId,
        label: "m. trapezius, pars transversa",
        origos: [
            new AnatomicStructure(
                {
                    label: "processi spinosi C6-T1&nbsp;-&nbsp;T2-T4",
                    notes: ["Afhankelijk van de bron kan de origo varieren tussen C6-T2 en T1-T4. Er is wel consensus over het aantal wervels (4)."],
                }
            ),
        ],
        insertions: [
            "crista superior spinae scapulae",
            "acromion",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "shoulder_girdle__retraction",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: muscleId + "__" + "fixate_scapula",
                    muscleId: muscleId,
                    functionDescription: "de scapula (en daarmee de schoudergordel) fixeren",
                }
            )
        ],
        image: "./images/muscles/m_trapezius_transversa.jpeg",
    }
);