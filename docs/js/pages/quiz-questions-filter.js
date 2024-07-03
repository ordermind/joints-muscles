import MainMenuBlock from "../blocks/main-menu.js";
import { router } from "../router.js";

export default class QuizQuestionsFilter {
    #mainMenuBlock;
    #regionId;

    constructor() {
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onStartButtonClick = this.onStartButtonClick.bind(this);
    }

    #getHTML() {
        return `
    <h1 class="display-1 fs-1">Selecteer vraagtypen</h1>
    <form class="d-inline-block text-start" name="questions_filter">
        <div class="">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" name="joints" id="joints" checked />
                <label class="form-check-label" for="joints">Gewrichten</label>
            </div>
            <div class="ms-4" id="joints-questions">
                <div class="form-check mt-2">
                    <input class="form-check-input" type="checkbox" name="joint_name" id="joint_name" checked />
                    <label class="form-check-label" for="joint_name">Herkennen</label>
                </div>
                <div class="form-check mt-2">
                    <input class="form-check-input" type="checkbox" name="joint_rom" id="joint_rom" checked />
                    <label class="form-check-label" for="joint_rom">ROM</label>
                </div>
                <div class="form-check mt-2">
                    <input class="form-check-input" type="checkbox" name="joint_functions" id="joint_functions" checked />
                    <label class="form-check-label" for="joint_functions">Functies</label>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" name="muscles" id="muscles" checked />
                <label class="form-check-label" for="muscles">Spieren</label>
            </div>
            <div class="ms-4" id="muscles-questions">
                <div class="form-check mt-2">
                    <input class="form-check-input" type="checkbox" name="muscle_name" id="muscle_name" checked />
                    <label class="form-check-label" for="muscle_name">Herkennen</label>
                </div>
                <div class="form-check mt-2">
                    <input class="form-check-input" type="checkbox" name="muscle_anatomy" id="muscle_anatomy" checked />
                    <label class="form-check-label" for="muscle_anatomy">Origo & insertie</label>
                </div>
                <div class="form-check mt-2">
                    <input class="form-check-input" type="checkbox" name="muscle_joint_functions" id="muscle_joint_functions" checked />
                    <label class="form-check-label" for="muscle_joint_functions">Gewrichtsfuncties</label>
                </div>
                <div class="form-check mt-2">
                    <input class="form-check-input" type="checkbox" name="muscle_special_functions" id="muscle_special_functions" checked />
                    <label class="form-check-label" for="muscle_special_functions">Speciale functies</label>
                </div>
            </div>
        </div>
        <button class="btn btn-primary btn-lg mt-4" id="btn-quiz-start">Start de quiz</button>
    </div>
</div>
        `.trim();
    }

    #hasSelection(submittedData) {
        const filteredQuestions = Object.fromEntries(Object.entries(submittedData).filter(([key]) => {
            return (Object.hasOwn(submittedData, "joints") && key.startsWith("joint_"))
             || Object.hasOwn(submittedData, "muscles") && key.startsWith("muscle_");
        }));

        return Object.keys(filteredQuestions).length > 0;
    }

    onJointsChange(e) {
        const jointsChecked = e.target.checked;
        if(jointsChecked) {
            document.getElementById("joints-questions").classList.remove("d-none");
        } else {
            document.getElementById("joints-questions").classList.add("d-none");
        }
    }

    onMusclesChange(e) {
        const musclesChecked = e.target.checked;
        if(musclesChecked) {
            document.getElementById("muscles-questions").classList.remove("d-none");
        } else {
            document.getElementById("muscles-questions").classList.add("d-none");
        }
    }

    onCheckboxChange(e) {
        const submittedData = Object.fromEntries(new FormData(document.forms.questions_filter));

        if(this.#hasSelection(submittedData)) {
            document.getElementById("btn-quiz-start").removeAttribute("disabled");
        } else {
            document.getElementById("btn-quiz-start").setAttribute("disabled", true);
        }
    }

    onStartButtonClick(e) {
        e.preventDefault();

        const submittedData = Object.fromEntries(new FormData(document.forms.questions_filter));
        const filteredQuestions = Object.fromEntries(Object.entries(submittedData).filter(([key]) => {
            return (Object.hasOwn(submittedData, "joints") && key.startsWith("joint_"))
             || Object.hasOwn(submittedData, "muscles") && key.startsWith("muscle_");
        }));

        router.navigate(`/quiz/${this.#regionId}?questions=${JSON.stringify(filteredQuestions)}`)
    }

    render({ regionId }) {
        this.#mainMenuBlock = new MainMenuBlock();
        this.#regionId = regionId;

        const rawHTML = this.#getHTML();
        const pageWrapper = document.createElement("div");
        pageWrapper.classList.add("page", "page-quiz-questions-filter", "text-center")
        pageWrapper.innerHTML = rawHTML;

        pageWrapper.querySelector("#joints").addEventListener("change", this.onJointsChange);
        pageWrapper.querySelector("#muscles").addEventListener("change", this.onMusclesChange);
        pageWrapper.querySelector("#btn-quiz-start").addEventListener("click", this.onStartButtonClick);

        pageWrapper.querySelectorAll(`input[type="checkbox"]`).forEach(element => {
            element.addEventListener("change", this.onCheckboxChange);
        })

        return {
            header: [
                this.#mainMenuBlock.render("quizQuestionsFilter"),
            ],
            main: pageWrapper,
        };
    }

    cleanUp() {
        if(this.#mainMenuBlock instanceof MainMenuBlock) {
            this.#mainMenuBlock.cleanUp();
        }

        document.querySelector("#joints").removeEventListener("change", this.onJointsChange);
        document.querySelector("#muscles").removeEventListener("change", this.onMusclesChange);
        document.querySelector("#btn-quiz-start").removeEventListener("click", this.onStartButtonClick);

        document.querySelectorAll(`input[type="checkbox"]`).forEach(element => {
            element.removeEventListener("change", this.onCheckboxChange);
        })
    }
}
