import { arrMuscles } from "../../data/muscles.js";

export default arrMuscles
    .filter(muscle => muscle.regionIds.includes("torso"));