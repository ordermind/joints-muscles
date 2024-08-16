import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_semispinalis_capitis",
        label: "m. semispinalis capitis",
        origos: [
            "processi transversi C4&nbsp;-&nbsp;T6(T7)",
        ],
        insertions: [
            "os occipitale (tussen linea nuchae superior en linea nuchae inferior)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. occipitalis major",
                    notes: [
                        "C2"
                    ]
                }
            ),
            new AnatomicStructure(
                {
                    label: "n. spinalis cervicalis",
                    notes: [
                        "C3"
                    ]
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_capitis__juncturae_craniovertebrales__extension",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_semispinalis_capitis",
                    movementId: "juncturae_craniovertebrales__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_capitis__juncturae_craniovertebrales__lateroflexion",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_semispinalis_capitis",
                    movementId: "juncturae_craniovertebrales__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_capitis__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_semispinalis_capitis",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_semispinalis_capitis__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_semispinalis_capitis",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: false,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_semispinalis_capitis__spine",
                    muscleId: "m_semispinalis_capitis",
                    functionDescription: "de vorm van de wervelkolom in stand houden",
                }
            )
        ],
        image: "./images/muscles/m_semispinalis_capitis.jpeg",
    }
);