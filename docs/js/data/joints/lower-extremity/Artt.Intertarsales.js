import Joint from "../../../data-types/Joint.js";

export default [
    new Joint(
        {
            id: "art_tarsi_transversa",
            regionId: "lower_extremity",
            label: "art. tarsi transversa (gewrichtslijn van Chopart)",
            cpp: "supinatie subtalair gewricht",
            mlpp: "pronatie subtalair gewricht of middenpositie enkel-voet",
            description: `
Vanuit de klinische praktijk van de voetamputaties is de notitie gegroeid dat ín de voetwortel (tarsus) een amputatie- of gewrichtslijn kan worden onderscheiden die samenvalt met de (gecombineerde) gewrichtsspleet van:

- [Link type="Joint" targetId="art_talonavicularis" label="articulatio talonavicularis"]
- [Link type="Joint" targetId="art_calcaneocuboidea" label="articulatio calcaneocuboidea"]
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "art_talonavicularis",
            regionId: "lower_extremity",
            label: "art. talonavicularis",
            typeIds: ["junctura_synovialis", "art_simplex", "art_plana"],
            cpp: "supinatie subtalair gewricht",
            mlpp: "pronatie subtalair gewricht of middenpositie enkel-voet",
            description: `
Dit gewricht valt onder de gewrichten tussen de ossa tarsi onderling (artt. intertarsales).

Dit gewricht is onderdeel van [Link type="Joint" targetId="art_talocalcaneonavicularis" label="art. talocalcaneonavicularis"] en daardoor ook het [Link type="Joint" targetId="art_talotarsalis" label="onderste spronggewricht"]. Het is ook onderdeel van het [Link type="Joint" targetId="art_tarsi_transversa" label="gewricht van Chopart"].
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "art_calcaneocuboidea",
            regionId: "lower_extremity",
            label: "art. calcaneocuboidea",
            typeIds: ["junctura_synovialis", "art_simplex", "art_plana"],
            cpp: "supinatie subtalair gewricht",
            mlpp: "pronatie subtalair gewricht of middenpositie enkel-voet",
            description: `
Dit gewricht valt onder de gewrichten tussen de ossa tarsi onderling (artt. intertarsales).

Dit gewricht is onderdeel van het [Link type="Joint" targetId="art_tarsi_transversa" label="gewricht van Chopart"].
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "art_cuneonavicularis",
            regionId: "lower_extremity",
            label: "art. cuneonavicularis",
            typeIds: ["junctura_synovialis", "art_simplex", "art_plana"],
            cpp: "supinatie subtalair gewricht",
            mlpp: "pronatie subtalair gewricht of middenpositie enkel-voet",
            description: `
Dit gewricht valt onder de gewrichten tussen de ossa tarsi onderling (artt. intertarsales).
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "art_cuneocuboidea",
            regionId: "lower_extremity",
            label: "art. cuneocuboidea",
            typeIds: ["junctura_synovialis", "art_simplex", "art_plana"],
            cpp: "supinatie subtalair gewricht",
            mlpp: "pronatie subtalair gewricht of middenpositie enkel-voet",
            description: `
Dit gewricht valt onder de gewrichten tussen de ossa tarsi onderling (artt. intertarsales).
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "artt_intercuneiformes",
            regionId: "lower_extremity",
            label: "art. intercuneiformes",
            typeIds: ["junctura_synovialis", "art_simplex", "art_plana"],
            cpp: "supinatie subtalair gewricht",
            mlpp: "pronatie subtalair gewricht of middenpositie enkel-voet",
            description: `
Deze gewrichten valt onder de gewrichten tussen de ossa tarsi onderling (artt. intertarsales).
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "art_cuboideonavicularis",
            regionId: "lower_extremity",
            label: "art. cuboideonavicularis",
            typeIds: ["junctura_synovialis", "art_simplex", "art_plana"],
            cpp: "supinatie subtalair gewricht",
            mlpp: "pronatie subtalair gewricht of middenpositie enkel-voet",
            description: `
Dit gewricht valt onder de gewrichten tussen de ossa tarsi onderling (artt. intertarsales).
            `.trim(),
        }
    ),
];