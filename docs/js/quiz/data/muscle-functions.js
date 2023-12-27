import muscleFunctions from "../../data/muscle-functions.js";
import quizJoints from "./joints.js";
import quizMuscles from "./muscles.js";

export default muscleFunctions
    .filter(muscleFunction =>
        quizJoints.some(joint => joint.id === muscleFunction.jointId)
        && quizMuscles.some(muscle => muscle.id === muscleFunction.muscleId)
    );