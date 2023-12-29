import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default [
    new Joint(
        {
            id: "art_carpometacarpalis_1",
            regionId: "upper_extremity",
            label: "art. carpometacarpalis I (art. carpometacarpalis pollicis, CMC I)",
            typeIds: ["art_simplex", "art_sellaris"],
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
                        id: "art_carpometacarpalis_1__opposition",
                        jointId: "art_carpometacarpalis_1",
                        label: "oppositie",
                        description: "combinatiebeweging van flexie en abductie en bijbehorende adjunct rotation",
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
De art. carpometacarpalis I wijkt fundamenteel af (qua bouw en bewegingsmogelijkheden) van de overige articulationes carpometacarpales. De homologe bewegingen van de vingers worden niet in de [Link type="Joint" targetId="artt_carpometacarpales" label="articulationes carpometacarpales uitgevoerd"] maar in de articulationes metacarpophalangeales.
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "artt_carpometacarpales",
            regionId: "upper_extremity",
            label: "artt. carpometacarpales II-V (CMC II-V)",
            typeIds: ["junctura_synovialis", "art_composita", "art_plana"],
            image: "./images/joints/artt_carpometacarpales.jpeg",
            description: `
De vier articulationes carpometacarpales gezamenlijk vormen weer een 'blok' ten opzichte van de [Link type="Joint" targetId="art.carpometacarpalis_1" label="articulatio carpometacarpalis (pollicis) I"]. Dit houdt verband met de grijpfunctie van de hand (oppositie
van de duim, pincetgreep).

Bewegingsmogelijkheden zijn beperkt tot een klein beetje translatie. De articulatio carpometacarpalis (CMC) V is van de vier articulationes carpometacarpales het meest beweeglijk.
            `.trim(),
        }
    ),
];