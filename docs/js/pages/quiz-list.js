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
<div class="page page-quiz-list">
    <h1 class="display-1 fs-1 text-center">Quiz</h1>
    <div class="d-grid gap-3 m-auto | nav-buttons-wrapper">
        <a href="/quiz/torso" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 d-flex align-items-center" data-navigo><img src="./images/misc/icon-xray.png" class="col flex-grow-0"/><span class="ms-3 col flex-grow-0">Romp</span></a>

        <a href="/quiz/upper_extremity" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 text-start" data-navigo>💪<span class="ms-3">Bovenste extremiteit</span></a>

        <a href="/quiz/lower_extremity" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 text-start" data-navigo>🦵<span class="ms-3">Onderste extremiteit</span></a>

        <a href="/quiz/all" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 text-start" data-navigo>🤸<span class="ms-3">Het hele lichaam</span></a>
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
