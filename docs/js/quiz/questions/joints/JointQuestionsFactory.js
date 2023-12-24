import JointNameQuestionsFactory from "./JointNameQuestionsFactory.js";
import JointFunctionsQuestionsFactory from "./JointFunctionsQuestionsFactory.js";
import { shuffle } from "../../utils.js";
import quizJoints from "../../data/joints.js";

export default class JointQuestionsFactory {
    #jointNameQuestionsFactory;
    #jointFunctionsQuestionsFactory;

    constructor() {
        this.#jointNameQuestionsFactory = new JointNameQuestionsFactory();
        this.#jointFunctionsQuestionsFactory = new JointFunctionsQuestionsFactory();
    }

    create() {
        const shuffledJoints = shuffle(quizJoints);

        const jointNameQuestions = this.#jointNameQuestionsFactory.create({joints: shuffledJoints});
        const jointFunctionsQuestions = this.#jointFunctionsQuestionsFactory.create({joints: shuffledJoints});

        const questions = [];

        for(const [index, jointNameQuestion] of jointNameQuestions.entries()) {
            questions.push(jointNameQuestion);
            for(const jointFunctionsQuestion of jointFunctionsQuestions[shuffledJoints[index].id]) {
                questions.push(jointFunctionsQuestion);
            }
        }

        return questions;
    }
}