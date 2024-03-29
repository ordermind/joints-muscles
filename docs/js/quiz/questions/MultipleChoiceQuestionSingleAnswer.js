import { shuffle } from "../../utils.js";
import messageBus from "../message-bus.js";
import NextQuestionButton from "../misc/NextQuestionButton.js";

export default class MultipleChoiceQuestionSingleAnswer {
    #correctAnswer;
    #wrongAnswers;
    #question;
    #previousNextQuestionButtonText;
    #wrapperClasses;
    #passThroughMode;

    #nextQuestionButton;

    constructor({correctAnswer, wrongAnswers, question, previousNextQuestionButtonText, wrapperClasses = [], passThroughMode = false}) {
        this.#correctAnswer = correctAnswer;
        this.#wrongAnswers = wrongAnswers;
        this.#question = question;
        this.#previousNextQuestionButtonText = previousNextQuestionButtonText;
        this.#wrapperClasses = wrapperClasses;
        this.#passThroughMode = passThroughMode;

        this.#nextQuestionButton = new NextQuestionButton();
    }

    get previousNextQuestionButtonText() {
        return this.#previousNextQuestionButtonText;
    }

    #onSelectAnswer(e) {
        const isCorrectAnswer = e.target.parentElement.classList.contains("correct-answer");

        if(isCorrectAnswer) {
            messageBus.emit("question-answered-correctly");
        } else {
            messageBus.emit("question-answered-incorrectly");
        }
    }

    render({parentElement, nextQuestionButtonText}) {
        const answers = shuffle([
            this.#correctAnswer,
            ...this.#wrongAnswers,
        ]);

        let content = `
    ${this.#question}
<div class="answers multiple-choice">
        `.trim();
for(const answer of answers) {
    const answerClass = answer.isCorrect ? "correct-answer" : "wrong-answer";

    content += `
    <div class="form-check mt-2 mb-2 p-0 ${answerClass}">
        <input class="btn-check" type="radio" name="answer" id="${answer.id}" />
        <label class="btn btn-outline-secondary w-100" for="${answer.id}">${answer.label}</label>
    </div>
    `.trim();
}
        content += `
</div>
        `.trim();

        const wrapper = document.createElement('div');
        wrapper.classList.add("question", "text-center", ...this.#wrapperClasses);
        wrapper.innerHTML = content;

        this.#nextQuestionButton.render({parentElement: wrapper, buttonText: nextQuestionButtonText});

        for(const radioElement of wrapper.querySelectorAll(`input[type="radio"][name="answer"]`)) {
            radioElement.addEventListener("change", this.#onSelectAnswer);
        }

        parentElement.appendChild(wrapper);

        if(this.#passThroughMode) {
            messageBus.emit("question-answered-correctly");
        }
    }

    cleanUp() {
        for(const radioElement of document.querySelectorAll(`.multiple-choice input[type="radio"][name="answer"]`)) {
            radioElement.removeEventListener("change", this.#onSelectAnswer);
        }

        this.#nextQuestionButton.cleanUp();
    }
}