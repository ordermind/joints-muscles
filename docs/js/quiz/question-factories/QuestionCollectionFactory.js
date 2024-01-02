import Joint from "../../data-types/Joint.js";
import JointFunctionsQuestionsFactory from "./joints/JointFunctionsQuestionsFactory.js";
import JointNameQuestionsFactory from "./joints/JointNameQuestionsFactory.js";
import JointROMQuestionsFactory from "./joints/JointROMQuestionsFactory.js";
import MuscleAnatomyQuestionFactory from "./muscles/MuscleAnatomyQuestionsFactory.js";
import MuscleJointFunctionsQuestionsFactory from "./muscles/MuscleJointFunctionsQuestionsFactory.js";
import MuscleNameQuestionFactory from "./muscles/MuscleNameQuestionsFactory.js";
import MuscleSpecialFunctionsQuestionsFactory from "./muscles/MuscleSpecialFunctionsQuestionsFactory.js";
import { arrJoints } from "../../data/joints.js";
import muscleFunctions from "../../data/muscle-functions.js";
import { arrMuscles } from "../../data/muscles.js";
import { shuffle } from "../utils.js";

export default class QuestionCollectionFactory {
    #jointNameQuestionsFactory;
    #jointROMQuestionsFactory;
    #jointFunctionsQuestionsFactory;

    #muscleNameQuestionsFactory;
    #muscleAnatomyQuestionsFactory;
    #muscleJointFunctionsQuestionsFactory;
    #muscleSpecialFunctionsQuestionsFactory;

    constructor({passThroughMode = false}) {
        this.#jointNameQuestionsFactory = new JointNameQuestionsFactory({passThroughMode});
        this.#jointROMQuestionsFactory = new JointROMQuestionsFactory({passThroughMode});
        this.#jointFunctionsQuestionsFactory = new JointFunctionsQuestionsFactory({passThroughMode});

        this.#muscleNameQuestionsFactory = new MuscleNameQuestionFactory({passThroughMode});
        this.#muscleAnatomyQuestionsFactory = new MuscleAnatomyQuestionFactory({passThroughMode});
        this.#muscleJointFunctionsQuestionsFactory = new MuscleJointFunctionsQuestionsFactory({passThroughMode});
        this.#muscleSpecialFunctionsQuestionsFactory = new MuscleSpecialFunctionsQuestionsFactory({passThroughMode});
    }

    #createQuizDataForRegion(regionId) {
        const skipJoints = [
            "columna_vertebralis",
            "artt_metacarpophalangeae_2_5",
            "artt_interphalangeae_proximales_manuum_2_5",
            "artt_interphalangeae_distales_manuum_2_5",
            "artt_metatarsophalangeae_2_5",
            "artt_interphalangeae_proximales_pedum_2_5",
            "artt_interphalangeae_distales_pedum_2_5",
        ];

        const filteredJoints = arrJoints.filter(joint => {
            return (regionId === 'all' || joint.regionId === regionId)
            && !skipJoints.includes(joint.id)
            && joint.regionId !== "upper_extremity"; //temporary workaround until all the muscles are there
        });

        const filteredMuscles = arrMuscles.filter(muscle => {
            return (regionId === 'all' || muscle.regionIds.includes(regionId))
            && !muscle.regionIds.includes("upper_extremity"); //temporary workaround until all the muscles are there
        });

        const filteredMuscleFunctions = muscleFunctions.filter(muscleFunction => {
            return filteredJoints.some(joint => joint.id === muscleFunction.jointId)
            && filteredMuscles.some(muscle => muscle.id === muscleFunction.muscleId);
        });

        return {
            joints: filteredJoints,
            muscleFunctions: filteredMuscleFunctions,
            muscles: filteredMuscles,
        };
    }

    #createQuestionChainForJoint({
        joint,
        jointNameQuestions,
        jointROMQuestions,
        jointFunctionsQuestions
    }) {
        const questions = [];

        if(jointNameQuestions.hasOwnProperty(joint.id)) {
            questions.push(jointNameQuestions[joint.id]);
        }

        if(jointROMQuestions.hasOwnProperty(joint.id)) {
            questions.push(jointROMQuestions[joint.id]);
        }

        if(jointFunctionsQuestions.hasOwnProperty(joint.id)) {
            for(const jointFunctionsQuestion of jointFunctionsQuestions[joint.id]) {
                questions.push(jointFunctionsQuestion);
            }
        }

        return questions;
    }

    #createQuestionChainForMuscle({
        muscle,
        muscleNameQuestions,
        muscleAnatomyQuestions,
        muscleJointFunctionsQuestions,
        muscleSpecialFunctionsQuestions
    }) {
        const questions = [];

        if(muscleNameQuestions.hasOwnProperty(muscle.id)) {
            questions.push(muscleNameQuestions[muscle.id]);
        }

        if(muscleAnatomyQuestions.hasOwnProperty(muscle.id)) {
            questions.push(muscleAnatomyQuestions[muscle.id]);
        }

        if(muscleJointFunctionsQuestions.hasOwnProperty(muscle.id)) {
            questions.push(muscleJointFunctionsQuestions[muscle.id]);
        }

        if(muscleSpecialFunctionsQuestions.hasOwnProperty(muscle.id)) {
            questions.push(muscleSpecialFunctionsQuestions[muscle.id]);
        }

        return questions;
    }

    createQuestions({regionId}) {
        const quizData = this.#createQuizDataForRegion(regionId);

        const jointNameQuestions = this.#jointNameQuestionsFactory.create({joints: quizData.joints});
        const jointROMQuestions = this.#jointROMQuestionsFactory.create({joints: quizData.joints});
        const jointFunctionsQuestions = this.#jointFunctionsQuestionsFactory.create({joints: quizData.joints, quizMuscleFunctions: quizData.muscleFunctions});

        const muscleNameQuestions = this.#muscleNameQuestionsFactory.create({quizMuscles: quizData.muscles, quizMuscleFunctions: quizData.muscleFunctions});
        const muscleAnatomyQuestions = this.#muscleAnatomyQuestionsFactory.create({quizMuscles: quizData.muscles, quizMuscleFunctions: quizData.muscleFunctions});
        const muscleJointFunctionsQuestions = this.#muscleJointFunctionsQuestionsFactory.create({quizMuscles: quizData.muscles, quizMuscleFunctions: quizData.muscleFunctions});
        const muscleSpecialFunctionsQuestions = this.#muscleSpecialFunctionsQuestionsFactory.create({quizMuscles: quizData.muscles, quizMuscleFunctions: quizData.muscleFunctions});

        const shuffledJointsAndMusclesList = shuffle([
            ...quizData.joints,
            ...quizData.muscles,
        ]);

        return shuffledJointsAndMusclesList.flatMap(item => {
            if(item instanceof Joint) {
                return this.#createQuestionChainForJoint({
                    joint: item,
                    jointNameQuestions,
                    jointROMQuestions,
                    jointFunctionsQuestions
                });
            }

            return this.#createQuestionChainForMuscle({
                muscle: item,
                muscleNameQuestions,
                muscleAnatomyQuestions,
                muscleJointFunctionsQuestions,
                muscleSpecialFunctionsQuestions
            });
        });
    }
}