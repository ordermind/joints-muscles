import Joint from "../../../data-types/Joint.js";

export default new Joint(
    {
        id: "artt_tarsometatarseae",
        regionId: "lower_extremity",
        label: "artt. tarsometatarseae (TMT, gewrichtslijn van Lisfranc)",
        typeIds: ["junctura_synovialis", "art_simplex", "art_plana"],
        cpp: "maximale plantairflexie van de enkel",
        mlpp: "maximale dorsaalflexie van de enkel",
        image: "./images/joints/artt_tarsometatarseae.jpeg",
        description: `
Dit zijn de gewrichten tussen de voetwortel en de middenvoet. Ter hoogte van deze overgang worden ook voetamputaties verricht en deze overgang wordt ook wel aangeduid als de amputatie- of gewrichtslijn van Lisfranc.
        `.trim(),
    }
);