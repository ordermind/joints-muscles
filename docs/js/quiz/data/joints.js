import { arrJoints } from "../../data/joints.js";

const skipJoints = [
    "columna_vertebralis",
    "artt_metacarpophalangeae_2_5",
    "artt_interphalangeae_proximales_manuum_2_5",
    "artt_interphalangeae_distales_manuum_2_5",
    "artt_metatarsophalangeae_2_5",
    "artt_interphalangeae_proximales_pedum_2_5",
    "artt_interphalangeae_distales_pedum_2_5",
];

export default arrJoints
    .filter(joint => {
        return joint.regionId === "torso"
        && !skipJoints.includes(joint.id)
    });