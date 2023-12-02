import spineJoints from "./joints/spine.js";
import upperExtremityJoints from "./joints/upper-extremity.js";
import lowerExtremityJoints from "./joints/lower-extremity.js";

export default {
    ...spineJoints,
    ...upperExtremityJoints,
    ...lowerExtremityJoints,
};