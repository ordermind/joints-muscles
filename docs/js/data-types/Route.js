export default class Route {
    #paths;
    #responseHandler;
    #onLeaveHandler;

    constructor({paths, responseHandler, onLeaveHandler}) {
        this.#paths = paths;
        this.#responseHandler = responseHandler;
        this.#onLeaveHandler = onLeaveHandler;
    }

    get paths() {
        return this.#paths;
    }

    get responseHandler() {
        return this.#responseHandler;
    }

    get onLeaveHandler() {
        return this.#onLeaveHandler;
    }
}