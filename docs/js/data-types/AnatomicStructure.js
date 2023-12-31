export default class AnatomicStructure {
    #label;
    #notes;

    constructor({label, notes = []}) {
        this.#label = label;
        this.#notes = notes;
    }

    get label() {
        return this.#label;
    }

    get notes() {
        return this.#notes;
    }
}