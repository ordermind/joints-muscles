import QuestionsDataFactory from "./quiz/question-factories/QuestionsDataFactory.js";

self.onmessage = (e) => {
    console.log('Received message', e.data);

    const questionsDataFactory = new QuestionsDataFactory({});
    questionsDataFactory.createQuestionsData({regionId: "torso"});
}