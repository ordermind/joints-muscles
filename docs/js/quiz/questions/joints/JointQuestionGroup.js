import { shuffle } from "../../utils.js";
import MultipleChoiceAnswer from "../MultipleChoiceAnswer.js";
import MultipleChoiceQuestionSingleAnswer from "../MultipleChoiceQuestionSingleAnswer.js";
import messageBus from "../../message-bus.js";
import { removeChildren } from "../../../utils.js";
import NextQuestionButton from "../NextQuestionButton.js";

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

    nextQuestionCallback() {
        this.cleanUp();
        this.showNextQuestion();
    }

    renderQuestion() {
        const maxWrongAnswers = 5;
        const isLastQuestion =  this.#currentJointIndex === this.#joints.length - 1;

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
<h1 class="display-3 fs-3 mb-1">Welk gewricht is dit?</h1>
<img class="quiz-image" src="${correctJoint.image}" />
                `.trim(),
                nextQuestionButton: new NextQuestionButton({buttonText: isLastQuestion ? "Klaar!" : "Volgend gewricht"}),
            }
        )

        const content = this.#currentQuestion.render();

        messageBus.on("clickedNextQuestionButton", this.nextQuestionCallback);

        removeChildren(this.#parentElement);

        this.#parentElement.appendChild(content);
    }

    showNextQuestion() {
        this.#currentJointIndex++;

        if(this.#currentJointIndex > this.#joints.length - 1) {
            messageBus.emit('questions-finished');
        } else {
            this.renderQuestion();
        }
    }

    cleanUp() {
        this.#currentQuestion.cleanUp();
        this.#currentQuestion = null;

        messageBus.off("clickedNextQuestionButton", this.nextQuestionCallback);
    }
}