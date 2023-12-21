import joints from "../../data/joints.js";

export default Object.values(joints)
    .filter(joint => joint.regionId === "spine" && joint.id !== "columna_vertebralis");