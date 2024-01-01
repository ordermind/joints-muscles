import messageBus from "../message-bus.js";
import NextQuestionButton from "../misc/NextQuestionButton.js";

export default class MultipleTextInputQuestion {
    #question;
    #answers;
    #previousNextQuestionButtonText;
    #wrapperClasses;

    #nextQuestionButton;

    constructor({question, answers, previousNextQuestionButtonText, wrapperClasses = []}) {
        this.#question = question;
        this.#answers = answers;
        this.#wrapperClasses = wrapperClasses;
        this.#previousNextQuestionButtonText = previousNextQuestionButtonText;
        this.#nextQuestionButton = new NextQuestionButton();

        this.onChangeAnswer = this.onChangeAnswer.bind(this);
    }

    get previousNextQuestionButtonText() {
        return this.#previousNextQuestionButtonText;
    }

    #removeAnswerClasses(element) {
        element.classList.remove("correct-answer");
        element.classList.remove("incorrect-answer");
    }

    #setCorrectAnswerClass(element) {
        element.classList.add("correct-answer");
    }

    #setIncorrectAnswerClass(element) {
        element.classList.add("incorrect-answer");
    }

    #checkCurrentSolution() {
        if(
            Array.from(
                document.querySelectorAll(`.multiple-text-input-question .answers input[type="text"]`)
            ).every(element => element.value === element.getAttribute("data-correct-answer"))
        ) {
            messageBus.emit("question-answered-correctly");
        } else {
            messageBus.emit("question-answered-incorrectly");
        }
    }

    onChangeAnswer(e) {
        const element = e.target;

        this.#checkCurrentSolution();

        this.#removeAnswerClasses(element);

        if(element.value && element.value === element.getAttribute("data-correct-answer")) {
            this.#setCorrectAnswerClass(element);
        } else if(element.value && element.value !== element.getAttribute("data-correct-answer")) {
            this.#setIncorrectAnswerClass(element);
        }
    }

    render({parentElement, nextQuestionButtonText}) {
        let content = `
    ${this.#question}
<table class="table table-borderless align-middle text-start w-auto m-auto | answers multiple-text-input">
        `.trim();
for(const answer of this.#answers) {
    content += `
    <tr>
        <td>
            <label class="form-label m-0" for="${answer.id}">${answer.label}</label>
        </td>
        <td>
            <input class="form-control" type="text" name="${answer.id}" id="${answer.id}" data-correct-answer="${answer.correctAnswer}" />
        </td>
        <td>
            <span class="form-text m-0 | suffix">${answer.suffix}</span>
        </td>
    </tr>
    `.trim();
}
        content += `
</table>
        `.trim();

        const wrapper = document.createElement('div');
        wrapper.classList.add("question", "multiple-text-input-question", "text-center", ...this.#wrapperClasses);
        wrapper.innerHTML = content;

        this.#nextQuestionButton.render({parentElement: wrapper, buttonText: nextQuestionButtonText});

        for(const inputElement of wrapper.querySelectorAll(`.answers input[type="text"`)) {
            inputElement.addEventListener("change", this.onChangeAnswer);
        }

        parentElement.appendChild(wrapper);
    }

    cleanUp() {
        for(const inputElement of document.querySelectorAll(`.multiple-text-input-question .answers input[type="text"`)) {
            inputElement.removeEventListener("change", this.onChangeAnswer);
        }

        this.#nextQuestionButton.cleanUp();
    }
}