import jointTypes from "./data/joint-types.js";
import joints from "./data/joints.js";
import muscles from "./data/muscles.js";
import muscleFunctions from "./data/muscle-functions.js";
import router from "./router.js";

console.log('joint types', jointTypes);
console.log('joints', joints);
console.log('muscles', muscles);
console.log('muscle functions', muscleFunctions);

router.resolve();
