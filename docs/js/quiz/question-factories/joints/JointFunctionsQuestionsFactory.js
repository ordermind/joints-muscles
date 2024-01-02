import DraggableQuestion from "../../questions/DraggableQuestion.js";
import { objMuscles } from "../../../data/muscles.js";
import { shuffle } from "../../utils.js";
import { isJointPlural } from "./utils.js";

export default class JointFunctionsQuestionsFactory {
    #passThroughMode;

    constructor({passThroughMode = false}) {
        this.#passThroughMode = passThroughMode;
    }

    #createAnswers(movement, correctSolution, correctJoint, joints, quizMuscleFunctions) {
        let answers = {};
        const maxAnswers = 20;

        // Correct answers

        for(const [muscleId, muscleLabel] of Object.entries(correctSolution.primeMovers)) {
            answers[muscleId] = muscleLabel;
        }

        for(const [muscleId, muscleLabel] of Object.entries(correctSolution.otherMuscles)) {
            answers[muscleId] = muscleLabel;
        }

        let totalAnswersCount = Object.keys(answers).length;

        if(totalAnswersCount >= maxAnswers) {
            return answers;
        }

        // Incorrect answers - other muscles for the same joint but for other movements

        for(const muscleFunction of quizMuscleFunctions.filter(muscleFunction => muscleFunction.jointId === movement.jointId && muscleFunction.movementId !== movement.id)) {
            if(!answers.hasOwnProperty(muscleFunction.muscleId)) {
                answers[muscleFunction.muscleId] = objMuscles[muscleFunction.muscleId].label;
                totalAnswersCount++;
            }

            if(totalAnswersCount >= maxAnswers) {
                return answers;
            }
        }

        // Incorrect answers - other joints in the same region

        const otherJointsInTheSameRegion = shuffle(joints
            .filter(joint => joint.regionId === correctJoint.regionId && joint.id !== correctJoint.id));

        for(const otherJoint of otherJointsInTheSameRegion) {
            for(const muscleFunction of shuffle(quizMuscleFunctions.filter(muscleFunction => muscleFunction.jointId === otherJoint.id))) {
                if(!answers.hasOwnProperty(muscleFunction.muscleId)) {
                    answers[muscleFunction.muscleId] = objMuscles[muscleFunction.muscleId].label;
                    totalAnswersCount++;
                }

                if(totalAnswersCount >= maxAnswers) {
                    return answers;
                }
            }
        }

        return answers;
    }

    #createCorrectSolution(movement, quizMuscleFunctions) {
        let correctSolution = {
            primeMovers: {},
            otherMuscles: {},
        };

        for(const muscleFunction of quizMuscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover)) {
            correctSolution.primeMovers[muscleFunction.muscleId] = objMuscles[muscleFunction.muscleId].label;
        }

        for(const muscleFunction of quizMuscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && !muscleFunction.isPrimeMover)) {
            correctSolution.otherMuscles[muscleFunction.muscleId] = objMuscles[muscleFunction.muscleId].label;
        }

        return correctSolution;
    }

    create({joints, quizMuscleFunctions}) {
        let questions = {};

        for(const joint of joints) {

            const shuffledMovements = shuffle(joint.movements);
            let jointQuestions = [];
            for(const [movementIndex, movement] of shuffledMovements.entries()) {
                const correctSolution = this.#createCorrectSolution(movement, quizMuscleFunctions);

                const isFirstMovementWithinTheJoint = movementIndex === 0;

                jointQuestions.push(new DraggableQuestion(
                    {
                        question: `
<h1 class="display-3 fs-3 mb-2">${joint.shortLabel}</h1>
<div class="quiz-image-wrapper">
    <img class="quiz-image" src="${joint.image}" />
</div>
<h2 id="question-text" class="display-4 fs-4 pt-4 mb-4">Welke spieren zorgen voor <strong>${movement.label}</strong> bij ` + (isJointPlural(joint) ? "deze gewrichten" : "dit gewricht") + `? Sleep die spieren naar het juiste vak.</h2>
                        `.trim(),
                        regions: [{id: "primeMovers", label: "Prime movers"}, {id: "otherMuscles", label: "Overige spieren"}],
                        answers: shuffle(
                            Object.entries(
                                this.#createAnswers(movement, correctSolution, joint, joints, quizMuscleFunctions)
                            ).map(([id, label]) => {
                                return {id, label};
                            })
                        ),
                        correctSolution: correctSolution,
                        previousNextQuestionButtonText: isFirstMovementWithinTheJoint ? "Spierfuncties" : "Volgende spierfunctie",
                        passThroughMode: this.#passThroughMode,
                    }
                ));

                questions[joint.id] = jointQuestions;
            }
        }

        return questions;
    }
}