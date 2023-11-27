export default class JointType {
    #id;
    #label;
    #description;
    #image;

    constructor({id, label, description = '', image = ''}) {
        this.#id = id;
        this.#label = label;
        this.#description = description;
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

    get image() {
        return this.#image;
    }
}