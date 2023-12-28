export default class Joint {
    #id;
    #regionId;
    #label;
    #typeIds;
    #cpp;
    #mlpp;
    #movements;
    #description;
    #image;

    constructor({id, regionId, label, typeIds = [], cpp = '', mlpp = '', movements = [], description = '', image = ''}) {
        this.#id = id;
        this.#regionId = regionId;
        this.#label = label;
        this.#typeIds = typeIds;
        this.#cpp = cpp;
        this.#mlpp = mlpp;
        this.#description = description;
        this.#movements = movements;
        this.#image = image;
    }

    get id() {
        return this.#id;
    }

    get regionId() {
        return this.#regionId;
    }

    get label() {
        return this.#label;
    }

    get shortLabel() {
        return this.label.split("(")[0].trim();
    }

    get typeIds() {
        return this.#typeIds;
    }

    get cpp() {
        return this.#cpp;
    }

    get mlpp() {
        return this.#mlpp;
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