import Joint from "../../../data-types/Joint.js";

export default new Joint(
    {
        id: "artt_intermetacarpales",
        regionId: "upper_extremity",
        label: "artt. intermetacarpales",
        typeIds: ["junctura_synovialis", "junctura_fibrosa", "art_simplex", "art_plana"],
        image: "./images/joints/artt_intermetacarpales.jpeg",
        description: `
Doordat er tussen het os MC I en het os MC II een dergelijk gewricht ontbreekt, wordt er door de vier ossa metacarpalia II t / m V een min of meer vast "metacarpaalblok" van de vier vingerstralen gevormd tegenover de eerste straal (de duim met het os trapezium). Dit houdt verband met de grijpfunctie van de hand (oppositie van de duim, pincetgreep).

Er is nauwelijks beweging mogelijk.
        `.trim(),
    }
);