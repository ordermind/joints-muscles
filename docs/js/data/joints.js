import Joint from "../data-types/Joint.js";
import jointTypes from "./joint-types.js";

export default {
    // Spine
    columna_vertebralis: new Joint({id: "columna_vertebralis", label: "columna vertebralis", types: [jointTypes.art_complexa]}),
    head_joints: new Joint({id: "head_joints", label: "art. atlantooccipitalis / artt. atlantoaxiales", types: [jointTypes.art_complexa]}),
    columna_vertebralis_cervicalis: new Joint({id: "columna_vertebralis_cervicalis", label: "columna vertebralis, pars cervicalis", types: [jointTypes.art_complexa]}),
    columna_vertebralis_thoracalis: new Joint({id: "columna_vertebralis_thoracalis", label: "columna vertebralis, pars thoracalis", types: [jointTypes.art_complexa]}),
    columna_vertebralis_lumbalis: new Joint({id: "columna_vertebralis_lumbalis", label: "columna vertebralis, pars lumbalis", types: [jointTypes.art_complexa]}),
    
    // Upper extremity
    shoulder_girdle: new Joint({id: "shoulder_girdle", label: "schoudergordel", description: `
De schoudergordel bestaat uit een zeer mobiel en coördinatief hoogwaardig systeem, met vele onderdelen die perfect in elkaar grijpen.  Stoornissen in dit systeem kunnen leiden tot beperkingen in activiteiten, waardoor zelfs het participeren in de maatschappij kan worden belemmerd. 
De verbindingen tussen de botdelen van de schouderregio worden in twee hoofdgroepen verdeeld:
- Het glenohumerale systeem
- Het scapulothoracale systeem

Het scapulothoracale systeem bestaat weer uit een primair- en een secundair gedeelte.
Het glenohumerale systeem bestaat uit:
- de [Link type="Joint" id="art_humeri" label="art. humeri"]
- de junctura subacromialis (ook wel art. subacromialis of art. suprahumeralis genoemd)
- het bicipitale glijmechanisme

Het primaire scapulothoracale systeem bestaat uit: 

- de [Link type="Joint" id="art_acromioclavicularis" label="art. acromioclavicularis"] ( = het AC- gewicht)
- de [Link type="Joint" id="art_sternoclaviculairs" label="art. sternoclaviculairs"] (= het SC-gewricht)
- de junctura scapulothoracalis (of junctura scapulocostalis genoemd)

Het secundaire scapulothoracale systeem bestaande uit: 
- de [Link type="Joint" id="art_costovertebralis" label="art. costovertebralis"]
- de [Link type="Joint" id="art_costotransversaria" label="art. costotransversaria"]
- de [Link type="Joint" id="art_intervertebralis" label="art. intervertebralis"]
`
    }),
    art_humeri: new Joint({id: "art_humeri", label: "art. humeri", types: [jointTypes.art_simplex, jointTypes.art_sphaeroidea]}),
    art_cubiti: new Joint({id: "art_cubiti", label: "art. cubiti", types: [jointTypes.art_composita, jointTypes.art_trochoidea, jointTypes.art_ginglymus], description: `
Het ellebooggewricht bestaat uit drie gewrichten:
- [Link type="Joint" id="art_humeroradialis" label="art. humeroradialis"] (flexie, extensie, pronatie, supinatie)
- [Link type="Joint" id="art_humeroulnaris" label="art. humeroulnaris"] (flexie, extensie)
- [Link type="Joint" id="art_radioulnaris" label="art. radioulnaris"] (pronatie, supinatie)
`
    }),
    art_humeroradialis: new Joint({id: "art_humeroradialis", label: "art. humeroradialis", types: [jointTypes.art_simplex, jointTypes.art_sphaeroidea]}),
    art_humeroulnaris: new Joint({id: "art_humeroulnaris", label: "art. humeroulnaris", types: [jointTypes.art_simplex, jointTypes.art_ginglymus]}),
    art_radioulnaris: new Joint({id: "art_radioulnaris", label: "art. radioulnaris", types: [jointTypes.art_duplex, jointTypes.art_complexa, jointTypes.art_trochoidea]}),
    art_radiocarpalis: new Joint({id: "art_radiocarpalis", label: "art. radiocarpalis (polsgewricht)", types: [jointTypes.art_simplex, jointTypes.art_ellipsoidea]}),

    // Lower extremity
    art_coxae: new Joint({id: "art_coxae", label: "art. coxae (heupgewricht)", types: [jointTypes.art_simplex, jointTypes.art_sphaeroidea]}),
    art_genus: new Joint({id: "art_genus", label: "art. genus", types: [jointTypes.art_complexa, jointTypes.art_ginglymus, jointTypes.art_trochoidea]}),
    art_talocruralis: new Joint({id: "art_talocruralis", label: "art. talocruralis (bovenste spronggewricht)", types: [jointTypes.art_composita, jointTypes.art_ginglymus]}),
    art_talotarsalis: new Joint({id: "art_talotarsalis", label: "art. talotarsalis (onderste spronggewricht)", types: [jointTypes.art_composita], description: `
Het onderste spronggewricht bestaat uit art. talocalcaneonavicularis + art.subtalaris.
`
    }),
}