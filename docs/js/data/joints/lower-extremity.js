import Joint from "../../data-types/Joint.js";
import Movement from "../../data-types/Movement.js";

/**
 * Unless specified, all ROM values and end-feel come from Schünke et al. (2016) Anatomische atlas - Algemene anatomie en bewegingsapparaat.
 */
export default {
    art_coxae: new Joint(
        {
            id: "art_coxae",
            regionId: "lower_extremity",
            label: "art. coxae (heupgewricht)",
            typeIds: ["art_simplex", "art_sphaeroidea"],
            cpp: "Maximale extensie met lichte endorotatie en lichte abductie",
            mlpp: "30° anteflexie met 30° abductie en lichte exorotatie",
            movements: [
                new Movement(
                    {
                        id: "art_coxae__anteflexion",
                        jointId: "art_coxae",
                        label: "anteflexie",
                        rom: "120-140°",
                        endFeel: "capsulair / interpositie weke delen",
                    }
                ),
                new Movement(
                    {
                        id: "art_coxae__retroflexion",
                        jointId: "art_coxae",
                        label: "retroflexie",
                        rom: "20°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_coxae__abduction",
                        jointId: "art_coxae",
                        label: "abductie",
                        rom: "50-80°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_coxae__adduction",
                        jointId: "art_coxae",
                        label: "adductie",
                        rom: "20-30°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_coxae__exorotation",
                        jointId: "art_coxae",
                        label: "exorotatie",
                        rom: "30-50°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_coxae__endorotation",
                        jointId: "art_coxae",
                        label: "endorotatie",
                        rom: "40°",
                        endFeel: "hard capsulair",
                    }
                ),
            ],
        }
    ),
    art_genus: new Joint(
        {
            id: "art_genus",
            regionId: "lower_extremity",
            label: "art. genus (kniegewricht)",
            typeIds: ["art_complexa", "art_ginglymus", "art_trochoidea"],
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
        }
    ),
    art_talocruralis: new Joint(
        {
            id: "art_talocruralis",
            regionId: "lower_extremity",
            label: "art. talocruralis (bovenste spronggewricht)",
            typeIds: ["art_composita", "art_ginglymus"],
            cpp: "maximale dorsaalflexie",
            mlpp: "10° plantairflexie",
            movements: [
                new Movement(
                    {
                        id: "art_talocruralis__plantar_flexion",
                        jointId: "art_talocruralis",
                        label: "plantairflexie",
                        rom: "40-50°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_talocruralis__dorsal_flexion",
                        jointId: "art_talocruralis",
                        label: "dorsaalflexie",
                        rom: "20-30°",
                        endFeel: "capsulair / musculair",
                    }
                ),
            ],
        }
    ),
    art_talotarsalis: new Joint(
        {
            id: "art_talotarsalis",
            regionId: "lower_extremity",
            label: "art. talotarsalis (onderste spronggewricht)",
            typeIds: ["art_composita"],
            cpp: "maximale inversie",
            mlpp: "middenstand inversie",
            movements: [
                new Movement(
                    {
                        id: "art_talotarsalis__inversion",
                        jointId: "art_talotarsalis",
                        label: "inversie",
                        rom: "60°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_talotarsalis__eversion",
                        jointId: "art_talotarsalis",
                        label: "eversie",
                        rom: "30°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            description: `
Het onderste spronggewricht bestaat uit art. talocalcaneonavicularis + art.subtalaris.
N.B. de Latijnse naam <em>art. talotarsalis</em> komt niet vaak voor in de literatuur, maar ik vind het zelf logisch. In de literatuur wordt het o.a. "art. talocalcaneonavicularis in brede zin" genoemd. 
            `,
        }
    ),
};