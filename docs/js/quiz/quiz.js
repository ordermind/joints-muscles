import {removeChildren} from "../utils.js";
import messageBus from "./message-bus.js";
import transformQuestionDataToQuestion from "./question-data-transformer.js";

export default class Quiz {
    /** Set this to true in order to walk through a quiz quickly by not having to answer any questions. */
    #passThroughMode = false;

    #regionId;
    #questionsFilter;

    #quizDataLoaderWorker;
    #questionsData;
    #currentQuestion;
    #currentQuestionIndex;
    #wrapper;

    constructor({regionId, questionsFilter}) {
        this.#regionId = regionId;
        this.#questionsFilter = questionsFilter;

        this.nextQuestionCallback = this.nextQuestionCallback.bind(this);
        this.onClickRestartButton = this.onClickRestartButton.bind(this);
        this.onQuizDataLoaderWorkerMessage = this.onQuizDataLoaderWorkerMessage.bind(this);
    }

    get #pageElementSelector() {
        return ".page-quiz-" + this.#regionId;
    }

    nextQuestionCallback() {
        this.#currentQuestion.cleanUp();
        this.#showNextQuestion();
    }

    onClickRestartButton() {
        document.querySelector("button.restart").removeEventListener("click", this.onClickRestartButton);

        this.cleanUp();

        const pageElement = document.querySelector(this.#pageElementSelector);
        removeChildren(pageElement);

        this.start(pageElement);
    }

    onQuizDataLoaderWorkerMessage(e) {
        const {type, data} = e.data;

        if(type !== "TYPE_FINISHED") {
            return;
        }

        this.#questionsData = JSON.parse(data);
        this.#onQuizReady();
    }

    #onQuizReady() {
        this.#showNextQuestion();
        messageBus.on("clickedNextQuestionButton", this.nextQuestionCallback);
    }

    #initQuizDataLoaderWorker() {
        this.#quizDataLoaderWorker = new Worker("./js/webworkers/quiz-data-loader.js", {type: "module"});
        this.#quizDataLoaderWorker.postMessage({
            type: "TYPE_START",
            data: {
                regionId: this.#regionId,
                questionsFilter: this.#questionsFilter,
                passThroughMode: this.#passThroughMode,
            },
        });
        this.#quizDataLoaderWorker.onmessage = this.onQuizDataLoaderWorkerMessage;
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

        if(this.#currentQuestionIndex > this.#questionsData.length - 1) {
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
        const isLastQuestionOfChain = this.#questionsData[this.#currentQuestionIndex].isLastQuestionOfChain;
        const isLastQuestionOfQuiz = this.#currentQuestionIndex === this.#questionsData.length - 1;
        const nextQuestionButtonText = isLastQuestionOfQuiz ? "Klaar!" : isLastQuestionOfChain ? "Volgende vraag" : this.#questionsData[this.#currentQuestionIndex + 1].data.previousNextQuestionButtonText;
        this.#currentQuestion = transformQuestionDataToQuestion(this.#questionsData[this.#currentQuestionIndex]);

        removeChildren(this.#wrapper);

        this.#currentQuestion.render({parentElement: this.#wrapper, nextQuestionButtonText});
    }

    start(parentElement) {
        this.#currentQuestionIndex = -1;

        this.#initQuizDataLoaderWorker();

        const wrapper = document.createElement("div");
        wrapper.classList.add("d-flex", "flex-row", "justify-content-center");

        this.#wrapper = document.createElement("div");
        this.#wrapper.classList.add("d-flex", "flex-column", "justify-content-center", "inner-wrapper");

        this.#wrapper.innerHTML = `
<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
        `.trim();

        wrapper.appendChild(this.#wrapper);

        parentElement.appendChild(wrapper);
    }

    cleanUp() {
        this.#quizDataLoaderWorker.terminate();

        if(this.#currentQuestion) {
            this.#currentQuestion.cleanUp();
        }

        messageBus.off("clickedNextQuestionButton", this.nextQuestionCallback);
    }
}