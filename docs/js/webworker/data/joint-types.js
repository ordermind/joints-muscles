import JointType from "../../data-types/JointType.js";

export default {
    // Indeling naar de aard van verbinding
    junctura_ossea: new JointType(
        {
            id: "junctura_ossea",
            label: "junctura ossea",
            description: `
Bij deze verbinding zijn de botstukken direct aan elkaar samengegroeid. Voorbeeld: de verbindingen tussen de botten os ilium, os pubis en os ischii in het bekken. Geen beweging is mogelijk.
            `.trim(),
        }
    ),
    junctura_fibrosa: new JointType(
        {
            id: "junctura_fibrosa",
            label: "junctura fibrosa",
            description: `
Deze verbinding bestaat uit bindweefsel. Dit weefsel raakt beide botten direct en is weinig beweegbaar.

- Syndesmosis: Fibreuze bindweefsel tussen botten. Voorbeeld: [Link type="Joint" targetId="art_tibiofibularis_distalis", label="syndesmosis tibiofibularis"].
- Sutura: Heel onbeweegbare bindweefsel tussen botten. Voorbeeld: de verbindingen tussen de schedelen in het cranium.
            `.trim(),
        }
    ),
    junctura_cartilaginea: new JointType(
        {
            id: "junctura_cartilaginea",
            label: "junctura cartilaginea",
            description: `
Deze verbinding bestaat uit kraakbeen. Beweeglijk.

- Synchondrosis: Hyalien kraakbeen (heel trekvast en stevig, moeilijk vervormbaar). Voorbeeld: De verbindingen van de ribben.
- Symphysis: Vezelig kraakbeen. Voorbeeld: symphysis pubica.
            `.trim(),
        }
    ),
    junctura_synovialis: new JointType(
        {
            id: "junctura_synovialis",
            label: "junctura synovialis",
            description: `
“Echt gewricht”. Deze verbinding bestaat uit een gewrichtsholte met gewrichtsvloeistof.
            `.trim(),
        }
    ),

    // Indeling naar het aantal botten binnen het kapsel
    art_simplex: new JointType(
        {
            id: "art_simplex",
            label: "art. simplex",
            description: `
Enkelvoudig gewricht; twee botstukken komen samen. Voorbeeld: [Link type="Joint" targetId="art_coxae" label="art. coxae"]
            `.trim(),
        }
    ),
    art_duplex: new JointType(
        {
            id: "art_duplex",
            label: "art. duplex",
            description: `
Bicondylair gewricht; twee botstukken op meer dan één plaats met elkaar verbonden. Voorbeeld: radius en ulna zijn bij zowel elleboog als pols met elkaar verbonden. Als één van die verbindingen niet kan bewegen, werkt de ander ook niet goed dus daardoor worden ze samen een art. duplex.
            `.trim(),
        }
    ),
    art_composita: new JointType(
        {
            id: "art_composita",
            label: "art. composita",
            description: `
Samengesteld gewricht; meer dan twee botstukken komen samen. Voorbeeld: [Link type="Joint" targetId="art_cubiti" label="art. cubiti"]
            `.trim()
        }
    ),
    art_complexa: new JointType(
        {
            id: "art_complexa",
            label: "art. complexa",
            description: `
Gewricht waarin disci of menisci voorkomen. Voorbeeld: [Link type="Joint" targetId="art_genus" label="art. genus"]
            `.trim(),
        }
    ),

    // Indeling naar vorm
    art_cylindrica: new JointType(
        {
            id: "art_cylindrica",
            label: "art. cylindrica",
            description: `
Cilindervorm. Het ene gewrichtsvlak is convex en vormt de kop van het gewricht, het andere is concaaf en vormt de kom. Subtypen: [Link type="JointType" targetId="art_ginglymus" label="art. ginglymus"], [Link type="JointType" targetId="art_trochoidea" label="art. trochoidea"].
            `.trim(),
            image: "./images/joint-types/art_ginglymus.png",
        }
    ),
    art_ginglymus: new JointType(
        {
            id: "art_ginglymus",
            label: "art. ginglymus (scharniergewricht)",
            description: `
De cilindermantel staat loodrecht of nagenoeg loodrecht op de lengteassen van de beenderen. 1 vrijheidsgraad. Voorbeeld: de verbindingen tussen de vingerkootjes.
            `.trim(),
            image: "./images/joint-types/art_ginglymus.png",
        }
    ),
    art_trochoidea: new JointType(
        {
            id: "art_trochoidea",
            label: "art. trochoidea (draai- of rolgewricht)",
            description: `
De as van de cilindermantel valt samen met de lengteas van een van de botstukken. 1 vrijheidsgraad. Voorbeeld: [Link type="Joint" targetId="art_radioulnaris" label="art. radioulnaris proximalis"].
            `.trim(),
            image: "./images/joint-types/art_trochoidea.png",
        }
    ),
    art_sphaeroidea: new JointType(
        {
            id: "art_sphaeroidea",
            label: "art. sphaeroidea (kogelgewricht)",
            description: `
De gewrichtskop heeft de vorm van een bol en de kom is hieraan aangepast. 3 vrijheidsgraden. Voorbeeld: [Link type="Joint" targetId="art_coxae" label="art. coxae"].
            `.trim(),
            image: "./images/joint-types/art_sphaeroidea.png",
        }
    ),
    art_ellipsoidea: new JointType(
        {
            id: "art_ellipsoidea",
            label: "art. ellipsoidea (ellipsoïd gewricht)",
            description: `
De gewrichtsvlakken in twee loodrecht op elkaar staande richtingen zijn sterk gekromd. Bij de kop van het gewricht zijn de krommingen convex, bij de kom zijn zij concaaf. In theorie 1 vrijheidsgraad, maar in de praktijk 2 vrijheidsgraden maar dan alleen met geringe beweging. Voorbeeld: [Link type="Joint" targetId="art_radiocarpalis" label="art. radiocarpalis"] (pols).
            `.trim(),
            image: "./images/joint-types/art_ellipsoidea.png",
        }
    ),
    art_sellaris: new JointType(
        {
            id: "art_sellaris",
            label: "art. sellaris (zadelgewricht)",
            description: `
Beide boteinden functioneren als zowel kop als kom, en vertonen ze dus allebei een convexe en een concave kromming. 2 vrijheidsgraden. Voorbeeld: [Link type="Joint" targetId="art_sternoclavicularis" label="art. sternoclavicularis"].
            `.trim(),
            image: "./images/joint-types/art_sellaris.png",
        }
    ),
    art_plana: new JointType(
        {
            id: "art_plana",
            label: "art. plana (vlak gewricht)",
            description: `
De gewrichtsvlakken zijn nagenoeg niet gekromd. 3 vrijheidsgraden – twee assen waarom ze een beetje kunnen schuiven, en één as waar ze om kunnen roteren. Voorbeeld: in de halswervelkolom tussen de gewrichtsuitsteeksels van twee opeenvolgende wervels.
            `.trim(),
            image: "./images/joint-types/art_plana.png",
        }
    )
}