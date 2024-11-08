import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

const muscleId = "mm_interossei_palmares";

export default new Muscle(
    {
        id: muscleId,
        label: "mm. interossei palmares",
        origos: [
            "facies ulnaris ossis metacarpalis II",
            "facies radialis ossis metacarpalis IV",
            "facies radialis ossis metacarpalis V",
        ],
        insertions: [
            new AnatomicStructure(
                {
                    label: "aponeuroses dorsales phalangum II,&nbsp;IV&nbsp;et&nbsp;V",
                    conflictingWith: [
                        "aponeurosis dorsalis phalangis II",
                        "aponeurosis dorsalis phalangis IV",
                        "aponeurosis dorsalis phalangis V",
                    ]
                }
            )

        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "ramus profundus n. ulnaris",
                    notes: [
                        "C8&nbsp;-&nbsp;T1"
                    ],
                    conflictingWith: ["n. ulnaris"],
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_metacarpophalangea_2__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_metacarpophalangea_4__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_metacarpophalangea_5__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_metacarpophalangea_2__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_metacarpophalangea_4__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_metacarpophalangea_5__adduction",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_interphalangea_proximalis_manus_2__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_interphalangea_proximalis_manus_4__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_interphalangea_proximalis_manus_5__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_interphalangea_distalis_manus_2__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_interphalangea_distalis_manus_4__extension",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    muscleId,
                    movementId: "art_interphalangea_distalis_manus_5__extension",
                    isPrimeMover: false,
                }
            ),
        ],
        image: `./images/muscles/${muscleId}.jpeg`,
        description: `
Deze spieren zijn in tegenstelling tot de [Link type="Muscle" targetId="mm_interossei_dorsales_manus" label="mm. interossei dorsales"] éénkoppig. De functie komt neer op het sluiten van de vingers. Hierbij gaat men uit van de as van de derde vinger (digitus III). Digitus III heeft dus geen m. interosseus palmaris.
        `.trim(),
    }
);