import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default [
    new Joint(
        {
            id: "art_interphalangea_manus_1",
            regionId: "upper_extremity",
            label: "art. interphalangea manus I (IP I)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_manus_1__flexion",
                        jointId: "art_interphalangea_manus_1",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_manus_1__extension",
                        jointId: "art_interphalangea_manus_1",
                        label: "extensie",
                        rom: "0°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_interphalangea_manus_1.jpeg",
        }
    ),
    new Joint(
        {
            id: "artt_interphalangeae_proximales_manus_2_4",
            regionId: "upper_extremity",
            label: "artt. interphalangeae proximales manus II&nbsp;-&nbsp;IV (PIP II&nbsp;-&nbsp;IV)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "artt_interphalangeae_proximales_manus_2_4__flexion",
                        jointId: "artt_interphalangeae_proximales_manus_2_4",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_interphalangeae_proximales_manus_2_4__extension",
                        jointId: "artt_interphalangeae_proximales_manus_2_4",
                        label: "extensie",
                        rom: "0°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/artt_interphalangeae_proximales_manus_2_4.jpeg",
            childrenIds: [
                "art_interphalangea_proximalis_manus_2",
                "art_interphalangea_proximalis_manus_3",
                "art_interphalangea_proximalis_manus_4",
            ],
            hideInList: true,
            hideInQuiz: true,
        }
    ),
    new Joint(
        {
            id: "artt_interphalangeae_proximales_manus_2_5",
            regionId: "upper_extremity",
            label: "artt. interphalangeae proximales manus II&nbsp;-&nbsp;V (PIP II&nbsp;-&nbsp;V)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "artt_interphalangeae_proximales_manus_2_5__flexion",
                        jointId: "artt_interphalangeae_proximales_manus_2_5",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_interphalangeae_proximales_manus_2_5__extension",
                        jointId: "artt_interphalangeae_proximales_manus_2_5",
                        label: "extensie",
                        rom: "0°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/artt_interphalangeae_proximales_manus_2_5.jpeg",
            childrenIds: [
                "art_interphalangea_proximalis_manus_2",
                "art_interphalangea_proximalis_manus_3",
                "art_interphalangea_proximalis_manus_4",
                "art_interphalangea_proximalis_manus_5",
            ],
            hideInList: true,
            hideInQuiz: true,
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_proximalis_manus_2",
            regionId: "upper_extremity",
            label: "art. interphalangea proximalis manus II (PIP II)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_manus_2__flexion",
                        jointId: "art_interphalangea_proximalis_manus_2",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_manus_2__extension",
                        jointId: "art_interphalangea_proximalis_manus_2",
                        label: "extensie",
                        rom: "0°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_interphalangea_proximalis_manus_2.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_proximalis_manus_3",
            regionId: "upper_extremity",
            label: "art. interphalangea proximalis manus III (PIP III)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_manus_3__flexion",
                        jointId: "art_interphalangea_proximalis_manus_3",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_manus_3__extension",
                        jointId: "art_interphalangea_proximalis_manus_3",
                        label: "extensie",
                        rom: "0°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_interphalangea_proximalis_manus_3.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_proximalis_manus_4",
            regionId: "upper_extremity",
            label: "art. interphalangea proximalis manus IV (PIP IV)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_manus_4__flexion",
                        jointId: "art_interphalangea_proximalis_manus_4",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_manus_4__extension",
                        jointId: "art_interphalangea_proximalis_manus_4",
                        label: "extensie",
                        rom: "0°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_interphalangea_proximalis_manus_4.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_proximalis_manus_5",
            regionId: "upper_extremity",
            label: "art. interphalangea proximalis manus V (PIP V)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_manus_5__flexion",
                        jointId: "art_interphalangea_proximalis_manus_5",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_manus_5__extension",
                        jointId: "art_interphalangea_proximalis_manus_5",
                        label: "extensie",
                        rom: "0°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_interphalangea_proximalis_manus_5.jpeg",
        }
    ),
    new Joint(
        {
            id: "artt_interphalangeae_distales_manus_2_4",
            regionId: "upper_extremity",
            label: "artt. interphalangeae distales manus II&nbsp;-&nbsp;IV (DIP II&nbsp;-&nbsp;IV)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "artt_interphalangeae_distales_manus_2_4__flexion",
                        jointId: "artt_interphalangeae_distales_manus_2_4",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_interphalangeae_distales_manus_2_4__extension",
                        jointId: "artt_interphalangeae_distales_manus_2_4",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/artt_interphalangeae_distales_manus_2_4.jpeg",
            childrenIds: [
                "art_interphalangea_distalis_manus_2",
                "art_interphalangea_distalis_manus_3",
                "art_interphalangea_distalis_manus_4",
            ],
            hideInList: true,
            hideInQuiz: true,
        }
    ),
    new Joint(
        {
            id: "artt_interphalangeae_distales_manus_2_5",
            regionId: "upper_extremity",
            label: "artt. interphalangeae distales manus II&nbsp;-&nbsp;V (DIP II&nbsp;-&nbsp;V)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "artt_interphalangeae_distales_manus_2_5__flexion",
                        jointId: "artt_interphalangeae_distales_manus_2_5",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "artt_interphalangeae_distales_manus_2_5__extension",
                        jointId: "artt_interphalangeae_distales_manus_2_5",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/artt_interphalangeae_distales_manus_2_5.jpeg",
            childrenIds: [
                "art_interphalangea_distalis_manus_2",
                "art_interphalangea_distalis_manus_3",
                "art_interphalangea_distalis_manus_4",
                "art_interphalangea_distalis_manus_5",
            ],
            hideInList: true,
            hideInQuiz: true,
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_manus_2",
            regionId: "upper_extremity",
            label: "art. interphalangea distalis manus II (DIP II)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_distalis_manus_2__flexion",
                        jointId: "art_interphalangea_distalis_manus_2",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_distalis_manus_2__extension",
                        jointId: "art_interphalangea_distalis_manus_2",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_interphalangea_distalis_manus_2.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_manus_3",
            regionId: "upper_extremity",
            label: "art. interphalangea distalis manus III (DIP III)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_distalis_manus_3__flexion",
                        jointId: "art_interphalangea_distalis_manus_3",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_distalis_manus_3__extension",
                        jointId: "art_interphalangea_distalis_manus_3",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_interphalangea_distalis_manus_3.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_manus_4",
            regionId: "upper_extremity",
            label: "art. interphalangea distalis manus IV (DIP IV)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_distalis_manus_4__flexion",
                        jointId: "art_interphalangea_distalis_manus_4",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_distalis_manus_4__extension",
                        jointId: "art_interphalangea_distalis_manus_4",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_interphalangea_distalis_manus_4.jpeg",
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_manus_5",
            regionId: "upper_extremity",
            label: "art. interphalangea distalis manus V (DIP V)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_distalis_manus_5__flexion",
                        jointId: "art_interphalangea_distalis_manus_5",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_distalis_manus_5__extension",
                        jointId: "art_interphalangea_distalis_manus_5",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            image: "./images/joints/art_interphalangea_distalis_manus_5.jpeg",
        }
    ),
];