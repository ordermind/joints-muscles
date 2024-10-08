import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default [
    new Joint(
        {
            id: "art_cubiti",
            regionId: "upper_extremity",
            label: "art. cubiti (ellebooggewricht)",
            typeIds: ["junctura_synovialis", "art_composita", "art_trochoidea", "art_ginglymus"],
            cpp: "maximale extensie met maximale supinatie",
            mlpp: "70° flexie, 10-35° supinatie",
            movements: [
                new Movement(
                    {
                        id: "art_cubiti__flexion",
                        jointId: "art_cubiti",
                        label: "flexie",
                        rom: "130-150°",
                        endFeel: "interpositie weke delen",
                    }
                ),
                new Movement(
                    {
                        id: "art_cubiti__extension",
                        jointId: "art_cubiti",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "bot",
                    }
                ),
                new Movement(
                    {
                        id: "art_cubiti__pronation",
                        jointId: "art_cubiti",
                        label: "pronatie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_cubiti__supination",
                        jointId: "art_cubiti",
                        label: "supinatie",
                        rom: "90°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_cubiti.jpeg",
            description: `
Het ellebooggewricht bestaat uit drie gewrichten:
- [Link type="Joint" targetId="art_humeroradialis" label="art. humeroradialis"] (flexie, extensie, pronatie, supinatie)
- [Link type="Joint" targetId="art_humeroulnaris" label="art. humeroulnaris"] (flexie, extensie)
- [Link type="Joint" targetId="art_radioulnaris" label="art. radioulnaris"] (pronatie, supinatie)

<h2 class="display-2 fs-2">Ligamenten</h2>
<div class="row d-inline-flex">
    <div class="col">
        <img src="./images/misc/elbow_ligaments_medial.jpg" />
    </div>
    <div class="col">
        <img src="./images/misc/elbow_ligaments_lateral.jpg" />
    </div>
</div>
<div class="row d-inline-flex pt-2">
    <div class="col">
        <h3 class="display-3 fs-3">Mediaal</h3>
        <ul>
            <li>lig. collaterale mediale anterior (aMCL)</li>
            <li>lig. collaterale mediale posterior (pMCL)</li>
        </ul>
    </div>
    <div class="col">
        <h3 class="display-3 fs-3">Lateraal</h3>
        <ul>
            <li>lig. collaterale laterale (LCL), ook bekend als lig. collaterale ulnare of lig. collaterale ulnare laterale (LuCL)</li>
            <li>lig. collaterale radiale (RCL)</li>
            <li>lig. anulare radii (AL)</li>
        </ul>
    </div>
</div>
`,
        }
    ),
    new Joint(
        {
            id: "art_humeroradialis",
            regionId: "upper_extremity",
            label: "art. humeroradialis",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "90° flexie met lichte supinatie",
            mlpp: "Maximale extensie met maximale supinatie",
            movements: [
                new Movement(
                    {
                        id: "art_humeroradialis__flexion",
                        jointId: "art_humeroradialis",
                        label: "flexie",
                        rom: "130-150°",
                        endFeel: "interpositie weke delen",
                    }
                ),
                new Movement(
                    {
                        id: "art_humeroradialis__extension",
                        jointId: "art_humeroradialis",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "bot",
                    }
                ),
                new Movement(
                    {
                        id: "art_humeroradialis__pronation",
                        jointId: "art_humeroradialis",
                        label: "pronatie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_humeroradialis__supination",
                        jointId: "art_humeroradialis",
                        label: "supinatie",
                        rom: "90°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_humeroradialis.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_humeroulnaris",
            regionId: "upper_extremity",
            label: "art. humeroulnaris",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie met maximale supinatie",
            mlpp: "70° flexie met 10-35° supinatie",
            movements: [
                new Movement(
                    {
                        id: "art_humeroulnaris__flexion",
                        jointId: "art_humeroulnaris",
                        label: "flexie",
                        rom: "130-150°",
                        endFeel: "interpositie weke delen",
                    }
                ),
                new Movement(
                    {
                        id: "art_humeroulnaris__extension",
                        jointId: "art_humeroulnaris",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "bot",
                    }
                ),
            ],
            image: "./images/joints/art_humeroulnaris.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_radioulnaris",
            regionId: "upper_extremity",
            label: "art. radioulnaris",
            typeIds: ["junctura_synovialis", "art_duplex", "art_complexa", "art_trochoidea"],
            cpp: "lichte supinatie",
            mlpp: "10-35° supinatie",
            movements: [
                new Movement(
                    {
                        id: "art_radioulnaris__pronation",
                        jointId: "art_radioulnaris",
                        label: "pronatie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_radioulnaris__supination",
                        jointId: "art_radioulnaris",
                        label: "supinatie",
                        rom: "90°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_radioulnaris.jpeg",
            description: `
De art. radioulnaris is een duplexgewricht en bestaat uit twee subgewrichten die met elkaar samenwerken: [Link type="Joint" targetId="art_radioulnaris_proximalis" label="art. radioulnaris proximalis"] en [Link type="Joint" targetId="art_radioulnaris_distalis" label="art. radioulnaris distalis"].
            `,
        }
    ),
    new Joint(
        {
            id: "membrana_interossea_antebrachii",
            regionId: "upper_extremity",
            label: "membrana interossea antebrachii",
            typeIds: ["junctura_fibrosa"],
            image: "./images/joints/membrana_interossea_antebrachii.jpeg",
            description: `
De membrana interossea antebrachii is een bindweefselvlies tussen de radius en ulna.

Bewegingsmogelijkheden bevatten pronatie en supinatie (zie [Link type="Joint" targetId="art_radioulnaris" label="art. radioulnaris"]).

Het bindweefselvlies staat alleen strak gespannen in de middenstand tussen pronatie en supinatie. Het is ook van belang als aanhechtingsareaal voor spieren en speelt een rol bij de overdracht van krachten van de radius op de ulna (en omgekeerd).
            `.trim(),
        }
    ),
];