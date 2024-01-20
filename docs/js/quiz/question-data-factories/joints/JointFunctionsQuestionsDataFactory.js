import { objMuscles } from "../../../data/muscles.js";
import { arrJoints } from "../../../data/joints.js";
import muscleFunctions from "../../../data/muscle-functions.js";
import { shuffle } from "../../../utils.js";
import { isJointPlural } from "./utils.js";
import QuestionData from "../QuestionData.js";

export default class JointFunctionsQuestionsDataFactory {
    #passThroughMode;

    constructor({passThroughMode = false}) {
        this.#passThroughMode = passThroughMode;
    }

    #createAnswers(movement, correctSolution, correctJoint) {
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

        for(const muscleFunction of shuffle(
            muscleFunctions.filter(
                muscleFunction => muscleFunction.jointId === movement.jointId && muscleFunction.movementId !== movement.id
            )
        )) {
            if(!answers.hasOwnProperty(muscleFunction.muscleId)) {
                answers[muscleFunction.muscleId] = objMuscles[muscleFunction.muscleId].label;
                totalAnswersCount++;
            }

            if(totalAnswersCount >= maxAnswers) {
                return answers;
            }
        }

        // Incorrect answers - other joints in the same region

        const otherJointsInTheSameRegion = shuffle(arrJoints
            .filter(joint => joint.regionId === correctJoint.regionId && joint.id !== correctJoint.id)
        );

        for(const otherJoint of otherJointsInTheSameRegion) {
            for(const muscleFunction of shuffle(muscleFunctions.filter(muscleFunction => muscleFunction.jointId === otherJoint.id))) {
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

    #createCorrectSolution(movement) {
        let correctSolution = {
            primeMovers: {},
            otherMuscles: {},
        };

        for(const muscleFunction of muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover)) {
            correctSolution.primeMovers[muscleFunction.muscleId] = objMuscles[muscleFunction.muscleId].label;
        }

        for(const muscleFunction of muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && !muscleFunction.isPrimeMover)) {
            correctSolution.otherMuscles[muscleFunction.muscleId] = objMuscles[muscleFunction.muscleId].label;
        }

        return correctSolution;
    }

    create({quizJoints}) {
        let questionsData = {};

        for(const joint of quizJoints) {

            const shuffledMovements = shuffle(joint.movements);
            let jointQuestionsData = [];
            for(const [movementIndex, movement] of shuffledMovements.entries()) {
                const correctSolution = this.#createCorrectSolution(movement);
                // Skip the question if there are no muscle functions defined for this movement.
                if(!Object.keys(correctSolution.primeMovers).length && !Object.keys(correctSolution.otherMuscles).length) {
                    continue;
                }

                const isFirstMovementWithinTheJoint = movementIndex === 0;

                jointQuestionsData.push(new QuestionData({
                    className: "DraggableQuestion",
                    data: {
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
                                this.#createAnswers(movement, correctSolution, joint)
                            ).map(([id, label]) => {
                                return {id, label};
                            })
                        ),
                        correctSolution: correctSolution,
                        previousNextQuestionButtonText: isFirstMovementWithinTheJoint ? "Spierfuncties" : "Volgende spierfunctie",
                        passThroughMode: this.#passThroughMode,
                    }
                }));

                questionsData[joint.id] = jointQuestionsData;
            }
        }

        return questionsData;
    }
}