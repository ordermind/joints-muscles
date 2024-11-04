export default class Region {
    #id;
    #label;
    #parentId;
    #childrenIds;

    constructor({ id, label, parentId = null, childrenIds = [] }) {
        this.#id = id;
        this.#label = label;
        this.#parentId = parentId;
        this.#childrenIds = childrenIds;
    }

    get id() {
        return this.#id;
    }

    get label() {
        return this.#label;
    }

    get parentId() {
        return this.#parentId;
    }

    get childrenIds() {
        return this.#childrenIds;
    }

    get idOfSelfAndParent() {
        return [this.id, this.parentId].filter(id => id !== null);
    }

    toJSON() {
        return {
            id: this.id,
            label: this.label,
            parentId: this.parentId,
            childrenIds: this.childrenIds,
        };
    }
}