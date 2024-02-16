import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "m_triceps_brachii";

export default new Muscle(
    {
        id: muscleId,
        label: "m. triceps brachii",
        origos: [
            new AnatomicStructure(
                {
                    label: "tuberculum infraglenoidale scapulae",
                    notes: ["caput longum"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "facies posterior humeri (proximaal van de <em>sulcus nervi radialis</em>)",
                    notes: ["caput laterale"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "facies posterior humeri (distaal van de <em>sulcus nervi radialis</em>)",
                    notes: ["caput mediale"],
                }
            ),
        ],
        insertions: [
            "olecranon",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_humeri__retroflexion",
                    isPrimeMover: false,
                    notes: ["alleen caput longum"],
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_humeri__adduction",
                    isPrimeMover: false,
                    notes: ["alleen caput longum"],
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId: muscleId,
                    movementId: "art_cubiti__extension",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_triceps_brachii.jpeg",
        description: `
Het caput longum is als enige deel van de spier biarticulair.

De ruimtelijke ligging van de drie koppen ten opzichte van elkaar is zodanig dat ook gesteld kan worden dat het caput laterale meer een 'oppervlakkige' kop en het caput mediale meer een 'diepe' kop is.
        `.trim(),
    }
);