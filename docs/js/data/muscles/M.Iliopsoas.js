import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_iliopsoas",
        label: "m. iliopsoas",
        origos: [
            new AnatomicStructure(
                {
                    label: "facies anterolaterales corporum vertebrae T12 - L5",
                    notes: ["m. psoas major"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "processi costarum L1 - L5",
                    notes: ["m. psoas major"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "fossa iliaca (superiore 2/3 deel)",
                    notes: ["m. iliacus"],
                }
            ),
        ],
        insertions: [
            "trochanter minor femoris",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_iliopsoas__art_coxae__anteflexion",
                    jointId: "art_coxae",
                    muscleId: "m_iliopsoas",
                    movementId: "art_coxae__anteflexion",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_iliopsoas__pelvis",
                    muscleId: "m_iliopsoas",
                    functionDescription: "achteroverkantelen bekken",
                }
            )
        ],
        image: "./images/muscles/m_iliopsoas.jpeg",
        description: `
Deze spier is een soort tweekoppige spier die bestaat uit [Link type="Muscle" targetId="m_psoas_major" label="m. psoas major"] en [Link type="Muscle" targetId="m_iliacus" label="m. iliacus"].
        `.trim(),
    }
);