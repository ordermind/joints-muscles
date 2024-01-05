import Joint from "../../../data-types/Joint.js";

export default new Joint(
    {
        id: "art_sternocostalis",
        regionId: "torso",
        label: "art. sternocostalis",
        typeIds: ["junctura_cartilaginea", "junctura_synovialis"],
        image: "./images/joints/art_sternocostalis.jpeg",
        description: [
            `
Ook bekend als <em>art. sternochondralis</em>.
            `.trim(),
            `
Bij costae I, VI en VII is de type verbinding [Link type="JointType" targetId="junctura_cartilaginea" label="junctura cartilaginea"]. Bij costae II t/m V is de type verbinding [Link type="JointType" targetId="junctura_synovialis" label="junctura synovialis"].

Dit gewricht laat bewegingen van de ribben (ademhaling) toe, samen met de [Link type="Joint" targetId="artt_costovertebrales" label="artt. costovertebrales"].

Het ribkraakbeen verbinding kan op oudere leeftijd geheel of gedeeltelijk verbenen. De art. sternocostalis kan dan ook straffer worden.

De overgang van de rib naar het bijbehorende kraakbeen wordt de <strong>costochondrale overgang</strong> genoemd.
            `.trim(),
        ],
    }
);