export default class TextInputAnswer {
    #id;
    #label;
    #suffix;
    #correctAnswer;

    constructor({id, label = "", suffix = "", correctAnswer}) {
        this.#id = id;
        this.#label = label;
        this.#suffix = suffix;
        this.#correctAnswer = correctAnswer;
    }

    get id() {
        return this.#id;
    }

    get label() {
        return this.#label;
    }

    get suffix() {
        return this.#suffix;
    }

    get correctAnswer() {
        return this.#correctAnswer;
    }
}