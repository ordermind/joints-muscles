import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default [
    new Muscle(
        {
            id: "m_iliopsoas",
            label: "m. iliopsoas",
            origos: [
                new AnatomicStructure(
                    {
                        label: "facies anterolaterales corporum vertebralium T12&nbsp;-&nbsp;L5",
                        notes: ["m. psoas major"],
                    }
                ),
                new AnatomicStructure(
                    {
                        label: "processi costales L1&nbsp;-&nbsp;L5",
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
            innervation: [
                new AnatomicStructure(
                    {
                        label: "n. femoralis",
                        notes: [
                            "L2&nbsp;-&nbsp;L4",
                            "m. iliacus"
                        ]
                    }
                ),
                new AnatomicStructure(
                    {
                        label: "rami anteriores nervorum spinalium lumborum",
                        notes: [
                            "L1&nbsp;-&nbsp;L3",
                            "m. psoas major"
                        ]
                    }
                )
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
                new JointMuscleFunction(
                    {
                        id: "m_iliopsoas__art_coxae__exorotation",
                        jointId: "art_coxae",
                        muscleId: "m_iliopsoas",
                        movementId: "art_coxae__exorotation",
                        isPrimeMover: false,
                    }
                ),
            ],
            specialFunctions: [
                new SpecialMuscleFunction(
                    {
                        id: "m_iliopsoas__pelvis",
                        muscleId: "m_iliopsoas",
                        functionDescription: "vooroverkantelen bekken (met bijbehorende toename van lendenlordose)",
                        notes: ["alleen bij gefixeerde insertie"],
                    }
                ),
            ],
            image: "./images/muscles/m_iliopsoas.jpeg",
            description: `
    Deze spier is een soort tweekoppige spier die bestaat uit [Link type="Muscle" targetId="m_psoas_major" label="m. psoas major"] en [Link type="Muscle" targetId="m_iliacus" label="m. iliacus"].
            `.trim(),
        }
    )
];