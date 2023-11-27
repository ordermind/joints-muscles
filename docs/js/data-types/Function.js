export default class Function {
    #id;
    #jointId;
    #muscleId;
    #movementId;
    #isPrimeMover;

    constructor({id, jointId, muscleId, movementId, isPrimeMover = false}) {
        this.#id = id;
        this.#jointId = jointId;
        this.#muscleId = muscleId;
        this.#movementId = movementId;
        this.#isPrimeMover = isPrimeMover;
    }

    get id() {
        return this.#id;
    }

    get jointId() {
        return this.#jointId;
    }

    get muscleId() {
        return this.#muscleId;
    }

    get movementId() {
        return this.#movementId;
    }

    get isPrimeMover() {
        return this.#isPrimeMover;
    }
}

