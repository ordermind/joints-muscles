import DraggableQuestion from "../DraggableQuestion.js";
import { getOtherMusclesWithSimilarFunctions, isMusclePlural } from "./utils.js";
import NextQuestionButton from "../NextQuestionButton.js";
import { objJoints } from "../../../data/joints.js";

export default class MuscleJointFunctionsQuestionsFactory {
    #maxAnswers = 20;

    #createAnswerLabel(jointFunction) {
        const movementName = jointFunction.movementLabelOverride ?? objJoints[jointFunction.jointId].movements.find(movement => movement.id === jointFunction.movementId).label;

        return `<em>${objJoints[jointFunction.jointId].shortLabel}</em>: ${movementName}`;
    }

    #createAnswers(correctMuscle, correctSolution, quizMuscles, quizMuscleFunctions) {
        let answers = {...correctSolution.primeMover, ...correctSolution.assistant};

        let totalAnswersCount = Object.keys(answers).length;

        if(totalAnswersCount >= this.#maxAnswers) {
            return answers;
        }

        const otherMuscles = getOtherMusclesWithSimilarFunctions(correctMuscle, quizMuscles, quizMuscleFunctions);
        for(const otherMuscle of otherMuscles) {
            for(const jointFunction of otherMuscle.functions) {
                const answerLabel = this.#createAnswerLabel(jointFunction);

                if(!answers.hasOwnProperty(answerLabel)) {
                    answers[answerLabel] = answerLabel;
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
            primeMover: {},
            assistant: {},
        };

        for(const jointFunction of correctMuscle.functions) {
            const answerLabel = this.#createAnswerLabel(jointFunction);

            if(jointFunction.isPrimeMover) {
                correctSolution.primeMover[answerLabel] = answerLabel;
            } else {
                correctSolution.assistant[answerLabel] = answerLabel;
            }
        }

        return correctSolution;
    }

    create({quizMuscles, quizMuscleFunctions}) {
        let questions = {};

        for(const muscle of quizMuscles) {
            if(!muscle.functions.length) {
                continue;
            }

            const correctSolution = this.#createCorrectSolution(muscle);
            const hasSpecialFunctions = muscle.specialFunctions.length > 0;

            questions[muscle.id] = new DraggableQuestion(
                {
                    question: `
<h1 class="display-3 fs-3 mb-2">${muscle.label}</h1>
<div class="quiz-image-wrapper">
    <img class="quiz-image" src="${muscle.image}" />
</div>
<h2 id="question-text" class="display-4 fs-4 pt-4 mb-4">Welke gewrichtsfuncties ` + (isMusclePlural(muscle) ? "hebben deze spieren" : "heeft deze spier") + `? Sleep die functies naar het juiste vak.</h2>
                    `.trim(),
                    regions: [{id: "primeMover", label: "Prime mover"}, {id: "assistant", label: "Assisteert"}],
                    answers: Object.entries(
                        this.#createAnswers(muscle, correctSolution, quizMuscles, quizMuscleFunctions)
                    ).map(([id, label]) => {
                        return {id, label};
                    })
                    .sort((a, b) => a.label.localeCompare(b.label)),
                    correctSolution: correctSolution,
                        nextQuestionButton: new NextQuestionButton(
                            {
                                buttonText: hasSpecialFunctions ? "Overige functies" : "Volgende spier",
                            }
                        ),
                }
            );
        }

        return questions;
    }
};