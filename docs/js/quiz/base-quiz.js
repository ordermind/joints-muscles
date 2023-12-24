import {removeChildren} from "../utils.js";
import messageBus from "./message-bus.js";

export default class BaseQuiz {
    #questionsFactory;

    #questions;
    #currentQuestionIndex;
    #wrapper;

    constructor(questionsFactory) {
        this.#questionsFactory = questionsFactory;

        this.nextQuestionCallback = this.nextQuestionCallback.bind(this);
        this.onClickRestartButton = this.onClickRestartButton.bind(this);
    }

    get #pageElementSelector() {
        return ".page-quiz-" + this.id;
    }

    get id() {
        throw new Error('Please implement this method in the subclass');
    }

    nextQuestionCallback() {
        this.#questions[this.#currentQuestionIndex].cleanUp();
        this.#showNextQuestion();
    }

    onClickRestartButton() {
        document.querySelector("button.restart").removeEventListener("click", this.onClickRestartButton);

        this.cleanUp();

        const pageElement = document.querySelector(this.#pageElementSelector);
        removeChildren(pageElement);

        this.start(pageElement);
    }

    #renderFinishedScreen() {
        const finishedScreen = `
<h1 class="display-1 fs-1">Gefeliciteerd!</h1>
<p>Je hebt alle vragen beantwoord!</p>
<button class="btn btn-primary btn-lg | restart">Opnieuw spelen</button>
        `.trim();

        const template = document.createElement("template");
        template.innerHTML = finishedScreen;

        const wrapper = document.querySelector(this.#pageElementSelector + " .inner-wrapper");
        removeChildren(wrapper);

        wrapper.append(...template.content.children);

        wrapper.querySelector("button.restart").addEventListener("click", this.onClickRestartButton);
    }

    #showNextQuestion() {
        this.#currentQuestionIndex++;

        if(this.#currentQuestionIndex > this.#questions.length - 1) {
            this.#renderFinishedScreen();
        } else {
            this.#renderQuestion();
        }

        const questionText = document.getElementById("question-text");
        if(questionText) {
            questionText.scrollIntoView();
        }
    }

    #renderQuestion() {
        const content = this.#questions[this.#currentQuestionIndex].render();

        removeChildren(this.#wrapper);

        this.#wrapper.appendChild(content);
    }

    start(parentElement) {
        this.#currentQuestionIndex = -1;

        this.#questions = this.#questionsFactory.create();

        const wrapper = document.createElement("div");
        wrapper.classList.add("d-flex", "flex-row", "justify-content-center");

        this.#wrapper = document.createElement("div");
        this.#wrapper.classList.add("d-flex", "flex-column", "justify-content-center", "inner-wrapper");

        this.#showNextQuestion();

        wrapper.appendChild(this.#wrapper);

        parentElement.appendChild(wrapper);

        messageBus.on("clickedNextQuestionButton", this.nextQuestionCallback);
    }

    cleanUp() {
        for(const question of this.#questions) {
            question.cleanUp();
        }

        messageBus.off("clickedNextQuestionButton", this.nextQuestionCallback);
    }
}