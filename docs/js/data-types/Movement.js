export default class Movement {
    #id;
    #jointId;
    #label;
    #rom;

    constructor({id, jointId, label, rom}) {
        this.#id = id;
        this.#jointId = jointId;
        this.#label = label;
        this.#rom = rom;
    }

    get id() {
        return this.#id;
    }

    get jointId() {
        return this.#jointId;
    }

    get label() {
        return this.#label;
    }

    get rom() {
        return this.#rom;
    }
}