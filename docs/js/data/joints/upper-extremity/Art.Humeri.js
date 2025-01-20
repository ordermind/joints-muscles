import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default new Joint(
    {
        id: "art_humeri",
        regionId: "upper_extremity",
        label: "art. humeri (schoudergewricht)",
        typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
        cpp: "maximale abductie met maximale exorotatie",
        mlpp: "30° anteflexie met 55° abductie",
        movements: [
            new Movement(
                {
                    id: "art_humeri__anteflexion",
                    jointId: "art_humeri",
                    label: "anteflexie",
                    rom: "90°",
                    romNotes: ["180° incl. schoudergordel"],
                    endFeel: "capsulair",
                }
            ),
            new Movement(
                {
                    id: "art_humeri__retroflexion",
                    jointId: "art_humeri",
                    label: "retroflexie",
                    rom: "40°",
                    endFeel: "capsulair",
                }
            ),
            new Movement(
                {
                    id: "art_humeri__abduction",
                    jointId: "art_humeri",
                    label: "abductie",
                    rom: "105°",
                    romNotes: ["180° incl. schoudergordel"],
                    endFeel: "capsulair",
                }
            ),
            new Movement(
                {
                    id: "art_humeri__adduction",
                    jointId: "art_humeri",
                    label: "adductie",
                    rom: "0°",
                    romNotes: ["20-40° incl. schoudergordel"],
                    endFeel: "hard capsulair / interpositie weke delen",
                }
            ),
            new Movement(
                {
                    id: "art_humeri__exorotation",
                    jointId: "art_humeri",
                    label: "exorotatie",
                    rom: "60-90°",
                    endFeel: "capsulair",
                }
            ),
            new Movement(
                {
                    id: "art_humeri__endorotation",
                    jointId: "art_humeri",
                    label: "endorotatie",
                    rom: "50-95°",
                    endFeel: "capsulair",
                }
            ),
        ],
        image: "./images/joints/art_humeri.jpeg",
    }
);