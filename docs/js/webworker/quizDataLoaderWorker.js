import QuestionsDataFactory from "./quiz/question-factories/QuestionsDataFactory.js";

self.onmessage = (e) => {
    const {type, data} = e.data;

    if(type !== "TYPE_START") {
        return;
    }

    const questionsDataFactory = new QuestionsDataFactory({passThroughMode: data.passThroughMode ?? false});
    const questionsData = questionsDataFactory.createQuestionsData({regionId: data.regionId});

    self.postMessage({type: "TYPE_FINISHED", data: JSON.stringify(questionsData)});
}