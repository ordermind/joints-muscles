import messageBus from "../message-bus.js";

export default class DraggableQuestion {
    #question;
    #regions;
    #answers;
    #correctSolution;
    #nextQuestionButton;

    constructor({question, regions, answers, correctSolution, nextQuestionButton}) {
        this.#question = question;
        this.#regions = regions;
        this.#answers = answers;
        this.#correctSolution = correctSolution;
        this.#nextQuestionButton = nextQuestionButton;
    }

    render() {
        let wrapper = document.createElement("div");
        wrapper.classList.add("question", "text-center");
        wrapper.innerHTML = this.#question;

        const regionWrapper = document.createElement("div");
        regionWrapper.classList.add("row");
        wrapper.appendChild(regionWrapper);

        const poolRegionColumn = document.createElement("div");
        poolRegionColumn.classList.add("col", "col-6");
        regionWrapper.appendChild(poolRegionColumn);

        const poolDraggableContainer = document.createElement("div");
        poolDraggableContainer.classList.add("draggable-container");
        poolRegionColumn.appendChild(poolDraggableContainer);

        for(const answer of this.#answers) {
            const answerElement = document.createElement("span");
            answerElement.classList.add("btn", "|", "draggable-element");
            answerElement.setAttribute("data-id", answer.id);
            answerElement.textContent = answer.label;

            poolDraggableContainer.appendChild(answerElement);
        }

        for(const regionName of this.#regions) {
            const regionColumn = document.createElement("div");
            regionColumn.classList.add("col", `col-${6 / this.#regions.length}`);
            regionWrapper.appendChild(regionColumn);

            const regionNameElement = document.createElement("span");
            regionNameElement.textContent = regionName;
            regionColumn.appendChild(regionNameElement);

            const draggableContainer = document.createElement("div");
            draggableContainer.classList.add("draggable-container");
            regionColumn.appendChild(draggableContainer);
        }

        this.#nextQuestionButton.render(wrapper);

        messageBus.emit("question-answered-correctly");

        return wrapper;
    }

    cleanUp() {
        this.#nextQuestionButton.cleanUp();
    }
}