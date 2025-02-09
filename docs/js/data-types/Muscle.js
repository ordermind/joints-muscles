import { objRegions } from "../data/regions.js";
import { uniqueArray } from "../utils.js";

export default class Muscle {
    #id;
    #label;
    #regionIdsOverride;
    #origos;
    #insertions;
    #innervation;
    #functions;
    #specialFunctions;
    #image;
    #description;

    constructor({ id, label, regionIds = [], description = '', origos = [], insertions = [], innervation = [], functions = [], specialFunctions = [], image = '' }) {
        this.#id = id;
        this.#label = label;
        this.#regionIdsOverride = regionIds;
        this.#origos = origos;
        this.#insertions = insertions;
        this.#innervation = innervation;
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

    get insertions() {
        return this.#insertions;
    }

    get innervation() {
        return this.#innervation;
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

    #getRegionIds(objJoints) {
        if (this.#regionIdsOverride.length) {
            return this.#regionIdsOverride;
        }

        if (this.functions.length) {
            return uniqueArray(this.functions.map(jointFunction => objJoints[jointFunction.jointId].regionId));
        }

        throw new Error(`The muscle ${this.label} does not have any joint functions. Please set the region ids manually.`);
    }

    getRegionIds(objJoints, includeParent = false) {
        const regionIds = this.#getRegionIds(objJoints);

        if (!includeParent) {
            return regionIds;
        }

        return uniqueArray(regionIds.flatMap(regionId => objRegions[regionId].idOfSelfAndParent));
    }

    hasPrimeMoverJointFunctions() {
        return this.functions.some(jointFunction => jointFunction.isPrimeMover === true);
    }

    hasAssistantJointFunctions() {
        return this.functions.some(jointFunction => jointFunction.isPrimeMover === false);
    }

    toJSON() {
        return {
            id: this.id,
            label: this.label,
            origos: this.origos,
            insertions: this.insertions,
            functions: this.functions,
            specialFunctions: this.specialFunctions,
            image: this.image,
            description: this.description,
        };
    }
}