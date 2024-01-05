import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";

export default new Muscle(
    {
        id: "m_spinalis_capitis",
        label: "m. spinalis capitis",
        origos: [
            "processi spinosi C7 - T1"
        ],
        insertions: [
            "os occipitale (mediaal)",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_spinalis_capitis__juncturae_craniovertebrales__extension",
                    jointId: "juncturae_craniovertebrales",
                    muscleId: "m_spinalis_capitis",
                    movementId: "juncturae_craniovertebrales__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_spinalis_capitis__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_spinalis_capitis",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: false,
                }
            ),
        ],
        image: "./images/muscles/m_spinalis_capitis.jpeg",
        description: `m. spinalis capitis is vaak samengevoegd met [Link type="Muscle" targetId="m_semispinalis_capitis" label="m. semispinalis capitis"].`,
    }
);