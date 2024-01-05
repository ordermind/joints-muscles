import QuestionsDataFactory from "../quiz/question-data-factories/QuestionsDataFactory.js";
import debugTimer from "../../vendor/ordermind/timer-dev-ts/js/timer.min.js";

self.onmessage = (e) => {
    const {type, data} = e.data;

    if(type !== "TYPE_START") {
        return;
    }

    const questionsDataFactory = new QuestionsDataFactory({passThroughMode: data.passThroughMode ?? false});

    const timedFunction = debugTimer.wrap(questionsDataFactory.createQuestionsData.bind(questionsDataFactory));
    const timedResult = timedFunction({regionId: data.regionId});
    const questionsData = timedResult.result;

    console.log('quiz loading time', data.regionId, timedResult.execTimeInMs);

    // const questionsData = questionsDataFactory.createQuestionsData({regionId: data.regionId});

    self.postMessage({type: "TYPE_FINISHED", data: JSON.stringify(questionsData)});
}