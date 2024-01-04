import MultipleChoiceAnswer from "../../answers/MultipleChoiceAnswer.js";
import MultipleChoiceQuestionSingleAnswer from "../../questions/MultipleChoiceQuestionSingleAnswer.js";
import { getSimilarJoints, isJointPlural } from "./utils.js";

export default class JointNameQuestionsFactory {
    #passThroughMode;

    #maxWrongAnswers = 5;

    constructor({passThroughMode = false}) {
        this.#passThroughMode = passThroughMode;
    }

    create({quizJoints, allQuizJoints}) {
        const questions = {};

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

            questions[correctJoint.id] = new MultipleChoiceQuestionSingleAnswer(
                {
                    correctAnswer,
                    wrongAnswers,
                    question: `
<h1 id="question-text" class="display-3 fs-3 mb-2 mt-n4 pt-4">` + (isJointPlural(correctJoint) ? "Welke gewrichten zijn" : "Welk gewricht is") + `&nbsp;dit?</h1>
<div class="quiz-image-wrapper">
    <img class="quiz-image" src="${correctJoint.image}" />
</div>
                    `.trim(),
                    previousNextQuestionButtonText: "Volgende vraag",
                    passThroughMode: this.#passThroughMode,
                }
            );
        }

        return questions;
    }
}