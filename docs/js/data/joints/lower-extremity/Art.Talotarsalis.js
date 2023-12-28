import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default new Joint(
    {
        id: "art_talotarsalis",
        regionId: "lower_extremity",
        label: "art. talotarsalis (onderste spronggewricht)",
        typeIds: ["junctura_synovialis", "art_composita"],
        cpp: "maximale inversie",
        mlpp: "middenstand inversie",
        movements: [
            new Movement(
                {
                    id: "art_talotarsalis__inversion",
                    jointId: "art_talotarsalis",
                    label: "inversie",
                    rom: "60°",
                    endFeel: "capsulair",
                }
            ),
            new Movement(
                {
                    id: "art_talotarsalis__eversion",
                    jointId: "art_talotarsalis",
                    label: "eversie",
                    rom: "30°",
                    endFeel: "capsulair",
                }
            ),
        ],
        description: `
Het onderste spronggewricht bestaat uit art. talocalcaneonavicularis + art.subtalaris.

N.B. de Latijnse naam <em>art. talotarsalis</em> komt niet vaak voor in de literatuur, maar ik vind het zelf logisch. In de literatuur wordt het o.a. "art. talocalcaneonavicularis in brede zin" genoemd.
        `,
    }
);