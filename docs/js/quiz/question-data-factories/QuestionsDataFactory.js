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

export default class QuestionsDataFactory {
    #jointNameQuestionsDataFactory;
    #jointROMQuestionsDataFactory;
    #jointFunctionsQuestionsDataFactory;

    #muscleNameQuestionsDataFactory;
    #muscleAnatomyQuestionsDataFactory;
    #muscleJointFunctionsQuestionsDataFactory;
    #muscleSpecialFunctionsQuestionsDataFactory;

    constructor({passThroughMode = false}) {
        this.#jointNameQuestionsDataFactory = new JointNameQuestionsDataFactory({passThroughMode});
        this.#jointROMQuestionsDataFactory = new JointROMQuestionsDataFactory({passThroughMode});
        this.#jointFunctionsQuestionsDataFactory = new JointFunctionsQuestionsDataFactory({passThroughMode});

        this.#muscleNameQuestionsDataFactory = new MuscleNameQuestionsDataFactory({passThroughMode});
        this.#muscleAnatomyQuestionsDataFactory = new MuscleAnatomyQuestionsDataFactory({passThroughMode});
        this.#muscleJointFunctionsQuestionsDataFactory = new MuscleJointFunctionsQuestionsDataFactory({passThroughMode});
        this.#muscleSpecialFunctionsQuestionsDataFactory = new MuscleSpecialFunctionsQuestionsDataFactory({passThroughMode});
    }

    #createQuizDataForRegion(regionId) {
        const skipJoints = [
            "columna_vertebralis",
            "artt_costovertebrales",
            "artt_metacarpophalangeae_2_5",
            "artt_interphalangeae_proximales_manuum_2_5",
            "artt_interphalangeae_distales_manuum_2_5",
            "artt_metatarsophalangeae_2_5",
            "artt_interphalangeae_proximales_pedum_2_5",
            "artt_interphalangeae_distales_pedum_2_5",
        ];

        const filteredJoints = arrJoints.filter(joint => {
            return (regionId === 'all' || joint.regionId === regionId)
            && !skipJoints.includes(joint.id);
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

        return questions;
    }

    #createQuestionDataChainForMuscle({
        muscle,
        muscleNameQuestionsData,
        muscleAnatomyQuestionsData,
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

        if(muscleJointFunctionsQuestionsData.hasOwnProperty(muscle.id)) {
            questions.push(muscleJointFunctionsQuestionsData[muscle.id]);
        }

        if(muscleSpecialFunctionsQuestionsData.hasOwnProperty(muscle.id)) {
            questions.push(muscleSpecialFunctionsQuestionsData[muscle.id]);
        }

        return questions;
    }

    createQuestionsData({regionId}) {
        const quizData = this.#createQuizDataForRegion(regionId);
        const allQuizData = regionId === 'all' ? quizData : this.#createQuizDataForRegion('all');

        const jointNameQuestionsData = this.#jointNameQuestionsDataFactory.create({quizJoints: quizData.joints, allQuizJoints: allQuizData.joints});
        const jointROMQuestionsData = this.#jointROMQuestionsDataFactory.create({quizJoints: quizData.joints});
        const jointFunctionsQuestionsData = this.#jointFunctionsQuestionsDataFactory.create({quizJoints: quizData.joints});

        const muscleNameQuestionsData = this.#muscleNameQuestionsDataFactory.create({quizMuscles: quizData.muscles});
        const muscleAnatomyQuestionsData = this.#muscleAnatomyQuestionsDataFactory.create({quizMuscles: quizData.muscles});
        const muscleJointFunctionsQuestionsData = this.#muscleJointFunctionsQuestionsDataFactory.create({quizMuscles: quizData.muscles});
        const muscleSpecialFunctionsQuestionsData = this.#muscleSpecialFunctionsQuestionsDataFactory.create({quizMuscles: quizData.muscles});

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
                muscleJointFunctionsQuestionsData: muscleJointFunctionsQuestionsData,
                muscleSpecialFunctionsQuestionsData: muscleSpecialFunctionsQuestionsData
            });
        });
    }
}