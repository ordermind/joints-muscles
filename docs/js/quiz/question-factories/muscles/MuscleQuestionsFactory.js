import { shuffle } from "../../utils.js";
import MuscleNameQuestionFactory from "./MuscleNameQuestionsFactory.js";
import MuscleAnatomyQuestionFactory from "./MuscleAnatomyQuestionsFactory.js";
import MuscleJointFunctionsQuestionsFactory from "./MuscleJointFunctionsQuestionsFactory.js";
import MuscleSpecialFunctionsQuestionsFactory from "./MuscleSpecialFunctionsQuestionsFactory.js";
import quizMuscles from "../../data/muscles.js";
import quizMuscleFunctions from "../../data/muscle-functions.js";

export default class MuscleQuestionsFactory {
    #muscleNameQuestionsFactory;
    #muscleAnatomyQuestionsFactory;
    #muscleJointFunctionsQuestionsFactory;
    #muscleSpecialFunctionsQuestionsFactory;

    constructor() {
        this.#muscleNameQuestionsFactory = new MuscleNameQuestionFactory();
        this.#muscleAnatomyQuestionsFactory = new MuscleAnatomyQuestionFactory();
        this.#muscleJointFunctionsQuestionsFactory = new MuscleJointFunctionsQuestionsFactory();
        this.#muscleSpecialFunctionsQuestionsFactory = new MuscleSpecialFunctionsQuestionsFactory();
    }

    create() {
        const shuffledMuscles = shuffle(quizMuscles);

        const muscleNameQuestions = this.#muscleNameQuestionsFactory.create({quizMuscles: shuffledMuscles, quizMuscleFunctions});
        const muscleAnatomyQuestions = this.#muscleAnatomyQuestionsFactory.create({quizMuscles: shuffledMuscles, quizMuscleFunctions});
        const muscleJointFunctionsQuestions = this.#muscleJointFunctionsQuestionsFactory.create({quizMuscles: shuffledMuscles, quizMuscleFunctions});
        const muscleSpecialFunctionsQuestions = this.#muscleSpecialFunctionsQuestionsFactory.create({quizMuscles: shuffledMuscles, quizMuscleFunctions});

        const questions = [];

        for(const [index, muscleNameQuestion] of muscleNameQuestions.entries()) {
            questions.push(muscleNameQuestion);
            questions.push(muscleAnatomyQuestions[shuffledMuscles[index].id]);
            if(muscleJointFunctionsQuestions.hasOwnProperty(shuffledMuscles[index].id)) {
                questions.push(muscleJointFunctionsQuestions[shuffledMuscles[index].id]);
            }
            if(muscleSpecialFunctionsQuestions.hasOwnProperty(shuffledMuscles[index].id)) {
                questions.push(muscleSpecialFunctionsQuestions[shuffledMuscles[index].id]);
            }
        }

        return questions;
    }
}