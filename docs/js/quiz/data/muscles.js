import muscles from "../../data/muscles.js";

export default Object.values(muscles)
.filter(muscle => muscle.specialFunctions.length);