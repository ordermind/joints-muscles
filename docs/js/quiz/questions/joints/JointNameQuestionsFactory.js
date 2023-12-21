import NextQuestionButton from "../NextQuestionButton.js";
import MultipleChoiceAnswer from "../MultipleChoiceAnswer.js";
import MultipleChoiceQuestionSingleAnswer from "../MultipleChoiceQuestionSingleAnswer.js";
import { shuffle } from "../../utils.js";

export default class JointNameQuestionsFactory {
    #maxWrongAnswers = 5;

    create({joints}) {
        return joints.map(correctJoint => {
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

            return new MultipleChoiceQuestionSingleAnswer(
                {
                    correctAnswer,
                    wrongAnswers,
                    question: `
<h1 class="display-3 fs-3 mb-1">Welk gewricht is dit?</h1>
<img class="quiz-image" src="${correctJoint.image}" />
                    `.trim(),
                    nextQuestionButton: new NextQuestionButton({buttonText: "Spierfuncties"}),
                }
            );
        });
    }
}