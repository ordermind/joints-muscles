export default class Muscle {
    #id;
    #label;
    #origos;
    #insertions;
    #functions;
    #specialFunctions;
    #image;
    #description;

    constructor({id, label, description = '', origos = [], insertions = [], functions = [], specialFunctions = [], image = ''}) {
        this.#id = id;
        this.#label = label;
        this.#origos = origos;
        this.#insertions = insertions;
        this.#functions = functions;
        this.#specialFunctions = specialFunctions;
        this.#image = image;
        this.#description = description;
    }

    get id() {
        return this.#id;
    }

    get label() {
        return this.#label;
    }

    get origos() {
        return this.#origos;
    }

    get insertions() {
        return this.#insertions;
    }

    get functions() {
        return this.#functions;
    }

    get specialFunctions() {
        return this.#specialFunctions;
    }

    get image() {
        return this.#image;
    }

    get description() {
        return this.#description;
    }
}