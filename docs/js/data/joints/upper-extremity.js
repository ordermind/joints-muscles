import Joint from "../../data-types/Joint.js";
import Movement from "../../data-types/Movement.js";

/**
 * Unless specified, all ROM values and end-feel come from Schünke et al. (2016) Anatomische atlas - Algemene anatomie en bewegingsapparaat.
 */
export default {
    shoulder_girdle: new Joint(
        {
            id: "shoulder_girdle",
            regionId: "upper_extremity",
            label: "schoudergordel",
            typeIds: [],
            movements: [
                new Movement(
                    {
                        id: "shoulder_girdle__protraction",
                        jointId: "shoulder_girdle",
                        label: "protractie",
                        rom: "30°",
                    }
                ),
                new Movement(
                    {
                        id: "shoulder_girdle__retraction",
                        jointId: "shoulder_girdle",
                        label: "retractie",
                        rom: "25°",
                    }
                ),
                new Movement(
                    {
                        id: "shoulder_girdle__elevation",
                        jointId: "shoulder_girdle",
                        label: "elevatie",
                        rom: "40°",
                    }
                ),
                new Movement(
                    {
                        id: "shoulder_girdle__depression",
                        jointId: "shoulder_girdle",
                        label: "depressie (detractie)",
                        rom: "10°",
                    }
                ),
                new Movement(
                    {
                        id: "shoulder_girdle__laterorotation",
                        jointId: "shoulder_girdle",
                        label: "laterorotatie",
                        rom: "90°",
                    }
                ),
                new Movement(
                    {
                        id: "shoulder_girdle__mediorotation",
                        jointId: "shoulder_girdle",
                        label: "mediorotatie",
                        rom: "0°",
                    }
                ),
            ],
            description: `
De schoudergordel bestaat uit een zeer mobiel en coördinatief hoogwaardig systeem, met vele onderdelen die perfect in elkaar grijpen.  Stoornissen in dit systeem kunnen leiden tot beperkingen in activiteiten, waardoor zelfs het participeren in de maatschappij kan worden belemmerd. 
De verbindingen tussen de botdelen van de schouderregio worden in twee hoofdgroepen verdeeld:
- Het glenohumerale systeem
- Het scapulothoracale systeem

Het scapulothoracale systeem bestaat weer uit een primair- en een secundair gedeelte.
Het glenohumerale systeem bestaat uit:
- de [Link type="Joint" targetId="art_humeri" label="art. humeri"]
- de junctura subacromialis (ook wel art. subacromialis of art. suprahumeralis genoemd)
- het bicipitale glijmechanisme

Het primaire scapulothoracale systeem bestaat uit: 

- de [Link type="Joint" targetId="art_acromioclavicularis" label="art. acromioclavicularis"] ( = het AC- gewicht)
- de [Link type="Joint" targetId="art_sternoclavicularis" label="art. sternoclavicularis"] (= het SC-gewricht)
- de junctura scapulothoracalis (of junctura scapulocostalis genoemd)

Het secundaire scapulothoracale systeem bestaande uit: 
- de [Link type="Joint" targetId="art_costovertebralis" label="art. costovertebralis"]
- de [Link type="Joint" targetId="art_costotransversaria" label="art. costotransversaria"]
- de [Link type="Joint" targetId="art_intervertebralis" label="art. intervertebralis"]
            `,
        }
    ),
    art_acromioclavicularis: new Joint(
        {
            id: "art_acromioclavicularis",
            regionId: "upper_extremity",
            label: "art. acromioclavicularis (het AC-gewricht)",
            typeIds: ["art_simplex", "art_plana"],
            cpp: "90° abductie van [Link type=\"Joint\" targetId=\"art_humeri\" label=\"art. humeri\"]",
            mlpp: "anatomische positie",
            description: "De bewegingen van dit gewricht zijn geringe translatie en rotatie rond de lengte-as van de clavicula."
        }
    ),
    art_sternoclavicularis: new Joint(
        {
            id: "art_sternoclavicularis",
            regionId: "upper_extremity",
            label: "art. sternoclavicularis (het SC-gewricht)",
            typeIds: ["art_complex", "art_sellaris"],
            cpp: "maximale elevatie",
            mlpp: "anatomische positie",
            /**
             * Movements are taken from https://www.kenhub.com/en/library/anatomy/sternoclavicular-joint
             */
            movements: [
                new Movement(
                    {
                        id: "art_sternoclavicularis__protraction",
                        jointId: "art_sternoclavicularis",
                        label: "protractie",
                        rom: "15°",
                    }
                ),
                new Movement(
                    {
                        id: "art_sternoclavicularis__retraction",
                        jointId: "art_sternoclavicularis",
                        label: "retractie",
                        rom: "15°",
                    }
                ),
                new Movement(
                    {
                        id: "art_sternoclavicularis__elevation",
                        jointId: "art_sternoclavicularis",
                        label: "elevatie",
                        rom: "20°",
                    }
                ),
                new Movement(
                    {
                        id: "art_sternoclavicularis__depression",
                        jointId: "art_sternoclavicularis",
                        label: "depressie (detractie)",
                        rom: "20°",
                    }
                ),
                new Movement(
                    {
                        id: "art_sternoclavicularis__laterorotation",
                        jointId: "art_sternoclavicularis",
                        label: "laterorotatie",
                        labelNotes: ["om de lengte-as van de clavicula"],
                        rom: "10-20°",
                    }
                ),
                new Movement(
                    {
                        id: "art_sternoclavicularis__mediorotation",
                        jointId: "art_sternoclavicularis",
                        label: "mediorotatie",
                        labelNotes: ["om de lengte-as van de clavicula"],
                        rom: "10-20°",
                    }
                ),
            ],
        }
    ),
    art_humeri: new Joint(
        {
            id: "art_humeri",
            regionId: "upper_extremity",
            label: "art. humeri (schoudergewricht)",
            typeIds: ["art_simplex", "art_sphaeroidea"],
            cpp: "maximale abductie met maximale exorotatie",
            mlpp: "30° anteflexie met 55° abductie",
            movements: [
                new Movement(
                    {
                        id: "art_humeri__anteflexion",
                        jointId: "art_humeri",
                        label: "anteflexie",
                        rom: "90°",
                        romNotes: ["180° incl. schoudergordel"],
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_humeri__retroflexion",
                        jointId: "art_humeri",
                        label: "retroflexie",
                        rom: "40°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_humeri__abduction",
                        jointId: "art_humeri",
                        label: "abductie",
                        rom: "90°",
                        romNotes: ["180° incl. schoudergordel"],
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_humeri__adduction",
                        jointId: "art_humeri",
                        label: "adductie",
                        rom: "20-40°",
                        endFeel: "hard capsulair / interpositie weke delen",
                    }
                ),
                new Movement(
                    {
                        id: "art_humeri__exorotation",
                        jointId: "art_humeri",
                        label: "exorotatie",
                        rom: "60-90°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_humeri__endorotation",
                        jointId: "art_humeri",
                        label: "endorotatie",
                        rom: "50-95°",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    art_cubiti: new Joint(
        {
            id: "art_cubiti",
            regionId: "upper_extremity",
            label: "art. cubiti (ellebooggewricht)",
            typeIds: ["art_composita", "art_trochoidea", "art_ginglymus"],
            cpp: "maximale extensie met maximale supinatie",
            mlpp: "70° flexie, 10-35° supinatie",
            movements: [
                new Movement(
                    {
                        id: "art_cubiti__flexion",
                        jointId: "art_cubiti",
                        label: "flexie",
                        rom: "130-150°",
                        endFeel: "interpositie weke delen",
                    }
                ),
                new Movement(
                    {
                        id: "art_cubiti__extension",
                        jointId: "art_cubiti",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "bot",
                    }
                ),
                new Movement(
                    {
                        id: "art_cubiti__pronation",
                        jointId: "art_cubiti",
                        label: "pronatie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_cubiti__supination",
                        jointId: "art_cubiti",
                        label: "supinatie",
                        rom: "90°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            description: `
Het ellebooggewricht bestaat uit drie gewrichten:
- [Link type="Joint" targetId="art_humeroradialis" label="art. humeroradialis"] (flexie, extensie, pronatie, supinatie)
- [Link type="Joint" targetId="art_humeroulnaris" label="art. humeroulnaris"] (flexie, extensie)
- [Link type="Joint" targetId="art_radioulnaris" label="art. radioulnaris"] (pronatie, supinatie)
            `,
        }
    ),
    art_humeroradialis: new Joint(
        {
            id: "art_humeroradialis",
            regionId: "upper_extremity",
            label: "art. humeroradialis",
            typeIds: ["art_simplex", "art_sphaeroidea"],
            cpp: "90° flexie met lichte supinatie",
            mlpp: "Maximale extensie met maximale supinatie",
            movements: [
                new Movement(
                    {
                        id: "art_humeroradialis__flexion",
                        jointId: "art_humeroradialis",
                        label: "flexie",
                        rom: "130-150°",
                        endFeel: "interpositie weke delen",
                    }
                ),
                new Movement(
                    {
                        id: "art_humeroradialis__extension",
                        jointId: "art_humeroradialis",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "bot",
                    }
                ),
                new Movement(
                    {
                        id: "art_humeroradialis__pronation",
                        jointId: "art_humeroradialis",
                        label: "pronatie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_humeroradialis__supination",
                        jointId: "art_humeroradialis",
                        label: "supinatie",
                        rom: "90°",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
    art_humeroulnaris: new Joint(
        {
            id: "art_humeroulnaris",
            regionId: "upper_extremity",
            label: "art. humeroulnaris",
            typeIds: ["art_simplex", "art_ginglymus"],
            cpp: "maximale extensie met maximale supinatie",
            mlpp: "70° flexie met 10-35° supinatie",
            movements: [
                new Movement(
                    {
                        id: "art_humeroulnaris__flexion",
                        jointId: "art_humeroulnaris",
                        label: "flexie",
                        rom: "130-150°",
                        endFeel: "interpositie weke delen",
                    }
                ),
                new Movement(
                    {
                        id: "art_humeroulnaris__extension",
                        jointId: "art_humeroulnaris",
                        label: "extensie",
                        rom: "10°",
                        endFeel: "bot",
                    }
                ),
            ],
        }
    ),
    art_radioulnaris: new Joint(
        {
            id: "art_radioulnaris",
            regionId: "upper_extremity",
            label: "art. radioulnaris",
            typeIds: ["art_duplex", "art_complexa", "art_trochoidea"],
            cpp: "lichte supinatie",
            mlpp: "10-35° supinatie",
            movements: [
                new Movement(
                    {
                        id: "art_radioulnaris__pronation",
                        jointId: "art_radioulnaris",
                        label: "pronatie",
                        rom: "90°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_radioulnaris__supination",
                        jointId: "art_radioulnaris",
                        label: "supinatie",
                        rom: "90°",
                        endFeel: "capsulair",
                    }
                ),
            ],
            description: `
De art. radioulnaris is een duplexgewricht en bestaat uit twee subgewrichten die met elkaar samenwerken: art. radioulnaris proximalis en art. radioulnaris distalis.
            `,
        }
    ),
    art_radiocarpalis: new Joint(
        {
            id: "art_radiocarpalis",
            regionId: "upper_extremity",
            label: "art. radiocarpalis (polsgewricht)",
            typeIds: ["art_simplex", "art_ellipsoidea"],
            cpp: "maximale dorsaalflexie met maximale radiaaldeviatie",
            mlpp: "lichte palmairflexie met lichte ulnairdeviatie",
            movements: [
                new Movement(
                    {
                        id: "art_radiocarpalis__palmar_flexion",
                        jointId: "art_radiocarpalis",
                        label: "palmairflexie",
                        rom: "60-80°",
                        endFeel: "capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_radiocarpalis__dorsal_flexion",
                        jointId: "art_radiocarpalis",
                        label: "dorsaalflexie",
                        rom: "40-60°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_radiocarpalis__radial_deviation",
                        jointId: "art_radiocarpalis",
                        label: "radiaaldeviatie",
                        rom: "20°",
                        endFeel: "hard capsulair",
                    }
                ),
                new Movement(
                    {
                        id: "art_radiocarpalis__ulnar_deviation",
                        jointId: "art_radiocarpalis",
                        label: "ulnairdeviatie",
                        rom: "30-40°",
                        endFeel: "capsulair",
                    }
                ),
            ],
        }
    ),
};