export default class MenuItem {
    #routeName;
    #path;
    #label;

    constructor({routeName, path, label}) {
        this.#routeName = routeName;
        this.#path = path;
        this.#label = label;
    }

    get routeName() {
        return this.#routeName;
    }

    get path() {
        return this.#path;
    }

    get label() {
        return this.#label;
    }
}