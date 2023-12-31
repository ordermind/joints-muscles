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

Dit gewricht vormt samen met de [Link type="Joint" targetId="membrana_interossea_cruris" label="membrana interossea cruris"] en de [Link type="Joint" targetId="art_tibiofibularis_distalis" label="art. tibiofibularis distalis"] een drietal verbindingen tussen fibula en tibia dat functioneel één geheel vormt.
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
De membrana interossea cruris is een strak bindweefselvlies dat tussen de tibia en fibula is gespannen. Het vormt samen met [Link type="Joint" targetId="art_tibiofibularis_distalis" label="art. tibiofibularis distalis"] de <em>syndesmosis tibiofibularis</em>.

Bewegingsmogelijkheden zijn beperkt tot een geringe translatie tussen tibia en fibula.
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "art_tibiofibularis_distalis",
            regionId: "lower_extremity",
            label: "art. tibiofibularis distalis",
            typeIds: ["junctura_fibrosa"],
            cpp: "maximale dorsaalflexie enkel",
            mlpp: "10° plantairflexie enkel",
            image: "./images/joints/art_tibiofibularis_distalis.jpeg",
            description: `
Art. tibiofibularis distalis vormt samen met de [Link type="Joint" targetId="membrana_interossea_cruris" label="membrana interossea cruris"] de <em>syndesmosis tibiofibularis</em>.

Bewegingsmogelijkheden zijn beperkt tot een geringe translatie tussen tibia en fibula.

Soms breidt de gewrichtsspleet van het bovenste spronggewricht zich uit tussen tibia en fibula; de verbinding wordt dan ook wel articulatio tibio-fibularis distalis genoemd. Tibia en fibula worden ter plaatse (zoals gebruikelijk bij een bandverbinding) door ligamenten bij elkaar gehouden.
            `.trim(),
        }
    ),
];