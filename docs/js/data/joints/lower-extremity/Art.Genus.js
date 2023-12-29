import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default [
    new Joint(
        {
            id: "art_genus",
            regionId: "lower_extremity",
            label: "art. genus (kniegewricht)",
            typeIds: ["junctura_synovialis", "art_complexa", "art_ginglymus", "art_trochoidea"],
            cpp: "maximale extensie",
            mlpp: "30° flexie",
            movements: [
                new Movement(
                    {
                        id: "art_genus__flexion",
                        jointId: "art_genus",
                        label: "flexie",
                        rom: "120-150°",
                        endFeel: "interpositie weke delen",
                    }
                ),
                new Movement(
                    {
                        id: "art_genus__extension",
                        jointId: "art_genus",
                        label: "extensie",
                        rom: "5-10°",
                        endFeel: "capsulair springend",
                    }
                ),
                new Movement(
                    {
                        id: "art_genus__exorotation",
                        jointId: "art_genus",
                        label: "exorotatie",
                        rom: "30-40°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_genus__endorotation",
                        jointId: "art_genus",
                        label: "endorotatie",
                        rom: "10°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_genus.jpeg",
            description: `
Het kniegewricht bestaat uit [Link type="Joint" targetId="art_femorotibialis" label="art. femorotibialis"] en [Link type="Joint" targetId="art_femoropatellaris" label="art. femoropatellaris"].

Twee menisci (een laterale en een mediale) completeren de gewrichtskom en gewrichtskop en vergroten de congruentie tussen tibiaplateau en femurcondylen. Ze bestaan uit fibreus kraakbeen, zijn verschuifbaar over het tibiaplateau en zitten met cornua vast aan het tibiaplateau.

De volgende bursae liggen rond het gewricht:

- bursa suprapatellaris
- bursa subcutanea prepatellaris
- bursa subcutanea infrapatellaris

Van deze bursae hebben de bursa suprapatellaris en bursa subpoplitea altijd een verbinding met het cavum articulare. Bij de bursa subcutanea infrapatellaris kan dat voorkomen. Tenslotte is er het vetlichaam van Hoffa (of: corpus adiposum infrapatellare).

De endorotatie en exorotatie van articulatio genus is beperkt. De grootste bewegingsuitslag is te behalen bij circa 90° flexie.
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "art_femorotibialis",
            regionId: "lower_extremity",
            label: "art. femorotibialis",
            typeIds: ["junctura_synovialis", "art_complexa", "art_ginglymus", "art_trochoidea"],
            cpp: "maximale extensie",
            mlpp: "30° flexie",
            image: "./images/joints/art_femorotibialis.jpeg",
            description: `
Het geheel van de articulatio femorotibialis is te beschouwen als een articulatio condylaris. Elke condyl van het femur articuleert met de bovenzijde van een meniscus (articulatio meniscofemoralis) en elke meniscus articuleert met de onderzijde met een tibiacondyl / tibiplateau (articulatio meniscotibialis).
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "art_femoropatellaris",
            regionId: "lower_extremity",
            label: "art. femoropatellaris",
            typeIds: ["junctura_synovialis"],
            cpp: "90° flexie",
            mlpp: "maximale extensie met maximale exorotatie tibia",
            image: "./images/joints/art_femoropatellaris.jpeg",
            description: `
De articulatio femoro-patellaris vormt een onderdeel van de articulatio genus. De patella is te beschouwen als een sesambeen in de pees van de m. quadriceps.
            `.trim(),
        }
    )
];