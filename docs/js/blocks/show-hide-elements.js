export default class ShowHideElementsBlock {
    #element;

    #showAll() {
        for(const element of document.querySelectorAll(".hideable-cover")) {
            element.remove();
        }

        sessionStorage.removeItem('hide-info');
    }

    hideAll() {
        for(const element of document.querySelectorAll(".hideable")) {
            element.querySelectorAll(".hideable-cover").forEach(coverElement => coverElement.remove());

            const coverElement = document.createElement("span");
            coverElement.classList.add("hideable-cover");
            coverElement.setAttribute("onclick", "this.remove()");
            element.appendChild(coverElement);
        }

        sessionStorage.setItem('hide-info', true);
    }

    updateAfterRedraw() {
        if(sessionStorage.getItem('hide-info')) {
            this.hideAll();
        }
    }

    #doRender() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("show-hide-elements-wrapper");

        const showAllElement = document.createElement("span");
        showAllElement.classList.add("fs-4", "cursor-pointer", "position-relative", "d-inline-block", "show-all");
        showAllElement.innerHTML = "👁";
        showAllElement.addEventListener("click", this.#showAll);

        const hideAllElement = document.createElement("span");
        hideAllElement.classList.add("fs-4", "cursor-pointer", "position-relative", "d-inline-block", "hide-all");
        hideAllElement.innerHTML = `👁<span class="position-absolute top-0 start-0">❌</span>`;
        hideAllElement.addEventListener("click", this.hideAll);

        wrapper.append(showAllElement, hideAllElement);

        return wrapper;
    }

    render() {
        if(this.#element === undefined) {
            this.#element = this.#doRender();
        }

        return this.#element;
    }

    cleanUp() {
        if(this.#element === undefined || this.#element === null) {
            return;
        }

        const showAllElement = this.#element.querySelector(".show-all");
        showAllElement.removeEventListener("click", this.#showAll);

        const hideAllElement = this.#element.querySelector(".hide-all");
        hideAllElement.removeEventListener("click", this.hideAll);
    }
}
