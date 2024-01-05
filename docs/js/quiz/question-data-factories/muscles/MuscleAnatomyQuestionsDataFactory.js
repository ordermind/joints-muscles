import { shuffle } from "../../utils.js";
import { getOtherMusclesWithSimilarFunctions, isMusclePlural } from "./utils.js";
import renderAnatomicStructureOrString from "../../../data-types/utils.js";
import QuestionData from "../QuestionData.js";

export default class MuscleAnatomyQuestionsDataFactory {
    #passThroughMode;

    #maxAnswers = 20;

    constructor({passThroughMode = false}) {
        this.#passThroughMode = passThroughMode;
    }

    #createAnswers(correctMuscle, correctSolution) {
        let answers = {...correctSolution.origo, ...correctSolution.insertion};

        let totalAnswersCount = Object.keys(answers).length;

        if(totalAnswersCount >= this.#maxAnswers) {
            return answers;
        }

        const otherMuscles = getOtherMusclesWithSimilarFunctions({
            correctMuscle,
        });
        for(const otherMuscle of otherMuscles) {
            for(const origoLabel of otherMuscle.origos.map(origo => renderAnatomicStructureOrString(origo))) {
                if(!answers.hasOwnProperty(origoLabel)) {
                    answers[origoLabel] = origoLabel;
                    totalAnswersCount++;
                }

                if(totalAnswersCount >= this.#maxAnswers) {
                    return answers;
                }
            }

            for(const insertionLabel of otherMuscle.insertions.map(insertion => renderAnatomicStructureOrString(insertion))) {
                if(!answers.hasOwnProperty(insertionLabel)) {
                    answers[insertionLabel] = insertionLabel;
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
            origo: {},
            insertion: {},
        };

        for(const origoLabel of correctMuscle.origos.map(origo => renderAnatomicStructureOrString(origo))) {
            correctSolution.origo[origoLabel] = origoLabel;
        }

        for(const insertionLabel of correctMuscle.insertions.map(insertion => renderAnatomicStructureOrString(insertion))) {
            correctSolution.insertion[insertionLabel] = insertionLabel;
        }

        return correctSolution;
    }

    create({quizMuscles}) {
        let questionsData = {};

        for(const muscle of quizMuscles) {
            const correctSolution = this.#createCorrectSolution(muscle);

            questionsData[muscle.id] = new QuestionData({
                className: "DraggableQuestion",
                data: {
                    question: `
<h1 class="display-3 fs-3 mb-2">${muscle.label}</h1>
<div class="quiz-image-wrapper">
    <img class="quiz-image" src="${muscle.image}" />
</div>
<h2 id="question-text" class="display-4 fs-4 pt-4 mb-4">Wat zijn de origo en insertie van ` + (isMusclePlural(muscle) ? "deze spieren" : "deze spier") + `? Sleep die anatomische structuren naar het juiste vak.</h2>
                    `.trim(),
                    regions: [{id: "origo", label: "Origo"}, {id: "insertion", label: "Insertie"}],
                    answers: shuffle(
                        Object.entries(
                            this.#createAnswers(muscle, correctSolution)
                        ).map(([id, label]) => {
                            return {id, label};
                        })
                    ),
                    correctSolution: correctSolution,
                    previousNextQuestionButtonText: "Origo & Insertie",
                    passThroughMode: this.#passThroughMode,
                }
            });
        }

        return questionsData;
    }
};