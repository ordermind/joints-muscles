import MainMenuBlock from "../blocks/main-menu.js";
import Quiz from "../webworker/quiz/quiz.js";

export default class QuizPage {
    #quiz;
    #mainMenuBlock;

    render({ regionId }) {
        this.#quiz = new Quiz({regionId});
        this.#mainMenuBlock = new MainMenuBlock();

        const elements = document.createElement("div");
        elements.classList.add("pb-3", "page-quiz", `page-quiz-${regionId}`);
        this.#quiz.start(elements);

        return {
            header: [
                this.#mainMenuBlock.render("quizPage"),
            ],
            main: elements,
        };
    }

    cleanUp() {
        if(this.#mainMenuBlock instanceof MainMenuBlock) {
            this.#mainMenuBlock.cleanUp();
        }
        this.#quiz.cleanUp();
    }
}
