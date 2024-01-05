import Joint from "../../../data-types/Joint.js";

export default new Joint(
    {
        id: "art_costotransversaria",
        regionId: "torso",
        label: "art. costotransversaria",
        typeIds: ["junctura_synovialis"],
        image: "./images/joints/art_costotransversaria.jpeg",
        description: `
Dit gewricht is onderdeel van de [Link type="Joint" targetId="artt_costovertebrales" label="artt. costovertebrales"].

Dit gewricht laat bewegingen van de ribben (ademhaling) toe. De as van beweging verloopt door zowel dit gewricht als door de [Link type="Joint" targetId="art_capitis_costae" label="art. capitis costae"] en loopt ongeveer in het verlengde van het collum costae.
        `.trim(),
    }
);