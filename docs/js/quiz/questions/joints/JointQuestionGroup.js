import { shuffle } from "../../utils.js";
import MultipleChoiceAnswer from "../MultipleChoiceAnswer.js";
import MultipleChoiceQuestionSingleAnswer from "../MultipleChoiceQuestionSingleAnswer.js";
import emitter from "../../emitter.js";
import { removeChildren } from "../../../utils.js";

export default class JointQuestionGroup {
    #parentElement;
    #currentJointIndex;
    #joints;
    #currentQuestion;

    constructor(parentElement, joints) {
        this.#parentElement = parentElement;
        this.#joints = shuffle(joints);
        this.#currentJointIndex = -1;

        this.nextQuestionCallback = this.nextQuestionCallback.bind(this);
    }

    #showOrHideNextQuestionButton(show) {
        const nextQuestionButtonElement = document.querySelector("button.next-question");

        if(show) {
            nextQuestionButtonElement.classList.remove("d-none");
        } else {
            nextQuestionButtonElement.classList.add("d-none");
        }
    }

    nextQuestionCallback() {
        this.cleanUp();
        this.showNextQuestion();
    }

    renderQuestion() {
        const maxWrongAnswers = 5;

        const correctJoint = this.#joints[this.#currentJointIndex];

        const otherJointsInTheSameRegion = this.#joints
        .filter(joint => joint.regionId === correctJoint.regionId)
        .filter(joint => joint.id !== correctJoint.id);

        const correctAnswer = new MultipleChoiceAnswer(
            {
                id: correctJoint.id,
                label: correctJoint.shortLabel,
                isCorrect: true,
            }
        );
        
        const wrongAnswers = shuffle(otherJointsInTheSameRegion)
            .slice(0, maxWrongAnswers)
            .map(otherJoint => new MultipleChoiceAnswer(
                {
                    id: otherJoint.id,
                    label: otherJoint.shortLabel,
                    isCorrect: false,
                }
            ));

        this.#currentQuestion = new MultipleChoiceQuestionSingleAnswer(
            {
                correctAnswer,
                wrongAnswers,
                question: `
<h1 class="display-3 fs-3">Welk gewricht is dit?</h1>
<img class="quiz-image" src="${correctJoint.image}" />
                `.trim()
            }
        )

        const content = this.#currentQuestion.render();

        const nextQuestionButton = document.createElement("button");
        nextQuestionButton.classList.add("btn", "btn-primary", "d-none", "|", "next-question");
        nextQuestionButton.innerText = "Volgend gewricht";
        nextQuestionButton.addEventListener("click", this.nextQuestionCallback);
        emitter.on("selected-answer", this.#showOrHideNextQuestionButton);

        content.appendChild(nextQuestionButton);

        removeChildren(this.#parentElement);

        this.#parentElement.appendChild(content);
    }

    showNextQuestion() {
        this.#currentJointIndex++;

        if(this.#currentJointIndex > this.#joints.length - 1) {
            emitter.emit('questions-finished');
        } else {
            this.renderQuestion();
        }
    }

    cleanUp() {
        this.#currentQuestion.cleanUp();
        this.#currentQuestion = null;

        document.querySelector(`button.next-question`).removeEventListener("click", this.nextQuestionCallback);

        emitter.off("selected-answer", this.#showOrHideNextQuestionButton);
    }
}