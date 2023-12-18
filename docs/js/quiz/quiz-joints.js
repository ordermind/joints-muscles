import joints from "./data/joints.js";
import JointQuestionGroup from "./questions/joints/JointQuestionGroup.js";
import emitter from "./emitter.js";
import { removeChildren } from "../utils.js";

export default class QuizJoints {
    constructor() {
        this.renderFinishedScreen = this.renderFinishedScreen.bind(this);
        this.onClickRestartButton = this.onClickRestartButton.bind(this);
    }

    get id() {
        return "joints";
    }

    onClickRestartButton() {
        document.querySelector("button.restart").removeEventListener("click", this.onClickRestartButton);

        const pageElement = document.querySelector(".page-quiz-joints");
        removeChildren(pageElement);
        this.start(pageElement);
    }

    renderFinishedScreen() {
        const finishedScreen = `
<h1 class="display-3 fs-3">Gefeliciteerd!</h1>
<p>Je hebt alle vragen beantwoord!</p>
<button class="btn btn-primary | restart">Opnieuw spelen</button>
        `.trim();

        const template = document.createElement("template");
        template.innerHTML = finishedScreen;

        const wrapper = document.querySelector(".page-quiz-joints .inner-wrapper");
        removeChildren(wrapper);

        wrapper.append(...template.content.children);

        wrapper.querySelector("button.restart").addEventListener("click", this.onClickRestartButton);
    }

    start(parentElement) {
        emitter.on("questions-finished", this.renderFinishedScreen);
        const wrapper = document.createElement("div");
        wrapper.classList.add("d-flex", "flex-row", "justify-content-center");

        const subWrapper = document.createElement("div");
        subWrapper.classList.add("d-flex", "flex-column", "justify-content-center", "inner-wrapper");

        const questionGroup = new JointQuestionGroup(subWrapper, [...joints]);
        questionGroup.showNextQuestion();

        wrapper.appendChild(subWrapper);

        parentElement.appendChild(wrapper);
    }

    cleanUp() {
        emitter.off("questions-finished", this.renderFinishedScreen);
    }
}