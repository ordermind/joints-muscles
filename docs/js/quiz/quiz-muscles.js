import BaseQuiz from "./base-quiz.js";
import MuscleQuestionsFactory from "./questions/muscles/MuscleQuestionsFactory.js";

export default class QuizMuscles extends BaseQuiz {
    constructor() {
        super(new MuscleQuestionsFactory());
    }

    get id() {
        return "joints";
    }
}