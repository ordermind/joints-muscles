import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default new Joint(
    {
        id: "art_talocruralis",
        regionId: "lower_extremity",
        label: "art. talocruralis (bovenste spronggewricht)",
        typeIds: ["junctura_synovialis", "art_composita", "art_ginglymus"],
        cpp: "maximale dorsaalflexie",
        mlpp: "10° plantairflexie",
        movements: [
            new Movement(
                {
                    id: "art_talocruralis__plantar_flexion",
                    jointId: "art_talocruralis",
                    label: "plantairflexie",
                    rom: "40-50°",
                    endFeel: "capsulair",
                }
            ),
            new Movement(
                {
                    id: "art_talocruralis__dorsal_flexion",
                    jointId: "art_talocruralis",
                    label: "dorsaalflexie",
                    rom: "20-30°",
                    endFeel: "capsulair / musculair",
                }
            ),
        ],
    }
);