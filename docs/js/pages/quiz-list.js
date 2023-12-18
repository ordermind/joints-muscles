export default class QuizList {
    render() {
        return {
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

    cleanUp() {}
}
