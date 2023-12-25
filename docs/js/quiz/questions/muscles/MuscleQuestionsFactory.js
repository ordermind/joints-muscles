import { shuffle } from "../../utils.js";
import MuscleNameQuestionFactory from "./MuscleNameQuestionsFactory.js";
import MuscleAnatomyQuestionFactory from "./MuscleAnatomyQuestionsFactory.js";
import quizMuscles from "../../data/muscles.js";
import quizMuscleFunctions from "../../data/muscle-functions.js";

export default class MuscleQuestionsFactory {
    #muscleNameQuestionsFactory;
    #muscleAnatomyQuestionsFactory;

    constructor() {
        this.#muscleNameQuestionsFactory = new MuscleNameQuestionFactory();
        this.#muscleAnatomyQuestionsFactory = new MuscleAnatomyQuestionFactory();
    }

    create() {
        const shuffledMuscles = shuffle(quizMuscles);

        const muscleNameQuestions = this.#muscleNameQuestionsFactory.create({quizMuscles: shuffledMuscles, quizMuscleFunctions});
        const muscleAnatomyQuestions = this.#muscleAnatomyQuestionsFactory.create({quizMuscles: shuffledMuscles, quizMuscleFunctions});

        const questions = [];

        for(const [index, muscleNameQuestion] of muscleNameQuestions.entries()) {
            questions.push(muscleNameQuestion);
            questions.push(muscleAnatomyQuestions[shuffledMuscles[index].id]);
        }

        return questions;
    }
}