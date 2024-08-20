export default class HomePage {
    render() {
        return {
            main: `
<div class="d-grid gap-3 m-auto | nav-buttons-wrapper">
    <a href="/joints" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 text-start" data-navigo>💡<span class="ms-3 pe-none">Kennisbank</span></a>
    <a href="/quiz" class="btn btn-outline-primary btn-lg pt-3 pb-3 pe-5 fs-4 text-start" data-navigo>🗒️<span class="ms-3 pe-none">Quiz</span></a>
</div>
        `.trim(),
        };
    }

    cleanUp() {}
}
