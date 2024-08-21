import Joint from "../../data-types/Joint.js";
import JointFunctionsQuestionsDataFactory from "./joints/JointFunctionsQuestionsDataFactory.js";
import JointNameQuestionsDataFactory from "./joints/JointNameQuestionsDataFactory.js";
import JointROMQuestionsDataFactory from "./joints/JointROMQuestionsDataFactory.js";
import MuscleAnatomyQuestionsDataFactory from "./muscles/MuscleAnatomyQuestionsDataFactory.js";
import MuscleJointFunctionsQuestionsDataFactory from "./muscles/MuscleJointFunctionsQuestionsDataFactory.js";
import MuscleNameQuestionsDataFactory from "./muscles/MuscleNameQuestionsDataFactory.js";
import MuscleSpecialFunctionsQuestionsDataFactory from "./muscles/MuscleSpecialFunctionsQuestionsDataFactory.js";
import { arrJoints, objJoints } from "../../data/joints.js";
import { arrMuscles } from "../../data/muscles.js";
import { shuffle } from "../../utils.js";
import MuscleInnervationQuestionsDataFactory from "./muscles/MuscleInnervationQuestionsDataFactory.js";

export default class QuestionsDataFactory {
    #jointNameQuestionsDataFactory;
    #jointROMQuestionsDataFactory;
    #jointFunctionsQuestionsDataFactory;

    #muscleNameQuestionsDataFactory;
    #muscleAnatomyQuestionsDataFactory;
    #muscleInnervationQuestionsDataFactory;
    #muscleJointFunctionsQuestionsDataFactory;
    #muscleSpecialFunctionsQuestionsDataFactory;

    constructor({passThroughMode = false}) {
        this.#jointNameQuestionsDataFactory = new JointNameQuestionsDataFactory({passThroughMode});
        this.#jointROMQuestionsDataFactory = new JointROMQuestionsDataFactory({passThroughMode});
        this.#jointFunctionsQuestionsDataFactory = new JointFunctionsQuestionsDataFactory({passThroughMode});

        this.#muscleNameQuestionsDataFactory = new MuscleNameQuestionsDataFactory({passThroughMode});
        this.#muscleAnatomyQuestionsDataFactory = new MuscleAnatomyQuestionsDataFactory({passThroughMode});
        this.#muscleInnervationQuestionsDataFactory = new MuscleInnervationQuestionsDataFactory({passThroughMode});
        this.#muscleJointFunctionsQuestionsDataFactory = new MuscleJointFunctionsQuestionsDataFactory({passThroughMode});
        this.#muscleSpecialFunctionsQuestionsDataFactory = new MuscleSpecialFunctionsQuestionsDataFactory({passThroughMode});
    }

    #createQuizDataForRegion(regionId) {
        const filteredJoints = arrJoints.filter(joint => {
            return (regionId === 'all' || joint.regionId === regionId)
            && !joint.hideInQuiz
        });

        const filteredMuscles = arrMuscles.filter(muscle => {
            return (regionId === 'all' || muscle.getRegionIds(objJoints).includes(regionId));
        });

        return {
            joints: filteredJoints,
            muscles: filteredMuscles,
        };
    }

    #createQuestionDataChainForJoint({
        joint,
        jointNameQuestionsData,
        jointROMQuestionsData,
        jointFunctionsQuestionsData
    }) {
        const questions = [];

        if(jointNameQuestionsData.hasOwnProperty(joint.id)) {
            questions.push(jointNameQuestionsData[joint.id]);
        }

        if(jointROMQuestionsData.hasOwnProperty(joint.id)) {
            questions.push(jointROMQuestionsData[joint.id]);
        }

        if(jointFunctionsQuestionsData.hasOwnProperty(joint.id)) {
            for(const jointFunctionsQuestion of jointFunctionsQuestionsData[joint.id]) {
                questions.push(jointFunctionsQuestion);
            }
        }

        if(questions.length) {
            questions[questions.length - 1].isLastQuestionOfChain = true;
        }

        return questions;
    }

    #createQuestionDataChainForMuscle({
        muscle,
        muscleNameQuestionsData,
        muscleAnatomyQuestionsData,
        muscleInnervationQuestionsData,
        muscleJointFunctionsQuestionsData,
        muscleSpecialFunctionsQuestionsData
    }) {
        const questions = [];

        if(muscleNameQuestionsData.hasOwnProperty(muscle.id)) {
            questions.push(muscleNameQuestionsData[muscle.id]);
        }

        if(muscleAnatomyQuestionsData.hasOwnProperty(muscle.id)) {
            questions.push(muscleAnatomyQuestionsData[muscle.id]);
        }


        if(muscleInnervationQuestionsData.hasOwnProperty(muscle.id)) {
            questions.push(muscleInnervationQuestionsData[muscle.id]);
        }

        if(muscleJointFunctionsQuestionsData.hasOwnProperty(muscle.id)) {
            questions.push(muscleJointFunctionsQuestionsData[muscle.id]);
        }

        if(muscleSpecialFunctionsQuestionsData.hasOwnProperty(muscle.id)) {
            questions.push(muscleSpecialFunctionsQuestionsData[muscle.id]);
        }

        if(questions.length) {
            questions[questions.length - 1].isLastQuestionOfChain = true;
        }

        return questions;
    }

    createQuestionsData({regionId, questionsFilter}) {
        questionsFilter = JSON.parse(questionsFilter);
        const quizData = this.#createQuizDataForRegion(regionId);
        const allQuizData = regionId === 'all' ? quizData : this.#createQuizDataForRegion('all');

        const jointNameQuestionsData = questionsFilter.includes("joint_name") ? this.#jointNameQuestionsDataFactory.create({quizJoints: quizData.joints, allQuizJoints: allQuizData.joints}) : {};
        const jointROMQuestionsData = questionsFilter.includes("joint_rom") ? this.#jointROMQuestionsDataFactory.create({quizJoints: quizData.joints}) : {};
        const jointFunctionsQuestionsData = questionsFilter.includes("joint_functions") ? this.#jointFunctionsQuestionsDataFactory.create({quizJoints: quizData.joints}) : {};

        const muscleNameQuestionsData = questionsFilter.includes("muscle_name") ? this.#muscleNameQuestionsDataFactory.create({quizMuscles: quizData.muscles}) : {};
        const muscleAnatomyQuestionsData = questionsFilter.includes("muscle_anatomy") ? this.#muscleAnatomyQuestionsDataFactory.create({quizMuscles: quizData.muscles}) : {};
        const muscleInnervationQuestionsData = questionsFilter.includes("muscle_innervation") ? this.#muscleInnervationQuestionsDataFactory.create({quizMuscles: quizData.muscles}) : {};
        const muscleJointFunctionsQuestionsData = questionsFilter.includes("muscle_joint_functions") ? this.#muscleJointFunctionsQuestionsDataFactory.create({quizMuscles: quizData.muscles}) : {};
        const muscleSpecialFunctionsQuestionsData = questionsFilter.includes("muscle_special_functions") ? this.#muscleSpecialFunctionsQuestionsDataFactory.create({quizMuscles: quizData.muscles}) : {};

        const shuffledJointsAndMusclesList = shuffle([
            ...quizData.joints,
            ...quizData.muscles,
        ]);

        return shuffledJointsAndMusclesList.flatMap(item => {
            if(item instanceof Joint) {
                return this.#createQuestionDataChainForJoint({
                    joint: item,
                    jointNameQuestionsData: jointNameQuestionsData,
                    jointROMQuestionsData: jointROMQuestionsData,
                    jointFunctionsQuestionsData: jointFunctionsQuestionsData
                });
            }

            return this.#createQuestionDataChainForMuscle({
                muscle: item,
                muscleNameQuestionsData: muscleNameQuestionsData,
                muscleAnatomyQuestionsData: muscleAnatomyQuestionsData,
                muscleInnervationQuestionsData: muscleInnervationQuestionsData,
                muscleJointFunctionsQuestionsData: muscleJointFunctionsQuestionsData,
                muscleSpecialFunctionsQuestionsData: muscleSpecialFunctionsQuestionsData
            });
        });
    }
}