import { getOtherMusclesWithSimilarFunctions, isMusclePlural } from "./utils.js";
import { renderNotesTooltip, shuffle, uniqueArray } from "../../../utils.js";
import QuestionData from "../QuestionData.js";
import renderAnatomicStructureOrString from "../../../data-types/utils.js";

export default class MuscleInnervationQuestionsDataFactory {
    #passThroughMode;

    #maxAnswers = 20;

    constructor({ passThroughMode = false }) {
        this.#passThroughMode = passThroughMode;
    }

    #createAnswers(correctMuscle, correctSolution) {
        const conflictingNerves = uniqueArray(correctMuscle.innervation.flatMap(nerve => {
            if (typeof nerve === 'string' || nerve instanceof String) {
                return null;
            }

            return nerve.conflictingWith;
        }).filter(nerve => nerve !== null));

        let answers = { ...correctSolution.innervation };

        let totalAnswersCount = Object.keys(answers).length;

        if (totalAnswersCount >= this.#maxAnswers) {
            return answers;
        }

        const otherMuscles = getOtherMusclesWithSimilarFunctions({
            correctMuscle,
            priorityArea: 'innervation',
        });
        for (const otherMuscle of otherMuscles) {
            for (const innervationItem of otherMuscle.innervation) {
                const shortLabel = renderAnatomicStructureOrString(innervationItem);
                if (conflictingNerves.includes(shortLabel)) {
                    continue;
                }

                const labelWithNotes = renderAnatomicStructureOrString(innervationItem, { includeNotes: true, notesDirection: "nw" });

                if (!answers.hasOwnProperty(shortLabel)) {
                    answers[shortLabel] = labelWithNotes;
                    totalAnswersCount++;
                }

                if (totalAnswersCount >= this.#maxAnswers) {
                    return answers;
                }
            }
        }

        return answers;
    }

    #createCorrectSolution(correctMuscle) {
        let correctSolution = {
            innervation: {},
        };

        for (const innervationItem of correctMuscle.innervation) {
            const shortLabel = renderAnatomicStructureOrString(innervationItem);
            const labelWithNotes = renderAnatomicStructureOrString(innervationItem, { includeNotes: true, notesDirection: "nw" });

            correctSolution.innervation[shortLabel] = labelWithNotes;
        }

        return correctSolution;
    }

    create({ quizMuscles }) {
        let questionsData = {};

        for (const muscle of quizMuscles) {
            if (!muscle.innervation.length) {
                continue;
            }

            const correctSolution = this.#createCorrectSolution(muscle);

            questionsData[muscle.id] = new QuestionData({
                className: "DraggableQuestion",
                data: {
                    question: `
<h1 class="display-3 fs-3 mb-2">${muscle.label}</h1>
<div class="quiz-image-wrapper">
    <img class="quiz-image" src="${muscle.image}" />
</div>
<h2 id="question-text" class="display-4 fs-4 pt-4 mb-4">Welke innervatie(s) ` + (isMusclePlural(muscle) ? "hebben deze spieren" : "heeft deze spier") + `? Sleep de zenuwen naar het juiste vak.</h2>
                    `.trim(),
                    regions: [{ id: "innervation", label: "Innervatie" }],
                    answers: shuffle(
                        Object.entries(
                            this.#createAnswers(muscle, correctSolution)
                        ).map(([id, label]) => {
                            return { id, label };
                        })
                    ),
                    correctSolution: correctSolution,
                    previousNextQuestionButtonText: "Innervatie",
                    passThroughMode: this.#passThroughMode,
                }
            });
        }

        return questionsData;
    }
};