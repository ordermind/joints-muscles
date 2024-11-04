import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default [
    new Joint(
        {
            id: "art_metatarsophalangea_1",
            regionId: "foot",
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
                new Movement(
                    {
                        id: "art_metatarsophalangea_1__abduction",
                        jointId: "art_metatarsophalangea_1",
                        label: "abductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_1__adduction",
                        jointId: "art_metatarsophalangea_1",
                        label: "adductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_1__circumduction",
                        jointId: "art_metatarsophalangea_1",
                        label: "circumductie",
                    }
                ),
            ],
            image: "./images/joints/art_metatarsophalangea_1.jpeg",
        }
    ),
    new Joint(
        {
            id: "artt_metatarsophalangeae_2_4",
            regionId: "foot",
            label: "artt. metatarsophalangeae II&nbsp;-&nbsp;IV (MTP II&nbsp;-&nbsp;IV)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "maximale extensie",
            mlpp: "lichte extensie",
            movements: [
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_2_4__flexion",
                        jointId: "artt_metatarsophalangeae_2_4",
                        label: "flexie",
                        rom: "45°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_2_4__extension",
                        jointId: "artt_metatarsophalangeae_2_4",
                        label: "extensie",
                        rom: "70°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_2_4__abduction",
                        jointId: "artt_metatarsophalangeae_2_4",
                        label: "abductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_2_4__adduction",
                        jointId: "artt_metatarsophalangeae_2_4",
                        label: "adductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_2_4__circumduction",
                        jointId: "artt_metatarsophalangeae_2_4",
                        label: "circumductie",
                    }
                ),
            ],
            image: "./images/joints/artt_metatarsophalangeae_2_4.jpeg",
            childrenIds: [
                "art_metatarsophalangea_2",
                "art_metatarsophalangea_3",
                "art_metatarsophalangea_4",
            ],
            hideInList: true,
            hideInQuiz: true,
        }
    ),
    new Joint(
        {
            id: "artt_metatarsophalangeae_2_5",
            regionId: "foot",
            label: "artt. metatarsophalangeae II&nbsp;-&nbsp;V (MTP II&nbsp;-&nbsp;V)",
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
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_2_5__abduction",
                        jointId: "artt_metatarsophalangeae_2_5",
                        label: "abductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_2_5__adduction",
                        jointId: "artt_metatarsophalangeae_2_5",
                        label: "adductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_2_5__circumduction",
                        jointId: "artt_metatarsophalangeae_2_5",
                        label: "circumductie",
                    }
                ),
            ],
            image: "./images/joints/artt_metatarsophalangeae_2_5.jpeg",
            childrenIds: [
                "art_metatarsophalangea_2",
                "art_metatarsophalangea_3",
                "art_metatarsophalangea_4",
                "art_metatarsophalangea_5",
            ],
            hideInList: true,
            hideInQuiz: true,
        }
    ),
    new Joint(
        {
            id: "art_metatarsophalangea_2",
            regionId: "foot",
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
                new Movement(
                    {
                        id: "art_metatarsophalangea_2__abduction",
                        jointId: "art_metatarsophalangea_2",
                        label: "abductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_2__adduction",
                        jointId: "art_metatarsophalangea_2",
                        label: "adductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_2__circumduction",
                        jointId: "art_metatarsophalangea_2",
                        label: "circumductie",
                    }
                ),
            ],
            image: "./images/joints/art_metatarsophalangea_2.jpeg",
        }
    ),
    new Joint(
        {
            id: "artt_metatarsophalangeae_3_5",
            regionId: "foot",
            label: "artt. metatarsophalangeae III&nbsp;-&nbsp;V (MTP III&nbsp;-&nbsp;V)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_sphaeroidea"],
            cpp: "maximale extensie",
            mlpp: "lichte extensie",
            movements: [
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_3_5__flexion",
                        jointId: "artt_metatarsophalangeae_3_5",
                        label: "flexie",
                        rom: "45°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_3_5__extension",
                        jointId: "artt_metatarsophalangeae_3_5",
                        label: "extensie",
                        rom: "70°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_3_5__abduction",
                        jointId: "artt_metatarsophalangeae_3_5",
                        label: "abductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_3_5__adduction",
                        jointId: "artt_metatarsophalangeae_3_5",
                        label: "adductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_metatarsophalangeae_3_5__circumduction",
                        jointId: "artt_metatarsophalangeae_3_5",
                        label: "circumductie",
                    }
                ),
            ],
            image: "./images/joints/artt_metatarsophalangeae_3_5.jpeg",
            childrenIds: [
                "art_metatarsophalangea_3",
                "art_metatarsophalangea_4",
                "art_metatarsophalangea_5",
            ],
            hideInList: true,
            hideInQuiz: true,
        }
    ),
    new Joint(
        {
            id: "art_metatarsophalangea_3",
            regionId: "foot",
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
                new Movement(
                    {
                        id: "art_metatarsophalangea_3__abduction",
                        jointId: "art_metatarsophalangea_3",
                        label: "abductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_3__adduction",
                        jointId: "art_metatarsophalangea_3",
                        label: "adductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_3__circumduction",
                        jointId: "art_metatarsophalangea_3",
                        label: "circumductie",
                    }
                ),
            ],
            image: "./images/joints/art_metatarsophalangea_3.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_metatarsophalangea_4",
            regionId: "foot",
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
                new Movement(
                    {
                        id: "art_metatarsophalangea_4__abduction",
                        jointId: "art_metatarsophalangea_4",
                        label: "abductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_4__adduction",
                        jointId: "art_metatarsophalangea_4",
                        label: "adductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_4__circumduction",
                        jointId: "art_metatarsophalangea_4",
                        label: "circumductie",
                    }
                ),
            ],
            image: "./images/joints/art_metatarsophalangea_4.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_metatarsophalangea_5",
            regionId: "foot",
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
                new Movement(
                    {
                        id: "art_metatarsophalangea_5__abduction",
                        jointId: "art_metatarsophalangea_5",
                        label: "abductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_5__adduction",
                        jointId: "art_metatarsophalangea_5",
                        label: "adductie",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_metatarsophalangea_5__circumduction",
                        jointId: "art_metatarsophalangea_5",
                        label: "circumductie",
                    }
                ),
            ],
            image: "./images/joints/art_metatarsophalangea_5.jpeg",
        }
    ),
];