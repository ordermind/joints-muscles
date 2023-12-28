import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default [
    new Joint(
        {
            id: "art_interphalangea_1",
            regionId: "upper_extremity",
            label: "art. interphalangea I (IP I)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_1__flexion",
                        jointId: "art_interphalangea_1",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_1__extension",
                        jointId: "art_interphalangea_1",
                        label: "extensie",
                        rom: "0°",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_proximalis_2",
            regionId: "upper_extremity",
            label: "art. interphalangea proximalis II (PIP II)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_2__flexion",
                        jointId: "art_interphalangea_proximalis_2",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_2__extension",
                        jointId: "art_interphalangea_proximalis_2",
                        label: "extensie",
                        rom: "0°",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_proximalis_3",
            regionId: "upper_extremity",
            label: "art. interphalangea proximalis III (PIP III)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_3__flexion",
                        jointId: "art_interphalangea_proximalis_3",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_3__extension",
                        jointId: "art_interphalangea_proximalis_3",
                        label: "extensie",
                        rom: "0°",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_proximalis_4",
            regionId: "upper_extremity",
            label: "art. interphalangea proximalis IV (PIP IV)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_4__flexion",
                        jointId: "art_interphalangea_proximalis_4",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_4__extension",
                        jointId: "art_interphalangea_proximalis_4",
                        label: "extensie",
                        rom: "0°",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_proximalis_5",
            regionId: "upper_extremity",
            label: "art. interphalangea proximalis V (PIP V)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_5__flexion",
                        jointId: "art_interphalangea_proximalis_5",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_5__extension",
                        jointId: "art_interphalangea_proximalis_5",
                        label: "extensie",
                        rom: "0°",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_2",
            regionId: "upper_extremity",
            label: "art. interphalangea distalis II (DIP II)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_distalis_2__flexion",
                        jointId: "art_interphalangea_distalis_2",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_distalis_2__extension",
                        jointId: "art_interphalangea_distalis_2",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_3",
            regionId: "upper_extremity",
            label: "art. interphalangea distalis III (DIP III)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_distalis_3__flexion",
                        jointId: "art_interphalangea_distalis_3",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_distalis_3__extension",
                        jointId: "art_interphalangea_distalis_3",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_4",
            regionId: "upper_extremity",
            label: "art. interphalangea distalis IV (DIP IV)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_distalis_4__flexion",
                        jointId: "art_interphalangea_distalis_4",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_distalis_4__extension",
                        jointId: "art_interphalangea_distalis_4",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_5",
            regionId: "upper_extremity",
            label: "art. interphalangea distalis V (DIP V)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_distalis_5__flexion",
                        jointId: "art_interphalangea_distalis_5",
                        label: "flexie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_distalis_5__extension",
                        jointId: "art_interphalangea_distalis_5",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
];