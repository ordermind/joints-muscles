export default class QuizPage {
    #quiz;

    render({ quiz }) {
        this.#quiz = quiz;

        return {
            main: `${quiz.start()}`.trim(),
        };
    }

    cleanUp() {
        this.#quiz.cleanUp();
    }
}
