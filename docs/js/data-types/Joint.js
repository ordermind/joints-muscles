export default class Joint {
    #id;
    #label;
    #types;
    #movements;
    #description;
    #image;

    constructor({id, label, types, movements = [], description = '', image = ''}) {
        this.#id = id;
        this.#label = label;
        this.#types = types;
        this.#description = description;
        this.#movements = movements;
        this.#image = image;
    }

    get id() {
        return this.#id;
    }

    get label() {
        return this.#label;
    }

    get types() {
        return this.#types;
    }

    get movements() {
        return this.#movements;
    }
    
    get description() {
        return this.#description;
    }

    get image() {
        return this.#image;
    }
}