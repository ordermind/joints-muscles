import DraggableQuestion from "../DraggableQuestion.js";
import { getOtherMusclesWithSimilarFunctions, isMusclePlural } from "./utils.js";
import { shuffle } from "../../utils.js";
import NextQuestionButton from "../NextQuestionButton.js";

export default class MuscleSpecialFunctionsQuestionsFactory {
    #maxAnswers = 20;

    #createAnswers(correctMuscle, correctSolution, quizMuscles, quizMuscleFunctions) {
        let answers = {...correctSolution.specialFunctions};

        let totalAnswersCount = Object.keys(answers).length;

        if(totalAnswersCount >= this.#maxAnswers) {
            return answers;
        }

        const otherMuscles = getOtherMusclesWithSimilarFunctions(correctMuscle, quizMuscles, quizMuscleFunctions);
        for(const otherMuscle of otherMuscles) {
            for(const specialFunction of otherMuscle.specialFunctions) {
                if(!answers.hasOwnProperty(specialFunction.functionDescription)) {
                    answers[specialFunction.functionDescription] = specialFunction.functionDescription;
                    totalAnswersCount++;
                }

                if(totalAnswersCount >= this.#maxAnswers) {
                    return answers;
                }
            }
        }

        return answers;
    }

    #createCorrectSolution(correctMuscle) {
        let correctSolution = {
            specialFunctions: {},
        };

        for(const specialFunction of correctMuscle.specialFunctions) {
            correctSolution.specialFunctions[specialFunction.functionDescription] = specialFunction.functionDescription;
        }

        return correctSolution;
    }

    create({quizMuscles, quizMuscleFunctions}) {
        let questions = {};

        for(const muscle of quizMuscles) {
            if(!muscle.specialFunctions.length) {
                continue;
            }

            const correctSolution = this.#createCorrectSolution(muscle);

            questions[muscle.id] = new DraggableQuestion(
                {
                    question: `
<h1 class="display-3 fs-3 mb-2">${muscle.label}</h1>
<div class="quiz-image-wrapper">
    <img class="quiz-image" src="${muscle.image}" />
</div>
<h2 id="question-text" class="display-4 fs-4 pt-4 mb-4">Welke overige functies ` + (isMusclePlural(muscle) ? "hebben deze spieren" : "heeft deze spier") + `? Sleep die functies naar het juiste vak.</h2>
                    `.trim(),
                    regions: [{id: "specialFunctions", label: "Overige functies"}],
                    answers: shuffle(
                        Object.entries(
                            this.#createAnswers(muscle, correctSolution, quizMuscles, quizMuscleFunctions)
                        ).map(([id, label]) => {
                            return {id, label};
                        })
                    ),
                    correctSolution: correctSolution,
                        nextQuestionButton: new NextQuestionButton(
                            {
                                buttonText: "Volgende spier",
                            }
                        ),
                }
            );
        }

        return questions;
    }
};