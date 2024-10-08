import AnatomicStructure from "../../data-types/AnatomicStructure.js";
import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_articularis_genus",
        label: "m. articularis genus",
        regionIds: ["lower_extremity"],
        origos: [
            "corpus femoris (ventraal en distaal)",
        ],
        insertions: [
            "bursa suprapatellaris",
            "capsula articularis genus",
        ],
        innervation: [
            new AnatomicStructure(
                {
                    label: "n. femoralis",
                    notes: [
                        "L2&nbsp;-&nbsp;L4"
                    ]
                }
            )
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_articularis_genus__capsule",
                    muscleId: "m_articularis_genus",
                    functionDescription: "het gewrichtskapsel van de <em>art. genus</em> spannen",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "m_articularis_genus__bursa",
                    muscleId: "m_articularis_genus",
                    functionDescription: "bij extensie van de knie de <em>bursa suprapatellaris</em> naar boven trekken om impingement van de weke delen tussen de <em>femur</em> en de <em>tibia</em> te voorkomen",
                }
            ),
        ],
        image: "./images/muscles/m_articularis_genus.jpeg",
        description: `
Deze spier wordt soms als de vijfde kop van de [Link type="Muscle" targetId="m_quadriceps_femoris" label="m. quadriceps femoris"] gezien.
        `.trim(),
    }
);