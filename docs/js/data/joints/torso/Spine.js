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
            regionId: "torso",
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
            description: [
                "",
                `
De waarden voor CPP en MLPP komen uit Hogezand (2005) Inleiding in de OrthoManuele Geneeskunde.

In de [Link type="Joint" targetId="columna_vertebralis_cervicalis" label="cervicale"] en [Link type="Joint" targetId="columna_vertebralis_lumbalis" label="lumbale"] wervelkolom is de beweeglijkheid groter dan in de [Link type="Joint" targetId="columna_vertebralis_thoracalis" label="thoracale"] wervelkolom. De beweeglijkheid van de wervelkolom wordt niet alleen door de [Link type="Joint" targetId="artt_zygapophysiales" label="facetgewrichten"] bepaald, maar ook door de [Link type="Joint" targetId="discus_intervertebralis" label="discus (symphysis) intervertebralis"], de ligamenten van de wervelkolom en door de aan- / afwezigheid van ribben.
                `.trim(),
            ],
            image: "./images/joints/columna_vertebralis.png",
            hideInQuiz: true,
        }
    ),
    new Joint(
        {
            id: "juncturae_craniovertebrales",
            regionId: "torso",
            label: "juncturae craniovertebrales (hoofdgewrichten)",
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
            description: `
Deze gewrichtsgroep bestaat uit [Link type="Joint" targetId="art_atlantooccipitalis" label="art. atlantooccipitalis"] en [Link type="Joint" targetId="artt_atlantoaxiales" label="artt. atlantoaxiales"].
            `.trim(),
        },
    ),
    new Joint(
        {
            id: "columna_vertebralis_cervicalis",
            regionId: "torso",
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
            description: `
In de cervicale wervelkolom zijn de zogenaamde uncovertebrale gewrichten (tussen twee opeenvolgende corpora) aanwezig.
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "columna_vertebralis_thoracalis",
            regionId: "torso",
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
            regionId: "torso",
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
    new Joint(
        {
            id: "artt_intervertebrales",
            regionId: "torso",
            label: "artt. intervertebrales",
            image: "./images/joints/artt_intervertebrales.jpeg",
            description: [
                `
De tussenwervelgewrichten verbinden direct aangrenzende wervels van de wervelkolom. Elk tussenwervelgewricht is een complex van drie afzonderlijke gewrichten: een tussenwervelschijfgewricht ([Link type="Joint" targetId="discus_intervertebralis" label="discus intervertebralis"]) en twee facetgewrichten ([Link type="Joint" targetId="artt_zygapophysiales" label="artt. zygapophysiales"]).
                `.trim(),
            ],
        }
    ),
    new Joint(
        {
            id: "discus_intervertebralis",
            regionId: "torso",
            label: "discus intervertebralis",
            typeIds: ["junctura_cartilaginea", "junctura_fibrosa"],
            image: "./images/joints/discus_intervertebralis.jpeg",
            description: [
                `
Ook bekend als <em>symphysis intervertebralis</em>.
                `.trim(),
                `
Als bindweefselige kraakbeenverbinding kan de symphysis intervertebralis weerstand bieden aan drukkrachten, aan trekkrachten en schuifkrachten.

<img src="./images/misc/discus_intervertebralis_parts.svg" />

De discus intervertebralis wordt gevormd door de volgende onderdelen:

<h2 class="display-2 fs-3">Nucleus pulposus</h2>

De centrale nucleus pulposus bevat <strong>collageenvezels</strong> die willekeurig georganiseerd zijn, en <strong>elastinevezels</strong> die radiaal zijn gerangschikt. Deze vezels zijn ingebed in een sterk gehydrateerd gel dat aggrecan bevat.

<h2 class="display-2 fs-3">Annulus fibrosus</h2>

De annulus bestaat uit een reeks van 15-25 concentrische ringen, of <em>lamellae</em>, waarbij de <strong>collageenvezels</strong> parallel liggen binnen elke lamel. De vezels zijn georiënteerd op ongeveer 60 graden ten opzichte van de verticale as, afwisselend naar links en rechts ervan in aangrenzende lamellen. <strong>Elastinevezels</strong> liggen tussen de lamellen en helpen mogelijk de schijf terug te keren naar zijn oorspronkelijke ordening na buiging (flexie of extensie).

<strong>Cellen</strong> van de annulus zijn langwerpig, dun en uitgelijnd parallel aan de collageenvezels. Naar het binnenste van de annulus toe zijn de cellen ovaal. De annulus is relatief stijf, wat meer kracht aan de schijf geeft en bestand is tegen drukkracht.

<h2 class="display-2 fs-3">Sluitplaten van hyalien kraakbeen</h2>

De eindplaat is het derde morfologisch onderscheidende deel van de tussenwervelschijf. Het is een dun horizontaal laagje, meestal minder dan 1 mm dik. Deze structuur vormt de interface tussen de schijf en het wervellichaam. <strong>Collageenvezels</strong> binnenin lopen horizontaal en parallel aan de wervellichamen en worden continu met de schijf.
                `.trim(),
            ],
        }
    ),
    new Joint(
        {
            id: "artt_zygapophysiales",
            regionId: "torso",
            label: "artt. zygapophysiales (facetgewrichten)",
            typeIds: ["junctura_synovialis", "art_duplex", "art_plana"],
            movements: [
                new Movement(
                    {
                        id: "artt_zygapophysiales__flexion",
                        jointId: "artt_zygapophysiales",
                        label: "flexie",
                    }
                ),
                new Movement(
                    {
                        id: "artt_zygapophysiales__extension",
                        jointId: "artt_zygapophysiales",
                        label: "extensie",
                    }
                ),
                new Movement(
                    {
                        id: "artt_zygapophysiales__lateroflexion",
                        jointId: "artt_zygapophysiales",
                        label: "lateroflexie",
                    }
                ),
                new Movement(
                    {
                        id: "artt_zygapophysiales__rotation",
                        jointId: "artt_zygapophysiales",
                        label: "rotatie",
                    }
                ),
            ],
            image: "./images/joints/artt_zygapophysiales.jpeg",
            description: `
De stand van de gewrichtsvlakken ter hoogte van L5 - S1 is weer meer in het frontale vlak. Dit verhindert ondermeer het 'afglijden' van vertebra L5 van het sacrum.

Benadering van de stand van de gewrichtsvlakken met de relatieve bewegingsuitslagen:
<table class="table d-inline-block">
    <tr>
        <th></th>
        <th>Stand gewrichtsvlakken</th>
        <th>Flexie / extensie</th>
        <th>Lateroflexie</th>
        <th>Rotatie</th>
    <tr>
    <tr>
        <th>Cervicaal</th>
        <td>Vlak tussen transversale en frontale orientatie</td>
        <td>ruim</td>
        <td>ruim</td>
        <td>ruim</td>
    </tr>
    <tr>
        <th>Thoracaal</th>
        <td>frontaal</td>
        <td>gering</td>
        <td>gering</td>
        <td>gering</td>
    </tr>
    <tr>
        <th>Lumbaal</th>
        <td>sagittaal</td>
        <td>ruim</td>
        <td>redelijk</td>
        <td>gering</td>
    </tr>
</table>
            `.trim(),
        }
    ),
];