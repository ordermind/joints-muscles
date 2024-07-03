import MultipleChoiceAnswer from "../../answers/MultipleChoiceAnswer.js";
import QuestionData from "../QuestionData.js";
import { getSimilarJoints, isJointPlural } from "./utils.js";

export default class JointNameQuestionsDataFactory {
    #passThroughMode;

    #maxWrongAnswers = 5;

    constructor({passThroughMode = false}) {
        this.#passThroughMode = passThroughMode;
    }

    create({quizJoints, allQuizJoints}) {
        const questionsData = {};

        for(const correctJoint of quizJoints) {
            if(!correctJoint.image) {
                continue;
            }

            const correctAnswer = new MultipleChoiceAnswer(
                {
                    id: correctJoint.id,
                    label: correctJoint.shortLabel,
                    isCorrect: true,
                }
            );

            const wrongAnswers = getSimilarJoints(correctJoint, allQuizJoints, this.#maxWrongAnswers)
                .slice(0, this.#maxWrongAnswers)
                .map(otherJoint => new MultipleChoiceAnswer(
                    {
                        id: otherJoint.id,
                        label: otherJoint.shortLabel,
                        isCorrect: false,
                    }
                ));

            questionsData[correctJoint.id] = new QuestionData({
                className: "MultipleChoiceQuestionSingleAnswer",
                data:
                {
                    correctAnswer,
                    wrongAnswers,
                    question: `
<h1 id="question-text" class="display-3 fs-3 mb-2 mt-n4 pt-4">` + (isJointPlural(correctJoint) ? "Welke gewrichten zijn" : "Welk gewricht is") + `&nbsp;dit?</h1>
<div class="quiz-image-wrapper">
    <img class="quiz-image" src="${correctJoint.image}" />
</div>
                    `.trim(),
                    previousNextQuestionButtonText: "Gewricht herkennen",
                    passThroughMode: this.#passThroughMode,
                }
            });
        }

        return questionsData;
    }
}