import DraggableQuestion from "../DraggableQuestion.js";
import NextQuestionButton from "../NextQuestionButton.js";
import muscleFunctions from "../../data/muscle-functions.js";
import muscles from "../../../data/muscles.js";
import { shuffle } from "../../utils.js";

export default class JointFunctionsQuestionsFactory {
    #createAnswers(movement, correctSolution, correctJoint, joints) {
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

        // Incorrect answers - other muscles for the same joint but for other movements

        for(const muscleFunction of muscleFunctions.filter(muscleFunction => muscleFunction.jointId === movement.jointId && muscleFunction.movementId !== movement.id)) {
            if(!answers.hasOwnProperty(muscleFunction.muscleId)) {
                answers[muscleFunction.muscleId] = muscles[muscleFunction.muscleId].label;
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
            for(const muscleFunction of shuffle(muscleFunctions.filter(muscleFunction => muscleFunction.jointId === otherJoint.id))) {
                if(!answers.hasOwnProperty(muscleFunction.muscleId)) {
                    answers[muscleFunction.muscleId] = muscles[muscleFunction.muscleId].label;
                    totalAnswersCount++;
                }

                if(totalAnswersCount >= maxAnswers) {
                    return answers;
                }
            }
        }

        return answers;
    }
    
    #createCorrectSolution(movement) {
        let correctSolution = {
            primeMovers: {},
            otherMuscles: {},
        };

        correctSolution.primeMovers = {};

        for(const muscleFunction of muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover)) {
            correctSolution.primeMovers[muscleFunction.muscleId] = muscles[muscleFunction.muscleId].label;
        }

        correctSolution.otherMuscles = {};

        for(const muscleFunction of muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && !muscleFunction.isPrimeMover)) {
            correctSolution.otherMuscles[muscleFunction.muscleId] = muscles[muscleFunction.muscleId].label;
        }

        return correctSolution;
    }

    create({joints}) {
        let questions = {};

        for(const [jointIndex, joint] of joints.entries()) {

            const shuffledMovements = shuffle([...joint.movements]);
            let jointQuestions = [];
            for(const [movementIndex, movement] of shuffledMovements.entries()) {
                const correctSolution = this.#createCorrectSolution(joint);

                const isLastQuestionForJoint = jointIndex < joints.length - 1 && movementIndex === shuffledMovements.length - 1;
                const isLastQuestionInTotal = jointIndex === joints.length - 1 && movementIndex === shuffledMovements.length - 1;

                jointQuestions.push(new DraggableQuestion(
                    {
                        question: `
<h1 class="display-3 fs-3 mb-1">${joint.shortLabel}</h1>
<div class="quiz-image-wrapper">
    <img class="quiz-image" src="${joint.image}" />
</div>
<h2 class="display-4 fs-4 mt-4 mb-4">Welke spieren zorgen voor <strong>${movement.label}</strong> bij dit gewricht? Sleep die spieren naar het juiste vak.</h2>
                        `.trim(),
                        regions: ["Prime movers", "Overige spieren"],
                        answers: shuffle(
                            Object.entries(
                                this.#createAnswers(movement, correctSolution, joint, joints)
                            ).map(([id, label]) => {
                                return {id, label};
                            })
                        ),
                        correctSolution: correctSolution,
                        nextQuestionButton: new NextQuestionButton(
                            {
                                buttonText: isLastQuestionInTotal ? "Klaar!" : isLastQuestionForJoint ? "Volgend gewricht" : "Volgende spierfunctie",
                            }
                        ),
                    }
                ));

                questions[joint.id] = jointQuestions;
            }
        }

        return questions;
    }
}