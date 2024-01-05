import DraggableQuestion from "./questions/DraggableQuestion.js";
import MultipleChoiceQuestionSingleAnswer from "./questions/MultipleChoiceQuestionSingleAnswer.js";
import MultipleTextInputQuestion from "./questions/MultipleTextInputQuestion.js";

export default function transformQuestionDataToQuestion(questionData) {
    if(questionData.className === "DraggableQuestion") {
        return new DraggableQuestion(questionData.data);
    }

    if(questionData.className === "MultipleChoiceQuestionSingleAnswer") {
        return new MultipleChoiceQuestionSingleAnswer(questionData.data);
    }

    if(questionData.className === "MultipleTextInputQuestion") {
        return new MultipleTextInputQuestion(questionData.data);
    }

    throw new Error(`Error transforming question data: The class name "${questionData.className}" is unknown.`);
}
