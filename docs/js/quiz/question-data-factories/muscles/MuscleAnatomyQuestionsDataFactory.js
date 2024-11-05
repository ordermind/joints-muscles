import { shuffle, uniqueArray } from "../../../utils.js";
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
        const conflictingOrigos = uniqueArray(correctMuscle.origos.flatMap(origo => {
            if (typeof origo === 'string' || origo instanceof String) {
                return null;
            }

            return origo.conflictingWith;
        }).filter(origo => origo !== null));

        const conflictingInsertions = uniqueArray(correctMuscle.insertions.flatMap(insertion => {
            if (typeof insertion === 'string' || insertion instanceof String) {
                return null;
            }

            return insertion.conflictingWith;
        }).filter(insertion => insertion !== null));

        let answers = {...correctSolution.origo, ...correctSolution.insertion};

        let totalAnswersCount = Object.keys(answers).length;

        if(totalAnswersCount >= this.#maxAnswers) {
            return answers;
        }

        const otherMuscles = getOtherMusclesWithSimilarFunctions({
            correctMuscle,
        });
        for(const otherMuscle of otherMuscles) {
            for(const origo of otherMuscle.origos) {
                const shortOrigoLabel = renderAnatomicStructureOrString(origo);
                if (conflictingOrigos.includes(shortOrigoLabel)) {
                    continue;
                }

                const labelWithNotes = renderAnatomicStructureOrString(origo, {includeNotes: true, notesDirection: "nw"});

                if(!answers.hasOwnProperty(shortOrigoLabel)) {
                    answers[shortOrigoLabel] = labelWithNotes;
                    totalAnswersCount++;
                }

                if(totalAnswersCount >= this.#maxAnswers) {
                    return answers;
                }
            }

            for(const insertion of otherMuscle.insertions) {
                const shortInsertionLabel = renderAnatomicStructureOrString(insertion);
                if (conflictingInsertions.includes(shortInsertionLabel)) {
                    continue;
                }

                const labelWithNotes = renderAnatomicStructureOrString(insertion, {includeNotes: true, notesDirection: "nw"});

                if(!answers.hasOwnProperty(shortInsertionLabel)) {
                    answers[shortInsertionLabel] = labelWithNotes;
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

        for(const origo of correctMuscle.origos) {
            const shortOrigoLabel = renderAnatomicStructureOrString(origo);
            const labelWithNotes = renderAnatomicStructureOrString(origo, {includeNotes: true, notesDirection: "nw"});

            correctSolution.origo[shortOrigoLabel] = labelWithNotes;
        }

        for(const insertion of correctMuscle.insertions) {
            const shortInsertionLabel = renderAnatomicStructureOrString(insertion);
            const labelWithNotes = renderAnatomicStructureOrString(insertion, {includeNotes: true, notesDirection: "nw"});

            correctSolution.insertion[shortInsertionLabel] = labelWithNotes;
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
<h2 id="question-text" class="display-4 fs-4 pt-4 mb-4">Wat zijn de origo(s) en insertie(s) van ` + (isMusclePlural(muscle) ? "deze spieren" : "deze spier") + `? Sleep die anatomische structuren naar het juiste vak.</h2>
                    `.trim(),
                    regions: [{id: "origo", label: "Origo(s)"}, {id: "insertion", label: "Insertie(s)"}],
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