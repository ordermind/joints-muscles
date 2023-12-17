import Muscle from "../../data-types/Muscle.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_transversus_abdominis",
        label: "m. transversus abdominis",
        origos: [
            "lig. inguinale (laterale 2/3 deel)",
            "crista ilica (binnenrand)",
            "ribkraakbeen van costae 7-12",
            "fascia thoracolumbalis",
            "diafragma (verweven)",
        ],
        insertions: [
            "linea alba",
            "os pubis",
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_transversus_abdominis__pressure",
                    muscleId: "m_transversus_abdominis",
                    functionDescription: "verhoogt intra-abdominale druk (bij gelijktijdige contractie met het diafragma)",
                }
            ),
        ],
        image: "./images/muscles/m_transversus_abdominis.jpeg",
        description: `
De spier bekleedt de ventrolaterale (binnen)wand van het cavum abdominis en zorgt, net als de
overige buikspieren, bij contractie voor een verhoging van de intra-abdominale druk (in samenwerking
met het diafragma). Deze spier eindigt in een aponeurose die de <strong>rectusschede</strong> vormt.
        `,
    }
);