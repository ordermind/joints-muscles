export default class Joint {
    #id;
    #childrenIds;
    #regionId;
    #label;
    #typeIds;
    #cpp;
    #mlpp;
    #movements;
    #description;
    #image;
    #hideInList;
    #hideInQuiz;

    constructor({ id, childrenIds = [], regionId, label, typeIds = [], cpp = '', mlpp = '', movements = [], description = '', image = '', hideInList = false, hideInQuiz = false }) {
        this.#id = id;
        this.#childrenIds = childrenIds;
        this.#regionId = regionId;
        this.#label = label;
        this.#typeIds = typeIds;
        this.#cpp = cpp;
        this.#mlpp = mlpp;
        this.#description = description;
        this.#movements = movements;
        this.#image = image;
        this.#hideInList = hideInList;
        this.#hideInQuiz = hideInQuiz;
    }

    get id() {
        return this.#id;
    }

    get childrenIds() {
        return this.#childrenIds;
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

    get firstDescription() {
        if (!Array.isArray(this.description)) {
            return this.description;
        }

        return this.description[0];
    }

    get otherDescriptions() {
        if (!Array.isArray(this.description)) {
            return [];
        }

        return this.description.slice(1);
    }

    get image() {
        return this.#image;
    }

    get hideInList() {
        return this.#hideInList;
    }

    get hideInQuiz() {
        return this.#hideInQuiz;
    }
}