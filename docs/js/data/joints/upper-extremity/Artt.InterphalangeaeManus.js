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
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_manus_2",
            regionId: "upper_extremity",
            label: "art. interphalangea distalis II manus (DIP II)",
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
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_manus_3",
            regionId: "upper_extremity",
            label: "art. interphalangea distalis III manus (DIP III)",
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
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_manus_4",
            regionId: "upper_extremity",
            label: "art. interphalangea distalis IV manus (DIP IV)",
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
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_manus_5",
            regionId: "upper_extremity",
            label: "art. interphalangea distalis V manus (DIP V)",
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
        }
    ),
];