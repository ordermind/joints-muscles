import QuestionsDataFactory from "../quiz/question-data-factories/QuestionsDataFactory.js";

self.onmessage = (e) => {
    const {type, data} = e.data;

    if(type !== "TYPE_START") {
        return;
    }

    const questionsDataFactory = new QuestionsDataFactory({passThroughMode: data.passThroughMode ?? false});
    const questionsData = questionsDataFactory.createQuestionsData({regionId: data.regionId, questionsFilter: data.questionsFilter});

    self.postMessage({type: "TYPE_FINISHED", data: JSON.stringify(questionsData)});
}