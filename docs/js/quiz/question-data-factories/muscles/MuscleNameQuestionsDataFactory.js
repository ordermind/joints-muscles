import MultipleChoiceAnswer from "../../answers/MultipleChoiceAnswer.js";
import { shuffle } from "../../../utils.js";
import QuestionData from "../QuestionData.js";
import { getOtherMusclesWithSimilarFunctions, isMusclePlural } from "./utils.js";

export default class MuscleNameQuestionsDataFactory {
    #passThroughMode;

    #maxWrongAnswers = 5;

    constructor({passThroughMode = false}) {
        this.#passThroughMode = passThroughMode;
    }

    create({quizMuscles}) {
        const questionsData = {};

        for(const correctMuscle of quizMuscles) {
            if(!correctMuscle.image) {
                continue;
            }

            const otherMusclesWithSimilarFunctions = getOtherMusclesWithSimilarFunctions(
                {
                    correctMuscle,
                })
                .slice(0, this.#maxWrongAnswers);

            const correctAnswer = new MultipleChoiceAnswer(
                {
                    id: correctMuscle.id,
                    label: correctMuscle.label,
                    isCorrect: true,
                }
            );

            const wrongAnswers = shuffle(otherMusclesWithSimilarFunctions)
                .slice(0, this.#maxWrongAnswers)
                .map(otherMuscle => new MultipleChoiceAnswer(
                    {
                        id: otherMuscle.id,
                        label: otherMuscle.label,
                        isCorrect: false,
                    }
                ));

            questionsData[correctMuscle.id] = new QuestionData({
                className: "MultipleChoiceQuestionSingleAnswer",
                data: {
                    correctAnswer,
                    wrongAnswers,
                    question: `
<h1 id="question-text" class="display-3 fs-3 mb-2 mt-n4 pt-4">Welke ` + (isMusclePlural(correctMuscle) ? "spieren zijn" : "spier is") + `&nbsp;dit?</h1>
<div class="quiz-image-wrapper">
    <img class="quiz-image" src="${correctMuscle.image}" />
</div>
                    `.trim(),
                    previousNextQuestionButtonText: "Spier herkennen",
                    passThroughMode: this.#passThroughMode,
                }
            });
        }

        return questionsData;
    }
}