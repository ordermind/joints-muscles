import BaseQuiz from "./base-quiz.js";
import JointQuestionsFactory from "./questions/joints/JointQuestionsFactory.js";

export default class QuizJoints extends BaseQuiz {
    constructor() {
        super(new JointQuestionsFactory());
    }

    get id() {
        return "joints";
    }
}