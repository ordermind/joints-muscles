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
        <a href="/quiz-questions-filter/torso" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 d-flex align-items-center" data-navigo><img src="./images/misc/icon-xray.png" class="quiz-icon" /><span class="ms-3 pe-none">Romp</span></a>

        <a href="/quiz-questions-filter/upper_extremity" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 text-start" data-navigo><span class="quiz-icon">💪</span><span class="ms-3 pe-none">Bovenste extremiteit</span></a>

        <a href="/quiz-questions-filter/hand" class="btn btn-outline-primary btn-lg ms-4 pt-3 pb-3 pe-5 fs-4 text-start" data-navigo><span class="quiz-icon">✋</span><span class="ms-3 pe-none">Alleen de hand</span></a>

        <a href="/quiz-questions-filter/lower_extremity" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 text-start" data-navigo><span class="quiz-icon">🦵</span><span class="ms-3 pe-none">Onderste extremiteit</span></a>

        <a href="/quiz-questions-filter/foot" class="btn btn-outline-primary btn-lg ms-4 pt-3 pb-3 pe-5 fs-4 text-start" data-navigo><span class="quiz-icon">🦶</span><span class="ms-3 pe-none">Alleen de voet</span></a>

        <a href="/quiz-questions-filter/all" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 text-start" data-navigo><span class="quiz-icon">🤸</span><span class="ms-3 pe-none">Het hele lichaam</span></a>
    </div>
</div>
        `.trim(),
        };
    }

    cleanUp() {
        if (this.#mainMenuBlock instanceof MainMenuBlock) {
            this.#mainMenuBlock.cleanUp();
        }
    }
}
