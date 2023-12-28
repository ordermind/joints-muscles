import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default [
    new Joint(
        {
            id: "art_radiocarpalis",
            regionId: "upper_extremity",
            label: "art. radiocarpalis (polsgewricht)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ellipsoidea"],
            cpp: "maximale dorsaalflexie met maximale radiaaldeviatie",
            mlpp: "lichte palmairflexie met lichte ulnairdeviatie",
            movements: [
                new Movement(
                    {
                        id: "art_radiocarpalis__palmar_flexion",
                        jointId: "art_radiocarpalis",
                        label: "palmairflexie",
                        rom: "60-80°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_radiocarpalis__dorsal_flexion",
                        jointId: "art_radiocarpalis",
                        label: "dorsaalflexie",
                        rom: "40-60°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_radiocarpalis__radial_deviation",
                        jointId: "art_radiocarpalis",
                        label: "radiaaldeviatie",
                        rom: "20°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_radiocarpalis__ulnar_deviation",
                        jointId: "art_radiocarpalis",
                        label: "ulnairdeviatie",
                        rom: "30-40°",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_mediocarpalis",
            regionId: "upper_extremity",
            label: "art. mediocarpalis",
            typeIds: ["junctura_synovialis", "art_composita", "art_plana"],
            cpp: "maximale dorsaalflexie",
            mlpp: "lichte palmairflexie",
            description: `
Het gewricht vormt samen met de articulatio radiocarpalis het polsgewricht en beweegt mee bij de bewegingen van [Link type="Joint" targetId="art_radiocarpalis" label="art. radiocarpalis"].

De gewrichtsspleet is S-vormig, waardoor de bepaling van wat kop is en wat kom nogal arbitrair is.

De articulatio mediocarpalis is te beschouwen als een bijzondere verzameling van [Link type="Joint" targetId="artt_intercarpales" label="articulationes intercarpales"].
            `.trim(),
        }
    ),
]