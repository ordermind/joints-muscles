export default class TestPage {
    #initWebWorker() {
        const worker = new Worker("./js/webworker/quizDataLoaderWorker.js", {type: "module"});
        worker.postMessage("hej");
    }

    render() {
        this.#initWebWorker();

        return {
            main: "<p>Test page</p>",
        };
    }
}