import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default [
    new Joint(
        {
            id: "art_carpometacarpalis_1",
            regionId: "upper_extremity",
            label: "art. carpometacarpalis I (art. carpometacarpalis pollicis, CMC I)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sellaris"],
            cpp: "maximale oppositie",
            mlpp: "lichte flexie met lichte abductie",
            movements: [
                new Movement(
                    {
                        id: "art_carpometacarpalis_1__flexion",
                        jointId: "art_carpometacarpalis_1",
                        label: "flexie",
                        rom: "35°",
                        endFeel: "hard capsulair",
                        description: "ROM waarde komt uit Lohman (2008) Vorm en beweging",
                    }
                ),
                new Movement(
                    {
                        id: "art_carpometacarpalis_1__extension",
                        jointId: "art_carpometacarpalis_1",
                        label: "extensie",
                        rom: "15°",
                        endFeel: "capsulair",
                        description: "ROM waarde komt uit Lohman (2008) Vorm en beweging",
                    }
                ),
                new Movement(
                    {
                        id: "art_carpometacarpalis_1__abduction",
                        jointId: "art_carpometacarpalis_1",
                        label: "abductie",
                        rom: "15°",
                        endFeel: "capsulair",
                        description: "ROM waarde komt uit Lohman (2008) Vorm en beweging",
                    }
                ),
                new Movement(
                    {
                        id: "art_carpometacarpalis_1__adduction",
                        jointId: "art_carpometacarpalis_1",
                        label: "adductie",
                        rom: "25-30°",
                        endFeel: "capsulair",
                        description: "ROM waarde komt uit Lohman (2008) Vorm en beweging",
                    }
                ),
                new Movement(
                    {
                        id: "art_carpometacarpalis_1__circumduction",
                        jointId: "art_carpometacarpalis_1",
                        label: "circumductie",
                        description: "bij de circumductie voert de duim een ronddraaiende beweging uit ten opzichte van de handwortel",
                    }
                ),
                new Movement(
                    {
                        id: "art_carpometacarpalis_1__opposition",
                        jointId: "art_carpometacarpalis_1",
                        label: "oppositie",
                        description: "combinatiebeweging van flexie en abductie en bijbehorende rotatie",
                    }
                ),
                new Movement(
                    {
                        id: "art_carpometacarpalis_1__reposition",
                        jointId: "art_carpometacarpalis_1",
                        label: "repositie",
                        description: "combinatiebeweging van extensie en adductie vanuit oppositiestand met bijbehorende rotatie",
                    }
                ),
            ],
            image: "./images/joints/art_carpometacarpalis_1.jpeg",
            description: `
De art. carpometacarpalis I wijkt fundamenteel af (qua bouw en bewegingsmogelijkheden) van de overige articulationes carpometacarpales. De homologe bewegingen van de vingers worden niet in de [Link type="Joint" targetId="artt_carpometacarpales" label="artt. carpometacarpales uitgevoerd"] maar in de [Link type="Joint" targetId="artt_metacarpophalangeales" label="artt. metacarpophalangeales"].

Hierbij een uitleg van de betekenis van de verschillende bewegingen van de duim:
<img src="./images/misc/thumb_movements.jpg" />

<em>Oppositie</em> en <em>repositie</em> zijn combinatiebewegingen. Bij <em>oppositie</em> wordt het topje van de duim samengebracht met het topje van een andere vinger van dezelfde hand. De tegengestelde beweging wordt <em>repositie</em> genoemd. Meestal wordt <em>oppositie</em> gezien als een combinatie van <strong>flexie</strong>, <strong>abductie</strong> en bijbehorende rotatie, terwijl <em>repositie</em> en combinatie is van <strong>extensie</strong>, <strong>adductie</strong> en bijbehorende rotatie.
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "artt_carpometacarpales_2_5",
            regionId: "upper_extremity",
            label: "artt. carpometacarpales II&nbsp;-&nbsp;V (CMC II&nbsp;-&nbsp;V)",
            typeIds: ["junctura_synovialis", "art_plana"],
            image: "./images/joints/artt_carpometacarpales_2_5.jpeg",
            description: `
De vier articulationes carpometacarpales gezamenlijk vormen weer een 'blok' ten opzichte van de [Link type="Joint" targetId="art.carpometacarpalis_1" label="articulatio carpometacarpalis (pollicis) I"]. Dit houdt verband met de grijpfunctie van de hand (oppositie
van de duim, pincetgreep).

Bewegingsmogelijkheden zijn beperkt tot een klein beetje translatie. De articulatio carpometacarpalis (CMC) V is van de vier articulationes carpometacarpales het meest beweeglijk.
            `.trim(),
        }
    ),
];