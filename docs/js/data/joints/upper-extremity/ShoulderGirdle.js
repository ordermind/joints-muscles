import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default [
    new Joint(
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
    new Joint(
        {
            id: "art_acromioclavicularis",
            regionId: "upper_extremity",
            label: "art. acromioclavicularis (het AC-gewricht)",
            typeIds: ["junctura_synovialis", "art_simplex", "art_plana"],
            cpp: "90° abductie van [Link type=\"Joint\" targetId=\"art_humeri\" label=\"art. humeri\"]",
            mlpp: "anatomische positie",
            description: "De bewegingen van dit gewricht zijn geringe translatie en rotatie rond de lengte-as van de clavicula."
        }
    ),
    new Joint(
        {
            id: "art_sternoclavicularis",
            regionId: "upper_extremity",
            label: "art. sternoclavicularis (het SC-gewricht)",
            typeIds: ["junctura_synovialis", "art_complexa", "art_sellaris"],
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
];