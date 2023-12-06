export default class MuscleFunction {
    #id;
    #jointId;
    #muscleId;
    #movementId;
    #isPrimeMover;
    #notes;

    constructor({id, jointId, muscleId, movementId, isPrimeMover, notes = []}) {
        this.#id = id;
        this.#jointId = jointId;
        this.#muscleId = muscleId;
        this.#movementId = movementId;
        this.#isPrimeMover = isPrimeMover;
        this.#notes = notes;
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

    get notes() {
        return this.#notes;
    }
}

