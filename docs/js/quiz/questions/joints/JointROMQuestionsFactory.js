import NextQuestionButton from "../NextQuestionButton.js";
import { shuffle } from "../../utils.js";
import TextInputAnswer from "../TextInputAnswer.js";
import MultipleTextInputQuestion from "../MultipleTextInputQuestion.js";

export default class JointROMQuestionsFactory {
    create({joints}) {
        const questions = {};

        for(const joint of joints) {
            if(!joint.movements.length) {
                continue;
            }

            const answers = joint.movements.map(movement =>
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
<h2 id="question-text" class="display-4 fs-4 pt-4 mb-4">Wat is de ROM van dit gewricht?</h2>
                    `.trim(),
                    answers: shuffle(answers),
                    nextQuestionButton: new NextQuestionButton({buttonText: "Spierfuncties"}),
                    wrapperClasses: ["question-rom"],
                }
            );
        }

        return questions;
    }
}