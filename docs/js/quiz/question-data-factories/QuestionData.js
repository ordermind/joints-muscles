export default class QuestionData {
    #className;
    #data;

    constructor({className, data}) {
        this.#className = className;
        this.#data = data;
    }

    get className() {
        return this.#className;
    }

    get data() {
        return this.#data;
    }

    toJSON() {
        return {
            className: this.className,
            data: this.data,
        };
    }
}