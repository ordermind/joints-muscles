import muscles from "./muscles.js";

export default muscles.flatMap(muscle => muscle.functions);