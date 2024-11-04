export default class Region {
    #id;
    #label;
    #childrenIds;

    constructor(id, label, childrenIds = []) {
        this.#id = id;
        this.#label = label;
        this.#childrenIds = childrenIds;
    }

    get id() {
        return this.#id;
    }

    get label() {
        return this.#label;
    }

    get childrenIds() {
        return this.#childrenIds;
    }
}