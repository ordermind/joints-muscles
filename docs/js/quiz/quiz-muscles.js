import BaseQuiz from "./base-quiz.js";
import MuscleQuestionsFactory from "./question-factories/muscles/MuscleQuestionsFactory.js";

export default class QuizMuscles extends BaseQuiz {
    constructor() {
        super(new MuscleQuestionsFactory());
    }

    get id() {
        return "muscles";
    }
}