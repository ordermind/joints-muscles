import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default [
    new Joint(
        {
            id: "tarsus",
            regionId: "lower_extremity",
            label: "tarsus (enkelgewricht)",
            typeIds: ["junctura_synovialis", "art_composita", "art_ginglymus", "junctura_fibrosa"],
            movements: [
                new Movement(
                    {
                        id: "tarsus__plantar_flexion",
                        jointId: "tarsus",
                        label: "plantairflexie",
                        rom: "40-50°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "tarsus__dorsal_flexion",
                        jointId: "tarsus",
                        label: "dorsaalflexie",
                        rom: "20-30°",
                        endFeel: "capsulair / musculair",
                    }
                ),
                new Movement(
                    {
                        id: "tarsus__inversion",
                        jointId: "tarsus",
                        label: "inversie",
                        rom: "60°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "tarsus__eversion",
                        jointId: "tarsus",
                        label: "eversie",
                        rom: "30°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/tarsus.jpeg",
            description: `
Het enkelgewricht bestaat uit drie gewrichten:
- [Link type="Joint" targetId="art_talocruralis" label="art. talocruralis"] (plantairflexie, dorsaalflexie)
- [Link type="Joint" targetId="art_talotarsalis" label="art. talotarsalis"] (inversie, eversie)
- [Link type="Joint" targetId="art_tibiofibularis_distalis" label="art. tibiofibularis distalis"]

<h2 class="display-2 fs-2">Ligamenten</h2>
<div class="row d-inline-flex">
    <div class="col-6">
        <img src="./images/misc/ankle_ligaments_medial.jpg" />
    </div>
    <div class="col-6">
        <img src="./images/misc/ankle_ligaments_lateral.jpg" />
    </div>
    <div class="col-6">
        <h3 class="display-3 fs-3">Mediaal</h3>
        <ul>
            <li>
                lig. deltoideum
                <ul>
                    <li>pars tibiotalaris anterior</li>
                    <li>pars tibionavicularis</li>
                    <li>pars tibiocalcanea</li>
                    <li>pars tibiotalaris posterior</li>
                </ul>
            </li>
            <li>lig. calcaneonaviculare plantare</li>
        </ul>
    </div>
    <div class="col-6">
        <h3 class="display-3 fs-3">Lateraal</h3>
        <ul>
            <li>lig. talofibulare anterius</li>
            <li>lig. talofibulare posterius</li>
            <li>lig. calcaneofibulare</li>
        </ul>
    </div>
</div>
<div class="row d-inline-flex pt-2">

</div>
<h3 class="display-3 fs-3">Syndesmosis (zie [Link type="Joint" targetId="art_tibiofibularis_distalis" label="art. tibiofibularis distalis"])</h3>
<ul>
    <li>lig. tibiofibulare anterius (inferius)</li>
    <li>lig. tibiofibulare posterius (inferius)</li>
    <li>lig. tibiofibulare transversum (inferius)</li>
    <li>lig. interosseum tibiofibulare</li>
</ul>
            `,
        }
    ),
    new Joint(
        {
            id: "art_talocruralis",
            regionId: "lower_extremity",
            label: "art. talocruralis (bovenste spronggewricht)",
            typeIds: ["junctura_synovialis", "art_composita", "art_ginglymus"],
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
            image: "./images/joints/art_talocruralis.jpeg",
            description: `
    Het gewricht wordt vaak het bovenste spronggewricht genoemd en vormt samen met de [Link type="Joint" targetId="art_talotarsalis" label="art. talotarsalis (onderste spronggewricht)"] en [Link type="Joint" targetId="art_tibiofibularis_distalis" label="art. tibiofibularis distalis"] het [Link type="Joint" targetId="tarsus" label="enkelgewricht"].
            `,
        }
    ),
    new Joint(
        {
            id: "art_talotarsalis",
            regionId: "lower_extremity",
            label: "art. talotarsalis (onderste spronggewricht)",
            typeIds: ["junctura_synovialis", "art_composita", "art_ginglymus"],
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
            image: "./images/joints/art_talotarsalis.jpeg",
            description: `
Het onderste spronggewricht bestaat uit [Link type="Joint" targetId="art_talocalcaneonavicularis" label="art. talocalcaneonavicularis"] en [Link type="Joint" targetId="art_subtalaris" label="art.subtalaris"].

Het gewricht vormt samen met de [Link type="Joint" targetId="art_talocruralis" label="art. talocruralis (bovenste spronggewricht)"] en [Link type="Joint" targetId="art_tibiofibularis_distalis" label="art. tibiofibularis distalis"] het [Link type="Joint" targetId="tarsus" label="enkelgewricht"].

N.B. de Latijnse naam <em>art. talotarsalis</em> komt niet vaak voor in de literatuur, maar ik vind het zelf de meest logische naam. In de literatuur wordt het o.a. "art. talocalcaneonavicularis in brede zin" genoemd.

De inversiebeweging is theoretisch te ontleden in de deelbewegingen: plantairflexie, adductie en supinatie (heffen van de mediale voetrand); de eversiebeweging is te ontleden in de deelbewegingen: dorsaalflexie, abductie en pronatie (heffen van de laterale voetrand).
            `,
        }
    ),
    new Joint(
        {
            id: "art_talocalcaneonavicularis",
            regionId: "lower_extremity",
            label: "art. talocalcaneonavicularis (in engere zin)",
            typeIds: ["junctura_synovialis", "art_composita"],
            image: "./images/joints/art_talocalcaneonavicularis.jpeg",
            description: `
Dit gewricht is onderdeel van het [Link type="Joint" targetId="art_talotarsalis" label="onderste spronggewricht"].
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "art_subtalaris",
            regionId: "lower_extremity",
            label: "art. subtalaris",
            typeIds: ["junctura_synovialis", "art_simplex"],
            image: "./images/joints/art_subtalaris.jpeg",
            description: `
Dit gewricht is onderdeel van het [Link type="Joint" targetId="art_talotarsalis" label="onderste spronggewricht"].
            `.trim(),
        }
    ),
];