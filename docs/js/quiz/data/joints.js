import joints from "../../data/joints.js";

export default Object.values(joints)
    .filter(joint => joint.regionId === "spine")
    .filter(joint => joint.id !== "columna_vertebralis");