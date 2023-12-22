import messageBus from "../message-bus.js";
import dragula from "../../../vendor/dragula/js/dragula.min.js";
import {deepEqual} from "../utils.js";

export default class DraggableQuestion {
    #question;
    #regions;
    #answers;
    #correctSolution;
    #nextQuestionButton;

    #dragula;

    constructor({question, regions, answers, correctSolution, nextQuestionButton}) {
        this.#question = question;
        this.#regions = regions;
        this.#answers = answers;
        this.#correctSolution = correctSolution;
        this.#nextQuestionButton = nextQuestionButton;

        this.onDraggableDrop = this.onDraggableDrop.bind(this);
    }

    #removePlacementClasses(element) {
        element.classList.remove("incorrect-placement");
        element.classList.remove("correct-placement");
    }

    #setCorrectPlacementClass(element) {
        this.#removePlacementClasses(element);
        element.classList.add("correct-placement");
    }

    #setIncorrectPlacementClass(element) {
        this.#removePlacementClasses(element);
        element.classList.add("incorrect-placement");
    }

    #checkCurrentSolution() {
        const currentSolution = {};

        for(const draggableContainer of document.querySelectorAll(".draggable-container[data-region-id]")) {
            const regionId = draggableContainer.getAttribute("data-region-id");

            currentSolution[regionId] = {};

            for(const draggableElement of draggableContainer.querySelectorAll(".draggable-element")) {
                currentSolution[regionId][draggableElement.getAttribute("data-id")] = draggableElement.innerText;
            }
        }

        if(deepEqual(currentSolution, this.#correctSolution)) {
            messageBus.emit("question-answered-correctly");
        } else {
            messageBus.emit("question-answered-incorrectly");
        }
    }

    onDraggableDrop(element) {
        this.#checkCurrentSolution();

        const draggableContainer = element.parentElement;
        if(!draggableContainer.getAttribute("data-region-id")) {
            this.#removePlacementClasses(element);

            return;
        }

        const regionId = draggableContainer.getAttribute("data-region-id");
        const elementId = element.getAttribute("data-id");

        if(this.#correctSolution[regionId].hasOwnProperty(elementId)) {
            this.#setCorrectPlacementClass(element);
        } else {
            this.#setIncorrectPlacementClass(element);
        }
    }

    render() {
        const draggableContainers = [];

        let wrapper = document.createElement("div");
        wrapper.classList.add("question", "text-center");
        wrapper.innerHTML = this.#question;

        const regionLabelWrapper = document.createElement("div");
        regionLabelWrapper.classList.add("row", "align-items-stretch");
        wrapper.appendChild(regionLabelWrapper);

        const poolRegionLabelColumn = document.createElement("div");
        poolRegionLabelColumn.classList.add("col", "col-6");
        regionLabelWrapper.appendChild(poolRegionLabelColumn);

        const regionWrapper = document.createElement("div");
        regionWrapper.classList.add("row", "align-items-stretch");
        wrapper.appendChild(regionWrapper);

        const poolRegionColumn = document.createElement("div");
        poolRegionColumn.classList.add("col", "col-6");
        regionWrapper.appendChild(poolRegionColumn);

        const poolDraggableContainer = document.createElement("div");
        poolDraggableContainer.classList.add("draggable-container");
        poolRegionColumn.appendChild(poolDraggableContainer);
        draggableContainers.push(poolDraggableContainer);

        for(const answer of this.#answers) {
            const answerElement = document.createElement("span");
            answerElement.classList.add("btn", "|", "draggable-element");
            answerElement.setAttribute("data-id", answer.id);
            answerElement.textContent = answer.label;

            poolDraggableContainer.appendChild(answerElement);
        }

        for(const region of this.#regions) {
            const regionLabelColumn = document.createElement("div");
            regionLabelColumn.classList.add("col", `col-${6 / this.#regions.length}`);
            regionLabelWrapper.appendChild(regionLabelColumn);

            const regionColumn = document.createElement("div");
            regionColumn.classList.add("col", `col-${6 / this.#regions.length}`);
            regionWrapper.appendChild(regionColumn);

            const regionLabelElement = document.createElement("span");
            regionLabelElement.classList.add("fw-bold");
            regionLabelElement.textContent = region.label;
            regionLabelColumn.appendChild(regionLabelElement);

            const draggableContainer = document.createElement("div");
            draggableContainer.classList.add("draggable-container");
            draggableContainer.setAttribute("data-region-id", region.id);
            regionColumn.appendChild(draggableContainer);
            draggableContainers.push(draggableContainer);
        }

        this.#nextQuestionButton.render(wrapper);

        this.#dragula = dragula(draggableContainers)
            .on("drop", this.onDraggableDrop);

        return wrapper;
    }

    cleanUp() {
        this.#nextQuestionButton.cleanUp();
        this.#dragula.destroy();
    }
}