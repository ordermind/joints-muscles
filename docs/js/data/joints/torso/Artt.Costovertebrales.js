import Joint from "../../../data-types/Joint.js";

export default new Joint(
    {
        id: "artt_costovertebrales",
        regionId: "torso",
        label: "artt. costovertebrales",
        typeIds: ["junctura_synovialis", "art_duplex"],
        image: "./images/joints/artt_costovertebrales.jpeg",
        description: `
Deze gewrichten verbinden een rib met een rugwervel en laten bewegingen van de ribben (ademhaling) toe. De onderdelen zijn [Link type="Joint" targetId="art_capitis_costae" label="art. capitis costae"] en [Link type="Joint" targetId="art_costotransversaria" label="art. costotransversaria"].

De beweging van een enkele rib aan één zijde van de thorax resulteert in het caudale gedeelte van de thorax in een 'emmerhengselbeweging'. Ook in het craniale gedeelte van de thorax kan men van een 'emmerhengselbeweging' spreken, maar dan wordt deze gemaakt door beide ribben samen met het sternum.

Caudaal in de thorax leidt de 'emmerhengselbeweging' tot vergroting van de links-rechts (dwarse) diameter van de thorax (flankademhaling). Craniaal in de thorax leidt deze beweging tot vergroting van de anteroposteriore diameter van de thorax. Beide bewegingsprincipes gaan van craniaal naar caudaal vloeiend in elkaar over.

Bij rotaties van de romp als geheel zullen in genoemde gewrichten ook (passief of indirect) bewegingen optreden.
        `.trim(),
        hideInQuiz: true,
    }
);