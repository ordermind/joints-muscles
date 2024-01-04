/**
 * This class is meant to use for muscle functions that are not directly related to a certain joint.
 */
export default class SpecialMuscleFunction {
    #id;
    #muscleId;
    #functionDescription;
    #notes;

    constructor({id, muscleId, functionDescription, notes = []}) {
        this.#id = id;
        this.#muscleId = muscleId;
        this.#functionDescription = functionDescription;
        this.#notes = notes;
    }

    get id() {
        return this.#id;
    }

    get muscleId() {
        return this.#muscleId;
    }

    get functionDescription() {
        return this.#functionDescription;
    }

    get notes() {
        return this.#notes;
    }
}