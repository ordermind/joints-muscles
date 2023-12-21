export default class HomePage {
    render() {
        return {
            main: `
<div class="d-flex flex-row justify-content-center">
    <div class="d-flex flex-column justify-content-center">
        <div class="d-grid gap-3 | nav-buttons-wrapper">
            <a href="/joints" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 text-start" data-navigo>💡<span class="ms-3">Kennisbank</span></a>
            <a href="/quiz" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 text-start" data-navigo>🗒️<span class="ms-3">Quiz</span></a>
        </div>
    </div>
</div>
        `.trim(),
        };
    }

    cleanUp() {}
}
