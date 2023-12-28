import { arrJoints } from "../../data/joints.js";

export default arrJoints
    .filter(joint => joint.regionId === "spine" && joint.id !== "columna_vertebralis");