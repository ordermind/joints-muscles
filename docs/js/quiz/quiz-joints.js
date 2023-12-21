import joints from "./data/joints.js";
import messageBus from "./message-bus.js";
import { removeChildren } from "../utils.js";
import JointNameQuestionsFactory from "./questions/joints/JointNameQuestionsFactory.js";
import JointFunctionsQuestionsFactory from "./questions/joints/JointFunctionsQuestionsFactory.js";
import { shuffle } from "./utils.js";

export default class QuizJoints {
    #jointNameQuestionsFactory;
    #jointFunctionsQuestionsFactory;
    #questions;
    #currentQuestionIndex;
    #wrapper;

    constructor() {
        this.#jointNameQuestionsFactory = new JointNameQuestionsFactory();
        this.#jointFunctionsQuestionsFactory = new JointFunctionsQuestionsFactory();

        this.nextQuestionCallback = this.nextQuestionCallback.bind(this);
        this.onClickRestartButton = this.onClickRestartButton.bind(this);
    }

    get id() {
        return "joints";
    }

    nextQuestionCallback() {
        this.#questions[this.#currentQuestionIndex].cleanUp();
        this.#showNextQuestion();
    }

    onClickRestartButton() {
        document.querySelector("button.restart").removeEventListener("click", this.onClickRestartButton);

        this.cleanUp();

        const pageElement = document.querySelector(".page-quiz-joints");
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

        const wrapper = document.querySelector(".page-quiz-joints .inner-wrapper");
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
    }

    #renderQuestion() {
        const content = this.#questions[this.#currentQuestionIndex].render();

        removeChildren(this.#wrapper);

        this.#wrapper.appendChild(content);
    }

    start(parentElement) {
        this.#currentQuestionIndex = -1;

        const shuffledJoints = shuffle([...joints]);

        const jointNameQuestions = this.#jointNameQuestionsFactory.create({joints: shuffledJoints});
        const jointFunctionsQuestions = this.#jointFunctionsQuestionsFactory.create({joints: shuffledJoints});

        this.#questions = [];

        for(const [index, jointNameQuestion] of jointNameQuestions.entries()) {
            this.#questions.push(jointNameQuestion);
            for(const jointFunctionsQuestion of jointFunctionsQuestions[shuffledJoints[index].id]) {
                this.#questions.push(jointFunctionsQuestion);
            }
        }

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
        messageBus.off("clickedNextQuestionButton", this.nextQuestionCallback);
    }
}