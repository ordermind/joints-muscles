import Joint from "../../../data-types/Joint.js";

export default new Joint(
    {
        id: "artt_intermetatarsales",
        regionId: "lower_extremity",
        label: "artt. intermetatarsales",
        typeIds: ["junctura_synovialis", "art_simplex", "art_plana"],
        image: "./images/joints/artt_intermetatarsales.jpeg",
        description: `
Dit zijn de gewrichten tussen de ossa metatarsi onderling (proximaal).
        `.trim(),
    }
);