import { objJoints } from "../data/joints.js";

export default class Muscle {
    #id;
    #label;
    #regionIdsOverride;
    #origos;
    #insertions;
    #functions;
    #specialFunctions;
    #image;
    #description;

    constructor({id, label, regionIds = [], description = '', origos = [], insertions = [], functions = [], specialFunctions = [], image = ''}) {
        this.#id = id;
        this.#label = label;
        this.#regionIdsOverride = regionIds;
        this.#origos = origos;
        this.#insertions = insertions;
        this.#functions = functions;
        this.#specialFunctions = specialFunctions;
        this.#image = image;
        this.#description = description;
    }

    get id() {
        return this.#id;
    }

    get label() {
        return this.#label;
    }

    get origos() {
        return this.#origos;
    }

    get origosWithoutPrefix() {
        return this.origos.map(origo => origo.replace(/^[^:]+:\s*/, ""));
    }

    get insertions() {
        return this.#insertions;
    }

    get insertionsWithoutPrefix() {
        return this.insertions.map(insertion => insertion.replace(/^[^:]+:\s*/, ""));
    }

    get functions() {
        return this.#functions;
    }

    get specialFunctions() {
        return this.#specialFunctions;
    }

    get image() {
        return this.#image;
    }

    get description() {
        return this.#description;
    }

    get regionIds() {
        if(this.#regionIdsOverride.length) {
            return this.#regionIdsOverride;
        }

        if(this.functions.length) {
            return Array.from(
                new Set(this.functions.map(jointFunction => objJoints[jointFunction.jointId].regionId))
            );
        }

        throw new Error(`The muscle ${this.label} does not have any joint functions. Please set the region ids manually.`);
    }
}