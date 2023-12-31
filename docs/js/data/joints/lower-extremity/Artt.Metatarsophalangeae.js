import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default [
    new Joint(
        {
            id: "art_metatarsophalangea_1",
            regionId: "lower_extremity",
            label: "art. metatarsophalangea I (MTP I)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "maximale extensie",
            mlpp: "lichte extensie",
            movements: [
                new Movement(
                    {
                        id: "art_metatarsophalangea_1__flexion",
                        jointId: "art_metatarsophalangea_1",
                        label: "flexie",
                        rom: "45°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_1__extension",
                        jointId: "art_metatarsophalangea_1",
                        label: "extensie",
                        rom: "70°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_metatarsophalangea_1.jpeg",
        }
    ),
    new Joint(
        {
            id: "artt_metatarsophalangeae_2_5",
            regionId: "lower_extremity",
            label: "artt. metatarsophalangeae II - V (MTP II - V)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "maximale extensie",
            mlpp: "lichte extensie",
            movements: [
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_2_5__flexion",
                        jointId: "artt_metatarsophalangeae_2_5",
                        label: "flexie",
                        rom: "45°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_2_5__extension",
                        jointId: "artt_metatarsophalangeae_2_5",
                        label: "extensie",
                        rom: "70°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/artt_metatarsophalangeae_2_5.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_metatarsophalangea_2",
            regionId: "lower_extremity",
            label: "art. metatarsophalangea II (MTP II)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "maximale extensie",
            mlpp: "lichte extensie",
            movements: [
                new Movement(
                    {
                        id: "art_metatarsophalangea_2__flexion",
                        jointId: "art_metatarsophalangea_2",
                        label: "flexie",
                        rom: "45°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_2__extension",
                        jointId: "art_metatarsophalangea_2",
                        label: "extensie",
                        rom: "70°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_metatarsophalangea_2.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_metatarsophalangea_3",
            regionId: "lower_extremity",
            label: "art. metatarsophalangea III (MTP III)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "maximale extensie",
            mlpp: "lichte extensie",
            movements: [
                new Movement(
                    {
                        id: "art_metatarsophalangea_3__flexion",
                        jointId: "art_metatarsophalangea_3",
                        label: "flexie",
                        rom: "45°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_3__extension",
                        jointId: "art_metatarsophalangea_3",
                        label: "extensie",
                        rom: "70°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_metatarsophalangea_3.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_metatarsophalangea_4",
            regionId: "lower_extremity",
            label: "art. metatarsophalangea IV (MTP IV)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "maximale extensie",
            mlpp: "lichte extensie",
            movements: [
                new Movement(
                    {
                        id: "art_metatarsophalangea_4__flexion",
                        jointId: "art_metatarsophalangea_4",
                        label: "flexie",
                        rom: "45°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_4__extension",
                        jointId: "art_metatarsophalangea_4",
                        label: "extensie",
                        rom: "70°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_metatarsophalangea_4.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_metatarsophalangea_5",
            regionId: "lower_extremity",
            label: "art. metatarsophalangea V (MTP V)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "maximale extensie",
            mlpp: "lichte extensie",
            movements: [
                new Movement(
                    {
                        id: "art_metatarsophalangea_5__flexion",
                        jointId: "art_metatarsophalangea_5",
                        label: "flexie",
                        rom: "45°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_5__extension",
                        jointId: "art_metatarsophalangea_5",
                        label: "extensie",
                        rom: "70°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_metatarsophalangea_5.jpeg",
        }
    ),
];