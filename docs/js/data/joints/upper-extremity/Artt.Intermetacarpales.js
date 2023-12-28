import Joint from "../../../data-types/Joint.js";

export default [
    new Joint(
        {
            id: "artt_intermetacarpales_proximales",
            regionId: "upper_extremity",
            label: "artt. intermetacarpales proximales",
            typeIds: ["junctura_synovialis", "art_simplex", "art_plana"],
            description: `
Er is nauwelijks beweging mogelijk.

Doordat er tussen het os MC I en het os MC II een dergelijk gewricht ontbreekt, wordt er door de vier ossa metacarpalia II t / m V een min of meer vast "metacarpaalblok" van de vier vingerstralen gevormd tegenover de eerste straal (de duim met het os trapezium). Dit houdt verband met de grijpfunctie van de hand (oppositie van de duim, pincetgreep).
            `.trim(),
        }
    ),
    new Joint(
        {
            id: "artt_intermetacarpales_distales",
            regionId: "upper_extremity",
            label: "artt. intermetacarpales distales",
            typeIds: ["junctura_fibrosa"],
            description: `
Er is nauwelijks beweging mogelijk.

Deze gewrichten vormen functioneel één geheel met de articulationes intermetacarpales proximales.
            `.trim(),
        }
    ),
];