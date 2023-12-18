export default class HomePage {
    render() {
        return {
            main: `
<div class="d-flex flex-row justify-content-center">
    <div class="d-flex flex-column justify-content-center">
        <a href="/joints" class="btn btn-primary mb-3" data-navigo>Kennisbank</a>
        <a href="/quiz" class="btn btn-primary mb-3" data-navigo>Quiz</a>
    </div>
</div>
        `.trim(),
        };
    }

    cleanUp() {}
}
