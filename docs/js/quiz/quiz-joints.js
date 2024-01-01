import BaseQuiz from "./base-quiz.js";
import JointQuestionsFactory from "./question-factories/joints/JointQuestionsFactory.js";

export default class QuizJoints extends BaseQuiz {
    constructor() {
        super(new JointQuestionsFactory());
    }

    get id() {
        return "joints";
    }
}