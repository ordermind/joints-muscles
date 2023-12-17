export default class HomePage {
    render() {
        return {
            main: `
<div class="home">
    <a href="/joints" class="btn btn-primary" data-navigo>Kennisbank</a>
</div>
        `.trim(),
        };
    }

    cleanUp() {}
}
