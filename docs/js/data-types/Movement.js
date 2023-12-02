export default class Movement {
    #id;
    #jointId;
    #label;
    #rom;
    #endFeel;
    #description;

    constructor({id, jointId, label, rom, endFeel = '', description = ''}) {
        this.#id = id;
        this.#jointId = jointId;
        this.#label = label;
        this.#rom = rom;
        this.#endFeel = endFeel;
        this.#description = description;
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

    get endFeel() {
        return this.#endFeel;
    }

    get description() {
        return this.#description;
    }
}