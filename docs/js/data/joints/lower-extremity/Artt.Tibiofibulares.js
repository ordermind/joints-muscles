import Joint from "../../../data-types/Joint.js";

export default [
    new Joint(
        {
            id: "art_tibiofibularis_proximalis",
            regionId: "lower_extremity",
            label: "art. tibiofibularis proximalis",
            typeIds: ["junctura_synovialis", "art_simplex", "art_plana"],
            cpp: "maximale dorsaalflexie enkel",
            mlpp: "Knie halverwege flexie-extensie met 10° plantairflexie enkel",
            image: "./images/joints/art_tibiofibularis_proximalis.jpeg",
            description: `
Bewegingsmogelijkheden zijn beperkt tot een geringe translatie van de fibula naar proximaal bij dorsaalflexie van de voet.

Dit gewricht vormt samen met de [Link type="Joint" targetId="membrana_interossea_cruris" label="membrana interossea cruris"] en de [Link type="Joint" targetId="art_tibiofibularis_distalis" label="art. tibiofibularis distalis (syndesmosis tibiofibularis)"] een drietal verbindingen tussen fibula en tibia dat functioneel één geheel vormt.
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "membrana_interossea_cruris",
            regionId: "lower_extremity",
            label: "membrana interossea cruris",
            typeIds: ["junctura_fibrosa"],
            image: "./images/joints/membrana_interossea_cruris.jpeg",
            description: `
De membrana interossea cruris is een strak bindweefselvlies dat tussen de tibia en fibula is gespannen.

Bewegingsmogelijkheden zijn beperkt tot een geringe translatie tussen tibia en fibula.
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "art_tibiofibularis_distalis",
            regionId: "lower_extremity",
            label: "art. tibiofibularis distalis (syndesmosis tibiofibularis)",
            typeIds: ["junctura_fibrosa"],
            cpp: "maximale dorsaalflexie enkel",
            mlpp: "10° plantairflexie enkel",
            image: "./images/joints/art_tibiofibularis_distalis.jpeg",
            description: `
Een andere naam voor de art. tibiofibularis distalis is <em>syndesmosis tibiofibularis</em>. Soms wordt als onderdeel van de <em>syndesmosis tibiofibularis</em> ook de hele [Link type="Joint" targetId="membrana_interossea_cruris" label="membrana interossea cruris"] meegerekend.

Deze fibreuze verbinding bestaat uit:

- lig. tibiofibulare anterius (inferius)
- lig. tibiofibulare posterius (inferius)
- lig. tibiofibulare transversum (inferius)
- lig. interosseum tibiofibulare

<img src="./images/misc/syndesmosis_tibiofibularis_ligaments.webp" />

Bewegingsmogelijkheden zijn beperkt tot een geringe translatie tussen tibia en fibula.

Het gewricht vormt samen met de [Link type="Joint" targetId="art_talocruralis" label="art. talocruralis (bovenste spronggewricht)"] en [Link type="Joint" targetId="art_talotarsalis" label="art. talotarsalis (onderste spronggewricht)"] het [Link type="Joint" targetId="tarsus" label="enkelgewricht"].
            `.trim(),
        }
    ),
];