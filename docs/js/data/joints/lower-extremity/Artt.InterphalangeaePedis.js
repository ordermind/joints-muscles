import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default [
    new Joint(
        {
            id: "art_interphalangea_pedis_1",
            regionId: "lower_extremity",
            label: "art. interphalangea pedis I (IP I)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_pedis_1__flexion",
                        jointId: "art_interphalangea_pedis_1",
                        label: "flexie",
                        rom: "80°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_pedis_1__extension",
                        jointId: "art_interphalangea_pedis_1",
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
            id: "art_interphalangea_proximalis_pedis_2",
            regionId: "lower_extremity",
            label: "art. interphalangea proximalis pedis II (PIP II)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_pedis_2__flexion",
                        jointId: "art_interphalangea_proximalis_pedis_2",
                        label: "flexie",
                        rom: "80°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_pedis_2__extension",
                        jointId: "art_interphalangea_proximalis_pedis_2",
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
            id: "art_interphalangea_proximalis_pedis_3",
            regionId: "lower_extremity",
            label: "art. interphalangea proximalis pedis III (PIP III)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_pedis_3__flexion",
                        jointId: "art_interphalangea_proximalis_pedis_3",
                        label: "flexie",
                        rom: "80°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_pedis_3__extension",
                        jointId: "art_interphalangea_proximalis_pedis_3",
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
            id: "art_interphalangea_proximalis_pedis_4",
            regionId: "lower_extremity",
            label: "art. interphalangea proximalis pedis IV (PIP IV)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_pedis_4__flexion",
                        jointId: "art_interphalangea_proximalis_pedis_4",
                        label: "flexie",
                        rom: "80°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_pedis_4__extension",
                        jointId: "art_interphalangea_proximalis_pedis_4",
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
            id: "art_interphalangea_proximalis_pedis_5",
            regionId: "lower_extremity",
            label: "art. interphalangea proximalis pedis V (PIP V)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_pedis_5__flexion",
                        jointId: "art_interphalangea_proximalis_pedis_5",
                        label: "flexie",
                        rom: "80°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_proximalis_pedis_5__extension",
                        jointId: "art_interphalangea_proximalis_pedis_5",
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
            id: "art_interphalangea_distalis_pedis_2",
            regionId: "lower_extremity",
            label: "art. interphalangea distalis II pedis (DIP II)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_distalis_pedis_2__flexion",
                        jointId: "art_interphalangea_distalis_pedis_2",
                        label: "flexie",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_distalis_pedis_2__extension",
                        jointId: "art_interphalangea_distalis_pedis_2",
                        label: "extensie",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_pedis_3",
            regionId: "lower_extremity",
            label: "art. interphalangea distalis III pedis (DIP III)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_distalis_pedis_3__flexion",
                        jointId: "art_interphalangea_distalis_pedis_3",
                        label: "flexie",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_distalis_pedis_3__extension",
                        jointId: "art_interphalangea_distalis_pedis_3",
                        label: "extensie",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_pedis_4",
            regionId: "lower_extremity",
            label: "art. interphalangea distalis IV pedis (DIP IV)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_distalis_pedis_4__flexion",
                        jointId: "art_interphalangea_distalis_pedis_4",
                        label: "flexie",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_distalis_pedis_4__extension",
                        jointId: "art_interphalangea_distalis_pedis_4",
                        label: "extensie",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    new Joint(
        {
            id: "art_interphalangea_distalis_pedis_5",
            regionId: "lower_extremity",
            label: "art. interphalangea distalis V pedis (DIP V)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_ginglymus"],
            cpp: "maximale extensie",
            mlpp: "lichte flexie",
            movements: [
                new Movement(
                    {
                        id: "art_interphalangea_distalis_pedis_5__flexion",
                        jointId: "art_interphalangea_distalis_pedis_5",
                        label: "flexie",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_interphalangea_distalis_pedis_5__extension",
                        jointId: "art_interphalangea_distalis_pedis_5",
                        label: "extensie",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
];