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
<h1 class="display-1 fs-1 text-center">Quiz</h1>
<div class="d-grid gap-3 m-auto | nav-buttons-wrapper">
    <a href="/quiz/joints" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 text-start" data-navigo>🦾<span class="ms-3">Gewrichten</span></a>
    <a href="/quiz/muscles" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 text-start" data-navigo>💪<span class="ms-3">Spieren</span></a>
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
