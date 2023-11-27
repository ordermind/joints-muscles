export default class Muscle {
    #id;
    #label;
    #description;
    #origos;
    #insertions;
    #image;

    constructor({id, label, description = '', origos = [], insertions = [], image = ''}) {
        this.#id = id;
        this.#label = label;
        this.#description = description;
        this.#origos = origos;
        this.#insertions = insertions;
        this.#image = image;
    }

    get id() {
        return this.#id;
    }

    get label() {
        return this.#label;
    }

    get description() {
        return this.#description;
    }

    get origos() {
        return this.#origos;
    }

    get insertions() {
        return this.#insertions;
    }

    get image() {
        return this.#image;
    }
}