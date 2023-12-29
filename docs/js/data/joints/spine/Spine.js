import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

/**
 * Unless specified, all ROM values and end-feel come from Schünke et al. (2016)
 * Anatomische atlas - Algemene anatomie en bewegingsapparaat.
 */
export default [
    new Joint(
        {
            id: "columna_vertebralis",
            regionId: "spine",
            label: "columna vertebralis (wervelkolom)",
            cpp: "maximale extensie",
            mlpp: "neutraal tot lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "columna_vertebralis__flexion",
                        jointId: "columna_vertebralis",
                        label: "flexie",
                        rom: "150°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "columna_vertebralis__extension",
                        jointId: "columna_vertebralis",
                        label: "extensie",
                        rom: "100°",
                        endFeel: "bot",
                    }
                ),
                new Movement(
                    {
                        id: "columna_vertebralis__lateroflexion",
                        jointId: "columna_vertebralis",
                        label: "lateroflexie",
                        rom: "75°",
                        endFeel: "capsulair / musculair ([Link type=\"Joint\" targetId=\"columna_vertebralis_cervicalis\" label=\"cervicaal\"])",
                    }
                ),
                new Movement(
                    {
                        id: "columna_vertebralis__rotation",
                        jointId: "columna_vertebralis",
                        label: "rotatie",
                        rom: "90°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            description: `
De waarden voor CPP en MLPP komen uit Hogezand (2005) Inleiding in de OrthoManuele Geneeskunde.
            `,
            image: "./images/joints/columna_vertebralis.png",
        }
    ),
    new Joint(
        {
            id: "juncturae_craniovertebrales",
            regionId: "spine",
            label: "juncturae craniovertebrales (hoofdgewrichten, art. atlantooccipitalis / artt. atlantoaxiales)",
            typeIds: ["junctura_synovialis", "art_ellipsoidea", "art_trochoidea", "art_plana"],
            movements: [
                new Movement(
                    {
                        id: "juncturae_craniovertebrales__flexion",
                        jointId: "juncturae_craniovertebrales",
                        label: "flexie",
                        rom: "20°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "juncturae_craniovertebrales__extension",
                        jointId: "juncturae_craniovertebrales",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "bot",
                    }
                ),
                new Movement(
                    {
                        id: "juncturae_craniovertebrales__lateroflexion",
                        jointId: "juncturae_craniovertebrales",
                        label: "lateroflexie",
                        rom: "5°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "juncturae_craniovertebrales__rotation",
                        jointId: "juncturae_craniovertebrales",
                        label: "rotatie",
                        rom: "35°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/juncturae_craniovertebrales.jpeg",
        },
    ),
    new Joint(
        {
            id: "columna_vertebralis_cervicalis",
            regionId: "spine",
            label: "columna vertebralis, pars cervicalis (CWK)",
            movements: [
                new Movement(
                    {
                        id: "columna_vertebralis_cervicalis__flexion",
                        jointId: "columna_vertebralis_cervicalis",
                        label: "flexie",
                        rom: "65°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "columna_vertebralis_cervicalis__extension",
                        jointId: "columna_vertebralis_cervicalis",
                        label: "extensie",
                        rom: "40°",
                        endFeel: "bot",
                    }
                ),
                new Movement(
                    {
                        id: "columna_vertebralis_cervicalis__lateroflexion",
                        jointId: "columna_vertebralis_cervicalis",
                        label: "lateroflexie",
                        rom: "35°",
                        endFeel: "musculair",
                    }
                ),
                new Movement(
                    {
                        id: "columna_vertebralis_cervicalis__rotation",
                        jointId: "columna_vertebralis_cervicalis",
                        label: "rotatie",
                        rom: "50°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/columna_vertebralis_cervicalis.png",
        }
    ),
    new Joint(
        {
            id: "columna_vertebralis_thoracalis",
            regionId: "spine",
            label: "columna vertebralis, pars thoracalis (TWK)",
            movements: [
                new Movement(
                    {
                        id: "columna_vertebralis_thoracalis__flexion",
                        jointId: "columna_vertebralis_thoracalis",
                        label: "flexie",
                        rom: "35°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "columna_vertebralis_thoracalis__extension",
                        jointId: "columna_vertebralis_thoracalis",
                        label: "extensie",
                        rom: "25°",
                        endFeel: "bot",
                    }
                ),
                new Movement(
                    {
                        id: "columna_vertebralis_thoracalis__lateroflexion",
                        jointId: "columna_vertebralis_thoracalis",
                        label: "lateroflexie",
                        rom: "20°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "columna_vertebralis_thoracalis__rotation",
                        jointId: "columna_vertebralis_thoracalis",
                        label: "rotatie",
                        rom: "35°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/columna_vertebralis_thoracalis.png",
        }
    ),
    new Joint(
        {
            id: "columna_vertebralis_lumbalis",
            regionId: "spine",
            label: "columna vertebralis, pars lumbalis (LWK)",
            movements: [
                new Movement(
                    {
                        id: "columna_vertebralis_lumbalis__flexion",
                        jointId: "columna_vertebralis_lumbalis",
                        label: "flexie",
                        rom: "50°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "columna_vertebralis_lumbalis__extension",
                        jointId: "columna_vertebralis_lumbalis",
                        label: "extensie",
                        rom: "35°",
                        endFeel: "bot",
                    }
                ),
                new Movement(
                    {
                        id: "columna_vertebralis_lumbalis__lateroflexion",
                        jointId: "columna_vertebralis_lumbalis",
                        label: "lateroflexie",
                        rom: "20°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "columna_vertebralis_lumbalis__rotation",
                        jointId: "columna_vertebralis_lumbalis",
                        label: "rotatie",
                        rom: "5°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/columna_vertebralis_lumbalis.png",
        }
    ),
];