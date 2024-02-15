export default class JointMuscleFunction {
    #id;
    #jointId;
    #muscleId;
    #movementId;
    #movementLabelOverride;
    #isPrimeMover;
    #notes;

    constructor({id = null, jointId = null, muscleId, movementId, movementLabelOverride = null, isPrimeMover, notes = []}) {
        this.#id = id ?? `${muscleId}__${movementId}`;
        this.#jointId = jointId ?? movementId.split("__")[0];
        this.#muscleId = muscleId;
        this.#movementId = movementId;
        this.#movementLabelOverride = movementLabelOverride;
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

    get movementLabelOverride() {
        return this.#movementLabelOverride;
    }

    get isPrimeMover() {
        return this.#isPrimeMover;
    }

    get notes() {
        return this.#notes;
    }

    toJSON() {
        return {
            id: this.id,
            jointId: this.jointId,
            muscleId: this.muscleId,
            movementId: this.movementId,
            movementLabelOverride: this.movementLabelOverride,
            isPrimeMover: this.isPrimeMover,
            notes: this.notes,
        }
    }

    static fromJSON(json) {
        return new JointMuscleFunction(JSON.parse(json));
    }
}
