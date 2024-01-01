import messageBus from "../message-bus.js";

export default class NextQuestionButton {
    #buttonElement;

    constructor() {
        this.onClick = this.onClick.bind(this);
        this.onQuestionAnsweredCorrectly = this.onQuestionAnsweredCorrectly.bind(this);
        this.onQuestionAnsweredIncorrectly = this.onQuestionAnsweredIncorrectly.bind(this);
    }

    onQuestionAnsweredCorrectly() {
        this.#buttonElement.classList.remove("invisible");
    }

    onQuestionAnsweredIncorrectly() {
        this.#buttonElement.classList.add("invisible");
    }

    onClick() {
        messageBus.emit("clickedNextQuestionButton");
    }

    render({parentElement, buttonText}) {
        this.#buttonElement = document.createElement("button");
        this.#buttonElement.classList.add("btn", "btn-primary", "text-start", "d-inline-flex", "justify-content-between", "align-items-center", "pt-1", "pb-1", "ps-3", "pe-2", "invisible", "|", "next-question");
        this.#buttonElement.innerHTML = `<span class="fs-5">${buttonText}</span><span class="fs-2">➡️</span>`;
        this.#buttonElement.addEventListener("click", this.onClick);
        messageBus.on("question-answered-correctly", this.onQuestionAnsweredCorrectly);
        messageBus.on("question-answered-incorrectly", this.onQuestionAnsweredIncorrectly);

        const buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add("bg-light", "mt-4", "ms-auto", "me-auto", "|", "next-question-bg");
        buttonWrapper.appendChild(this.#buttonElement);

        parentElement.appendChild(buttonWrapper);
    }

    cleanUp() {
        if(this.#buttonElement) {
            this.#buttonElement.removeEventListener("click", this.onClick);
        }

        messageBus.off("question-answered-correctly", this.onQuestionAnsweredCorrectly);
        messageBus.off("question-answered-incorrectly", this.onQuestionAnsweredIncorrectly);
    }
}