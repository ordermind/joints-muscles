export default class AnatomicStructure {
    #label;
    #notes;
    #conflictingWith; // For quiz purposes, to prevent situations where multiple answers can be correct

    constructor({ label, notes = [], conflictingWith = [] }) {
        this.#label = label;
        this.#notes = notes;
        this.#conflictingWith = conflictingWith;
    }

    get label() {
        return this.#label;
    }

    get notes() {
        return this.#notes;
    }

    get conflictingWith() {
        return this.#conflictingWith;
    }

    toJSON() {
        return {
            label: this.label,
            notes: this.notes,
            conflictingWith: this.conflictingWith,
        };
    }
}