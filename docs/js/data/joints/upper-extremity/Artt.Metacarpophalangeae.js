import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default [
    new Joint(
        {
            id: "art_metacarpophalangea_1",
            regionId: "upper_extremity",
            label: "art. metacarpophalangea I (MCP I)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_metacarpophalangea_1__flexion",
                        jointId: "art_metacarpophalangea_1",
                        label: "flexie",
                        rom: "45°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metacarpophalangea_1__extension",
                        jointId: "art_metacarpophalangea_1",
                        label: "extensie",
                        rom: "45°",
                        endFeel: "capsulair",
                    }
                ),
            ]
        }
    ),
    new Joint(
        {
            id: "art_metacarpophalangea_2",
            regionId: "upper_extremity",
            label: "art. metacarpophalangea II (MCP II)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "maximale flexie",
            mlpp: "lichte flexie met lichte adductie",
            movements: [
                new Movement(
                    {
                        id: "art_metacarpophalangea_2__flexion",
                        jointId: "art_metacarpophalangea_2",
                        label: "flexie",
                        rom: "90°"
                    }
                ),
                new Movement(
                    {
                        id: "art_metacarpophalangea_2__extension",
                        jointId: "art_metacarpophalangea_2",
                        label: "extensie",
                        rom: "45°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metacarpophalangea_2__abduction",
                        jointId: "art_metacarpophalangea_2",
                        label: "abductie",
                        endFeel: "capsulair",
                        description: `ten opzichte van 3e vingerstraal`,
                    }
                ),
                new Movement(
                    {
                        id: "art_metacarpophalangea_2__adduction",
                        jointId: "art_metacarpophalangea_2",
                        label: "adductie",
                        endFeel: "capsulair",
                        description: `ten opzichte van 3e vingerstraal`,
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_metacarpophalangea_3",
            regionId: "upper_extremity",
            label: "art. metacarpophalangea III (MCP III)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "maximale flexie",
            mlpp: "lichte flexie met lichte abductie",
            movements: [
                new Movement(
                    {
                        id: "art_metacarpophalangea_3__flexion",
                        jointId: "art_metacarpophalangea_3",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metacarpophalangea_3__extension",
                        jointId: "art_metacarpophalangea_3",
                        label: "extensie",
                        rom: "45°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metacarpophalangea_3__abduction",
                        jointId: "art_metacarpophalangea_3",
                        label: "abductie",
                        endFeel: "capsulair",
                        description: `ten opzichte van 3e vingerstraal`,
                    }
                ),
                new Movement(
                    {
                        id: "art_metacarpophalangea_3__adduction",
                        jointId: "art_metacarpophalangea_3",
                        label: "adductie",
                        endFeel: "capsulair",
                        description: `ten opzichte van 3e vingerstraal`,
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_metacarpophalangea_4",
            regionId: "upper_extremity",
            label: "art. metacarpophalangea IV (MCP IV)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "maximale flexie",
            mlpp: "lichte flexie met lichte abductie",
            movements: [
                new Movement(
                    {
                        id: "art_metacarpophalangea_4__flexion",
                        jointId: "art_metacarpophalangea_4",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metacarpophalangea_4__extension",
                        jointId: "art_metacarpophalangea_4",
                        label: "extensie",
                        rom: "45°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metacarpophalangea_4__abduction",
                        jointId: "art_metacarpophalangea_4",
                        label: "abductie",
                        endFeel: "capsulair",
                        description: `ten opzichte van 3e vingerstraal`,
                    }
                ),
                new Movement(
                    {
                        id: "art_metacarpophalangea_4__adduction",
                        jointId: "art_metacarpophalangea_4",
                        label: "adductie",
                        endFeel: "capsulair",
                        description: `ten opzichte van 3e vingerstraal`,
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_metacarpophalangea_5",
            regionId: "upper_extremity",
            label: "art. metacarpophalangea V (MCP V)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "maximale flexie",
            mlpp: "lichte flexie met lichte abductie",
            movements: [
                new Movement(
                    {
                        id: "art_metacarpophalangea_5__flexion",
                        jointId: "art_metacarpophalangea_5",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metacarpophalangea_5__extension",
                        jointId: "art_metacarpophalangea_5",
                        label: "extensie",
                        rom: "45°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metacarpophalangea_5__abduction",
                        jointId: "art_metacarpophalangea_5",
                        label: "abductie",
                        endFeel: "capsulair",
                        description: `ten opzichte van 3e vingerstraal`,
                    }
                ),
                new Movement(
                    {
                        id: "art_metacarpophalangea_5__adduction",
                        jointId: "art_metacarpophalangea_5",
                        label: "adductie",
                        endFeel: "capsulair",
                        description: `ten opzichte van 3e vingerstraal`,
                    }
                ),
            ],
        }
    ),
];