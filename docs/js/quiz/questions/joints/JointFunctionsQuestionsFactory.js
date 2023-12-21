import DraggableQuestion from "../DraggableQuestion.js";
import NextQuestionButton from "../NextQuestionButton.js";

export default class JointFunctionsQuestionsFactory {
    create({joints}) {
        let questions = {};

        for(const [index, joint] of joints.entries()) {
            const isLastQuestion = index === joints.length - 1;

            questions[joint.id] = new DraggableQuestion(
                {
                    question: `
<h1 class="display-3 fs-3 mb-1">${joint.shortLabel}</h1>
<img class="quiz-image" src="${joint.image}" />
<h2 class="display-4 fs-4">Sleep de spieren naar de correcte functies</h2>
                    `.trim(),
                    regions: ["Prime movers", "Overige spieren"],
                    nextQuestionButton: new NextQuestionButton(
                        {
                            buttonText: isLastQuestion ? "Klaar!" : "Volgend gewricht"
                        }
                    ),
                }
            );
        }

        return questions;
    }
}