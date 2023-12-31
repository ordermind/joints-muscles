import { arrJoints } from "../../data/joints.js";

export default arrJoints
    .filter(joint => joint.regionId === "torso" && joint.id !== "columna_vertebralis");