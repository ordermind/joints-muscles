import Joint from "../../../data-types/Joint.js";

export default new Joint(
    {
        id: "art_sacroiliaca",
        regionId: "torso",
        label: "art. sacroiliaca (SI-gewricht)",
        typeIds: ["junctura_synovialis", "art_plana"],
        image: "./images/joints/art_sacroiliaca.jpeg",
        description: [
            "",
            `
Articulatio sacro-iliaca is waarschijnlijk het minst beweeglijke synoviale gewricht. Tijdens zwangerschap / bevalling kan de beweeglijkheid van het gewricht enigszins toenemen.

De bewegingsmogelijkheden zijn zeer gering, tussen os sacrum en os ilium is enkele graden kanteling (<strong>nutatie</strong> en <strong>contranutatie</strong>) mogelijk. Nutatie is een vooroverkanteling van het sacrum t.o.v. het SI-gewricht, contranutatie is een achteroverkanteling van het sacrum t.o.v. het SI-gewricht.

Het begrenzen van nutatie is heel belangrijk voor de stabiliteit van het SI-gewricht en dat gebeurt met name d.m.v. het <em>lig. sacrotuberale</em>.
            `.trim(),
        ],
    }
);