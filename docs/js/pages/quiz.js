import MainMenuBlock from "../blocks/main-menu.js";

export default class QuizPage {
    #quiz;
    #mainMenuBlock;

    render({ quiz }) {
        this.#quiz = quiz;
        this.#mainMenuBlock = new MainMenuBlock();

        const elements = document.createElement("div");
        elements.classList.add("pb-5", "page-quiz", `page-quiz-${quiz.id}`);
        quiz.start(elements);

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
