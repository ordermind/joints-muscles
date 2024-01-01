import JointNameQuestionsFactory from "./JointNameQuestionsFactory.js";
import JointFunctionsQuestionsFactory from "./JointFunctionsQuestionsFactory.js";
import JointROMQuestionsFactory from "./JointROMQuestionsFactory.js";
import { shuffle } from "../../utils.js";
import quizJoints from "../../data/joints.js";

export default class JointQuestionsFactory {
    #jointNameQuestionsFactory;
    #jointROMQuestionsFactory;
    #jointFunctionsQuestionsFactory;

    constructor() {
        this.#jointNameQuestionsFactory = new JointNameQuestionsFactory();
        this.#jointROMQuestionsFactory = new JointROMQuestionsFactory();
        this.#jointFunctionsQuestionsFactory = new JointFunctionsQuestionsFactory();
    }

    create() {
        const shuffledJoints = shuffle(quizJoints);

        const jointNameQuestions = this.#jointNameQuestionsFactory.create({joints: shuffledJoints});
        const jointROMQuestions = this.#jointROMQuestionsFactory.create({joints: shuffledJoints});
        const jointFunctionsQuestions = this.#jointFunctionsQuestionsFactory.create({joints: shuffledJoints});

        const questions = [];

        for(const [index, jointNameQuestion] of jointNameQuestions.entries()) {
            questions.push(jointNameQuestion);

            if(jointROMQuestions.hasOwnProperty(shuffledJoints[index].id)) {
                questions.push(jointROMQuestions[shuffledJoints[index].id]);
            }

            if(jointFunctionsQuestions.hasOwnProperty(shuffledJoints[index].id)) {
                for(const jointFunctionsQuestion of jointFunctionsQuestions[shuffledJoints[index].id]) {
                    questions.push(jointFunctionsQuestion);
                }
            }
        }

        return questions;
    }
}