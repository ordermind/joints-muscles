import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default new Joint(
    {
        id: "art_coxae",
        regionId: "lower_extremity",
        label: "art. coxae (heupgewricht)",
        typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
        cpp: "maximale extensie met lichte endorotatie en lichte abductie",
        mlpp: "30° anteflexie met 30° abductie en lichte exorotatie",
        movements: [
            new Movement(
                {
                    id: "art_coxae__anteflexion",
                    jointId: "art_coxae",
                    label: "anteflexie",
                    rom: "120-140°",
                    endFeel: "capsulair / interpositie weke delen",
                }
            ),
            new Movement(
                {
                    id: "art_coxae__retroflexion",
                    jointId: "art_coxae",
                    label: "retroflexie",
                    rom: "20°",
                    endFeel: "capsulair",
                }
            ),
            new Movement(
                {
                    id: "art_coxae__abduction",
                    jointId: "art_coxae",
                    label: "abductie",
                    rom: "50-80°",
                    endFeel: "capsulair",
                }
            ),
            new Movement(
                {
                    id: "art_coxae__adduction",
                    jointId: "art_coxae",
                    label: "adductie",
                    rom: "20-30°",
                    endFeel: "capsulair",
                }
            ),
            new Movement(
                {
                    id: "art_coxae__exorotation",
                    jointId: "art_coxae",
                    label: "exorotatie",
                    rom: "30-50°",
                    endFeel: "capsulair",
                }
            ),
            new Movement(
                {
                    id: "art_coxae__endorotation",
                    jointId: "art_coxae",
                    label: "endorotatie",
                    rom: "40°",
                    endFeel: "hard capsulair",
                }
            ),
        ],
        image: "./images/joints/art_coxae.jpeg",
        description: `
<img src="./images/misc/art_coxae_details.jpg" class="width-608" />
        `.trim()
    }
);