import MainMenuBlock from "../blocks/main-menu.js";

export default class QuizList {
    #mainMenuBlock;

    render() {
        this.#mainMenuBlock = new MainMenuBlock();

        return {
            header: [
                this.#mainMenuBlock.render("quizList"),
            ],
            main: `
<div class="d-flex flex-row justify-content-center">
    <div class="d-flex flex-column justify-content-center">
        <a href="/quiz/joints" class="btn btn-primary mb-3" data-navigo>Gewrichten</a>
        <a href="/quiz/muscles" class="btn btn-primary mb-3" data-navigo>Spieren</a>
    </div>
</div>
        `.trim(),
        };
    }

    cleanUp() {
        if(this.#mainMenuBlock instanceof MainMenuBlock) {
            this.#mainMenuBlock.cleanUp();
        }
    }
}
