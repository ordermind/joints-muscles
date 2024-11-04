import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import AnatomicStructure from "../../data-types/AnatomicStructure.js";

export default new Muscle(
    {
        id: "m_flexor_carpi_ulnaris",
        label: "m. flexor carpi ulnaris",
        origos: [
            new AnatomicStructure(
                {
                    label: "epicondylus medialis humeri",
                    notes: ["via de common flexor tendon (CFT)", "caput humerale"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "olecranon",
                    notes: ["caput ulnare"],
                }
            ),
            new AnatomicStructure(
                {
                    label: "margo posterior ulnae",
                    notes: ["caput ulnare"],
                }
            ),
        ],
        insertions: [
            "os pisiforme",
            "hamulus ossis hamati",
            "basis ossis metacarpalis V (palmair)",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. ulnaris",
                    notes: [
                        "C7&nbsp;-&nbsp;T1"
                    ],
                    conflictingWith: ["ramus superficialis n. ulnaris", "ramus profundus n. ulnaris"],
                }
            )
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_flexor_carpi_ulnaris__art_cubiti__flexion",
                    jointId: "art_cubiti",
                    muscleId: "m_flexor_carpi_ulnaris",
                    movementId: "art_cubiti__flexion",
                    isPrimeMover: false,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_carpi_ulnaris__art_radiocarpalis__palmar_flexion",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_flexor_carpi_ulnaris",
                    movementId: "art_radiocarpalis__palmar_flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_flexor_carpi_ulnaris__art_radiocarpalis__ulnar_deviation",
                    jointId: "art_radiocarpalis",
                    muscleId: "m_flexor_carpi_ulnaris",
                    movementId: "art_radiocarpalis__ulnar_deviation",
                    isPrimeMover: true,
                }
            ),
        ],
        image: "./images/muscles/m_flexor_carpi_ulnaris.jpeg",
        description: `
De pees van de origo wordt de "common flexor tendon" (CFT) genoemd. Dit komt omdat dezelfde pees gebruikt wordt door zowel deze spier als de [Link type="Muscle" targetId="m_flexor_carpi_radialis" label="m. flexor carpi radialis"], [Link type="Muscle" targetId="m_pronator_teres" label="m. pronator teres"], [Link type="Muscle" targetId="m_flexor_digitorum_superficialis" label="m. flexor digitorum superficialis"], en [Link type="Muscle" targetId="m_palmaris_longus" label="m. palmaris longus"].

Het <em>ligamentum pisohamatum</em> en het <em>ligamentum pisometacarpi</em> zijn te beschouwen als de voortzetting van de pees van deze spier, die hiermee via het <em>os pisiforme</em> aanhecht aan <em>os hamatum</em> en <em>os metacarpi V</em>.
        `.trim(),
    }
);