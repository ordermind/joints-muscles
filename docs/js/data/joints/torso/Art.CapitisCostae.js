import Joint from "../../../data-types/Joint.js";

export default new Joint(
    {
        id: "art_capitis_costae",
        regionId: "torso",
        label: "art. capitis costae",
        typeIds: ["junctura_synovialis"],
        image: "./images/joints/art_capitis_costae.jpeg",
        description: `
Dit gewricht is onderdeel van de [Link type="Joint" targetId="artt_costovertebrales" label="artt. costovertebrales"].

Dit gewricht laat bewegingen van de ribben (ademhaling) toe. De as van beweging verloopt door zowel dit gewricht als door de [Link type="Joint" targetId="art_costotransversaria" label="art. costotransversaria"] en loopt ongeveer in het verlengde van het collum costae.
        `.trim(),
    }
);