import DraggableQuestion from "../DraggableQuestion.js";
import NextQuestionButton from "../NextQuestionButton.js";

export default class JointFunctionsQuestionsFactory {
    create({joints}) {
        let questions = {};

        for(const [index, joint] of joints.entries()) {
            const isLastQuestion = index === joints.length - 1;

            questions[joint.id] = new DraggableQuestion(
                {
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