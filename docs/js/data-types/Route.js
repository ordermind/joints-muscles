export default class Route {
    #paths;
    #responseHandler;

    constructor({paths, responseHandler}) {
        this.#paths = paths;
        this.#responseHandler = responseHandler;
    }

    get paths() {
        return this.#paths;
    }

    get responseHandler() {
        return this.#responseHandler;
    }
}