import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default new Joint(
    {
        id: "art_genus",
        regionId: "lower_extremity",
        label: "art. genus (kniegewricht)",
        typeIds: ["junctura_synovialis", "art_complexa", "art_ginglymus", "art_trochoidea"],
        cpp: "maximale extensie",
        mlpp: "30° flexie",
        movements: [
            new Movement(
                {
                    id: "art_genus__flexion",
                    jointId: "art_genus",
                    label: "flexie",
                    rom: "120-150°",
                    endFeel: "interpositie weke delen",
                }
            ),
            new Movement(
                {
                    id: "art_genus__extension",
                    jointId: "art_genus",
                    label: "extensie",
                    rom: "5-10°",
                    endFeel: "capsulair springend",
                }
            ),
            new Movement(
                {
                    id: "art_genus__exorotation",
                    jointId: "art_genus",
                    label: "exorotatie",
                    rom: "30-40°",
                    endFeel: "capsulair",
                }
            ),
            new Movement(
                {
                    id: "art_genus__endorotation",
                    jointId: "art_genus",
                    label: "endorotatie",
                    rom: "10°",
                    endFeel: "capsulair",
                }
            ),
        ],
    }
);