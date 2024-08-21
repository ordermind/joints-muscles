import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_iliocostalis_lumborum",
        label: "m. iliocostalis lumborum",
        origos: [
            "crista sacralis lateralis",
            "crista iliaca (mediaal)",
            "fascia thoracolumbalis",
        ],
        insertions: [
            "processi costales L1&nbsp;-&nbsp;L4",
            "anguli costarum 7&nbsp;-&nbsp;12",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "rami dorsales nervorum spinalium thoracicorum",
                    notes: ["T7&nbsp;-&nbsp;T12"]
                }
            ),
            new AnatomicStructure(
                {
                    label: "rami dorsales nervorum spinalium lumborum",
                    notes: ["L1&nbsp;-&nbsp;L3"]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_iliocostalis_lumborum__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_iliocostalis_lumborum",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_iliocostalis_lumborum__columna_vertebralis_thoracalis__lateroflexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_iliocostalis_lumborum",
                    movementId: "columna_vertebralis_thoracalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_iliocostalis_lumborum__columna_vertebralis_lumbalis__extension",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_iliocostalis_lumborum",
                    movementId: "columna_vertebralis_lumbalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_iliocostalis_lumborum__columna_vertebralis_lumbalis__lateroflexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_iliocostalis_lumborum",
                    movementId: "columna_vertebralis_lumbalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_iliocostalis_lumborum__pelvis",
                    muscleId: "m_iliocostalis_lumborum",
                    functionDescription: "vooroverkantelen bekken (met bijbehorende toename van lendenlordose)",
                    notes: ["alleen bij gefixeerde insertie"],
                }
            ),
        ],
        image: "./images/muscles/m_iliocostalis_lumborum.jpeg",
        description: `
M. iliocostalis is onderdeel van de m. erector spinae.
        `,
    }
);