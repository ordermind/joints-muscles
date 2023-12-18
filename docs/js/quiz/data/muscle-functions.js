import muscleFunctions from "../../data/muscle-functions.js";
import joints from "./joints.js";

export default muscleFunctions
    .filter(muscleFunction => joints.some(joint => joint.id === muscleFunction.jointId));