import { shuffle } from "../../utils.js";
import TextInputAnswer from "../../answers/TextInputAnswer.js";
import MultipleTextInputQuestion from "../../questions/MultipleTextInputQuestion.js";
import { isJointPlural } from "./utils.js";

export default class JointROMQuestionsFactory {
    #passThroughMode;

    constructor({passThroughMode = false}) {
        this.#passThroughMode = passThroughMode;
    }

    create({quizJoints}) {
        const questions = {};

        for(const joint of quizJoints) {
            if(!joint.movements.length) {
                continue;
            }

            if(!joint.movements.some(movement => movement.rom)) {
                continue;
            }

            const answers = joint.movements
                .filter(movement => movement.rom !== null)
                .map(movement =>
                {
                    return new TextInputAnswer(
                        {
                            id: movement.id,
                            label: movement.label,
                            suffix: "graden",
                            correctAnswer: movement.rom.replace("°", ""),
                        }
                    );
                }
            )

            questions[joint.id] = new MultipleTextInputQuestion(
                {
                    question: `
<h1 class="display-3 fs-3 mb-2">${joint.shortLabel}</h1>
<div class="quiz-image-wrapper">
    <img class="quiz-image" src="${joint.image}" />
</div>
<h2 id="question-text" class="display-4 fs-4 pt-4 mb-4">Wat is de ROM van ` + (isJointPlural(joint) ? "deze gewrichten" : "dit gewricht") + `?</h2>
                    `.trim(),
                    answers: shuffle(answers),
                    previousNextQuestionButtonText: "Range of Motion",
                    wrapperClasses: ["question-rom"],
                    passThroughMode: this.#passThroughMode,
                }
            );
        }

        return questions;
    }
}