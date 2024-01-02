import {removeChildren} from "../utils.js";
import messageBus from "./message-bus.js";
import QuestionCollectionFactory from "./question-factories/QuestionCollectionFactory.js";

export default class Quiz {
    #passThroughMode = false;

    #regionId;
    #questionsFactory;

    #questions;
    #currentQuestionIndex;
    #wrapper;

    constructor({regionId}) {
        this.#regionId = regionId;
        this.#questionsFactory = new QuestionCollectionFactory({passThroughMode: this.#passThroughMode});

        this.nextQuestionCallback = this.nextQuestionCallback.bind(this);
        this.onClickRestartButton = this.onClickRestartButton.bind(this);
    }

    get #pageElementSelector() {
        return ".page-quiz-" + this.#regionId;
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
        const isLastQuestion = this.#currentQuestionIndex === this.#questions.length - 1;
        const nextQuestionButtonText = isLastQuestion ? "Klaar!" : this.#questions[this.#currentQuestionIndex + 1].previousNextQuestionButtonText;

        removeChildren(this.#wrapper);

        this.#questions[this.#currentQuestionIndex].render({parentElement: this.#wrapper, nextQuestionButtonText});
    }

    start(parentElement) {
        this.#currentQuestionIndex = -1;

        this.#questions = this.#questionsFactory.createQuestions({regionId: this.#regionId});

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