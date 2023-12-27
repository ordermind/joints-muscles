import NextQuestionButton from "../NextQuestionButton.js";
import MultipleChoiceAnswer from "../MultipleChoiceAnswer.js";
import MultipleChoiceQuestionSingleAnswer from "../MultipleChoiceQuestionSingleAnswer.js";
import { shuffle } from "../../utils.js";

export default class JointNameQuestionsFactory {
    #maxWrongAnswers = 5;

    create({joints}) {
        const questions = [];

        for(const [index, correctJoint] of joints.entries()) {
            const hasMovements = correctJoint.movements.length > 0;
            const isLastJoint = index >= joints.length - 1;

            const otherJointsInTheSameRegion = joints
                .filter(joint => joint.regionId === correctJoint.regionId && joint.id !== correctJoint.id);

            const correctAnswer = new MultipleChoiceAnswer(
                {
                    id: correctJoint.id,
                    label: correctJoint.shortLabel,
                    isCorrect: true,
                }
            );
            
            const wrongAnswers = shuffle(otherJointsInTheSameRegion)
                .slice(0, this.#maxWrongAnswers)
                .map(otherJoint => new MultipleChoiceAnswer(
                    {
                        id: otherJoint.id,
                        label: otherJoint.shortLabel,
                        isCorrect: false,
                    }
                ));

            questions.push(new MultipleChoiceQuestionSingleAnswer(
                {
                    correctAnswer,
                    wrongAnswers,
                    question: `
<h1 id="question-text" class="display-3 fs-3 mb-1 mt-n4 pt-4">Welk gewricht is dit?</h1>
<div class="quiz-image-wrapper">
    <img class="quiz-image" src="${correctJoint.image}" />
</div>
                    `.trim(),
                    nextQuestionButton: new NextQuestionButton({buttonText: hasMovements ? "Range of Motion" : isLastJoint ? "Klaar!" : "Volgend gewricht"}),
                }
            ));
        }

        return questions;
    }
}