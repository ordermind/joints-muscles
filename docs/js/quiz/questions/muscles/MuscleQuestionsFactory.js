import { shuffle } from "../../utils.js";
import MuscleNameQuestionFactory from "./MuscleNameQuestionsFactory.js";
import quizMuscles from "../../data/muscles.js";
import quizMuscleFunctions from "../../data/muscle-functions.js";

export default class MuscleQuestionsFactory {
    #muscleNameQuestionsFactory;

    constructor() {
        this.#muscleNameQuestionsFactory = new MuscleNameQuestionFactory();
    }

    create() {
        const shuffledMuscles = shuffle(quizMuscles);

        return this.#muscleNameQuestionsFactory.create(shuffledMuscles, quizMuscleFunctions);
    }
}