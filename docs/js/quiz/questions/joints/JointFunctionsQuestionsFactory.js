import DraggableQuestion from "../DraggableQuestion.js";
import NextQuestionButton from "../NextQuestionButton.js";
import muscleFunctions from "../../data/muscle-functions.js";
import muscles from "../../../data/muscles.js";
import { shuffle } from "../../utils.js";

export default class JointFunctionsQuestionsFactory {
    #createAnswers(correctJoint, correctSolution, joints) {
        let answers = {};

        // Correct answers

        for(const [movementId, primeMovers] of Object.entries(correctSolution.primeMovers)) {
            for(const [muscleId, muscleLabel] of Object.entries(primeMovers)) {
                answers[muscleId] = muscleLabel;
            }
        }

        for(const [movementId, primeMovers] of Object.entries(correctSolution.otherMuscles)) {
            for(const [muscleId, muscleLabel] of Object.entries(primeMovers)) {
                answers[muscleId] = muscleLabel;
            }
        }

        // Incorrect answers

        const otherJointsInTheSameRegion = shuffle(joints
            .filter(joint => joint.regionId === correctJoint.regionId && joint.id !== correctJoint.id));

        let addedIncorrectAnswers = 0;

        topLoop: for(const otherJoint of otherJointsInTheSameRegion) {
            for(const muscleFunction of shuffle(muscleFunctions.filter(muscleFunction => muscleFunction.jointId === otherJoint.id))) {
                if(!answers.hasOwnProperty(muscleFunction.muscleId)) {
                    answers[muscleFunction.muscleId] = muscles[muscleFunction.muscleId].label;
                    addedIncorrectAnswers++;
                }

                if(addedIncorrectAnswers >= 10) {
                    break topLoop;
                }
            }
        }

        return answers;
    }
    
    #createCorrectSolution(joint) {
        let correctSolution = {
            primeMovers: {},
            otherMuscles: {},
        };

        const muscleFunctionsForJoint = muscleFunctions.filter(muscleFunction => muscleFunction.jointId === joint.id);

        for(const movement of joint.movements) {
            correctSolution.primeMovers[movement.id] = {};

            for(const muscleFunction of muscleFunctionsForJoint.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover)) {
                correctSolution.primeMovers[movement.id][muscleFunction.muscleId] = muscles[muscleFunction.muscleId].label;
            }

            correctSolution.otherMuscles[movement.id] = {};

            for(const muscleFunction of muscleFunctionsForJoint.filter(muscleFunction => muscleFunction.movementId === movement.id && !muscleFunction.isPrimeMover)) {
                correctSolution.otherMuscles[movement.id][muscleFunction.muscleId] = muscles[muscleFunction.muscleId].label;
            }
        }

        return correctSolution;
    }

    create({joints}) {
        let questions = {};

        for(const [index, joint] of joints.entries()) {
            const isLastQuestion = index === joints.length - 1;
            const correctSolution = this.#createCorrectSolution(joint);

            questions[joint.id] = new DraggableQuestion(
                {
                    question: `
<h1 class="display-3 fs-3 mb-1">${joint.shortLabel}</h1>
<img class="quiz-image" src="${joint.image}" />
<h2 class="display-4 fs-4">Sleep de spieren naar de correcte functies</h2>
                    `.trim(),
                    regions: ["Prime movers", "Overige spieren"],
                    answers: this.#createAnswers(joint, correctSolution, joints),
                    correctSolution: correctSolution,
                    nextQuestionButton: new NextQuestionButton(
                        {
                            buttonText: isLastQuestion ? "Klaar!" : "Volgend gewricht"
                        }
                    ),
                }
            );
        }

        return questions;
    }
}