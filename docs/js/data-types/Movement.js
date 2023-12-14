export default class Movement {
    #id;
    #jointId;
    #label;
    #labelNotes;
    #rom;
    #romNotes;
    #endFeel;
    #description;

    constructor({id, jointId, label, labelNotes = [], rom, romNotes = [], endFeel = '', description = ''}) {
        this.#id = id;
        this.#jointId = jointId;
        this.#label = label;
        this.#labelNotes = labelNotes;
        this.#rom = rom;
        this.#romNotes = romNotes;
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

    get labelNotes() {
        return this.#labelNotes;
    }

    get rom() {
        return this.#rom;
    }

    get romNotes() {
        return this.#romNotes;
    }

    get endFeel() {
        return this.#endFeel;
    }

    get description() {
        return this.#description;
    }
}