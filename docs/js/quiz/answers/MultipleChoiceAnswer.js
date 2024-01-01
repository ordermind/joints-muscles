export default class MultipleChoiceAnswer {
    #id;
    #label;
    #isCorrect;

    constructor({id, label, isCorrect}) {
        this.#id = id;
        this.#label = label;
        this.#isCorrect = isCorrect;
    }

    get id() {
        return this.#id;
    }

    get label() {
        return this.#label;
    }

    get isCorrect() {
        return this.#isCorrect;
    }
}