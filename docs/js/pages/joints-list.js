import KnowledgeBankPrimaryLinksBlock from "../blocks/knowledge-bank-primary-links.js";
import MainMenuBlock from "../blocks/main-menu.js";
import ShowHideElementsBlock from "../blocks/show-hide-elements.js";
import { debounce, removeChildren, renderJointType } from "../utils.js";
import { replaceLinks } from "../renderer.js";
import { addLinkEventListeners, cleanUpLinkEventListeners } from "../router.js";

export default class JointsListPage {
    #mainMenuBlock;
    #primaryLinksBlock;
    #showHideElementsBlock;
    #pageWrapper;

    #arrJoints;
    #jointTypes;

    constructor() {
        this.onUpdateFilters = debounce(this.onUpdateFilters.bind(this));
    }

    onUpdateFilters() {
        this.#renderList();
    }

    #getFilters() {
        return {
            label: {
                name: "label",
                selector: `form[name="filters"] input[name="label"]`,
                event: "keyup",
                minCharacters: 3,
            }
        }
    }

    #renderFilters() {
        const filterEventMapping = this.#getFilters();

        const formElement = document.createElement("form");
        formElement.name = "filters";
        formElement.classList.add("pt-2", "pb-2");

        const labelFilterInput = document.createElement("input");
        labelFilterInput.name = filterEventMapping.label.name;
        labelFilterInput.setAttribute("type", "text");
        labelFilterInput.setAttribute("placeholder", "Naam gewricht");
        labelFilterInput.classList.add("form-control");
        labelFilterInput.addEventListener(filterEventMapping.label.event, this.onUpdateFilters);

        const labelFilterSpyglass = document.createElement("span");
        labelFilterSpyglass.classList.add("ico", "ico-mglass");

        const labelFilterWrapper = document.createElement("div");
        labelFilterWrapper.classList.add("form-control-wrapper", "search-wrapper");

        labelFilterWrapper.appendChild(labelFilterInput);
        labelFilterWrapper.appendChild(labelFilterSpyglass);

        formElement.appendChild(labelFilterWrapper);

        const filterWrapper = this.#pageWrapper.querySelector(".filter-wrapper");

        removeChildren(filterWrapper);

        filterWrapper.appendChild(formElement);
    }

    #renderMovements(joint) {
        let output = `<ul>`;

        for(const movement of joint.movements) {
            output += `<li>${movement.label}</li>`;
        }

        output += `</ul>`;

        return output;
    }

    #getFilteredJointData() {
        const formElement = document.querySelector(`form[name="filters"]`);
        if(!formElement) {
            return this.#arrJoints;
        }

        const formData = new FormData(formElement);
        const filters = this.#getFilters();
        let filteredJoints = [...this.#arrJoints];

        for(const filter of Object.values(filters)) {
            const filterValue = formData.get(filter.name);

            if(filterValue && (!filter.hasOwnProperty("minCharacters") || filterValue.length >= filter.minCharacters)) {
                filteredJoints = filteredJoints.filter(joint => joint[filter.name].includes(filterValue));
            }
        }

        return filteredJoints;
    }

    #createRows() {
        const joints = this.#getFilteredJointData();

        let rows = [];

        for(const joint of joints) {
            let row = `
<tr>
    <td>[Link type="Joint" targetId="${joint.id}" label="${joint.shortLabel}"]</td>
    <td class="${joint.typeIds.length ? "hideable" : ""}">`+ (joint.typeIds.length ? renderJointType(joint, this.#jointTypes, true) : "") + `</td>
    <td class="${joint.cpp ? "hideable" : ""}">` + (joint.cpp ?? "") + `</td>
    <td class="${joint.mlpp ? "hideable" : ""}">` + (joint.mlpp ?? "") + `</td>
    <td class="${joint.movements.length ? "hideable" : ""}">` + (joint.movements.length ? this.#renderMovements(joint) : "") + `</td>
</tr>
            `.trim();

            rows.push(row);
        }

        return rows;
    }

    #renderList() {
        const content = `
<table class="table">
    <tr>
        <th>Naam gewricht</th>
        <th>Type gewricht</th>
        <th>CPP</th>
        <th>MLPP</th>
        <th>Bewegingen</th>
    </tr>
    ${this.#createRows().join("")}
</table>
        `.trim();

        const template = document.createElement("template");
        template.innerHTML = replaceLinks(content);

        const listWrapper = this.#pageWrapper.querySelector(".list-wrapper");

        cleanUpLinkEventListeners();

        removeChildren(listWrapper);

        listWrapper.append(...template.content.children);

        addLinkEventListeners();
    }

    render({arrJoints, jointTypes}) {
        this.#arrJoints = arrJoints;
        this.#jointTypes = jointTypes;

        this.#pageWrapper = document.createElement("div");
        this.#pageWrapper.classList.add("page", "page-list", "page-joints-list");

        const filterWrapper = document.createElement("div");
        filterWrapper.classList.add("filter-wrapper");
        this.#pageWrapper.appendChild(filterWrapper);

        const listWrapper = document.createElement("div");
        listWrapper.classList.add("list-wrapper");
        this.#pageWrapper.appendChild(listWrapper);

        this.#renderFilters();
        this.#renderList();

        this.#mainMenuBlock = new MainMenuBlock();
        this.#primaryLinksBlock = new KnowledgeBankPrimaryLinksBlock();
        this.#showHideElementsBlock = new ShowHideElementsBlock();

        return {
            header: [
                this.#mainMenuBlock.render("jointsList"),
                this.#showHideElementsBlock.render(),
            ],
            main: [
                this.#primaryLinksBlock.render("jointsList"),
                this.#pageWrapper,
            ],
        };
    }

    cleanUp() {
        const filters = this.#getFilters();
        for(const filter of Object.values(filters)) {
            const filterElement = document.querySelector(filter.selector);
            if(!filterElement) {
                continue;
            }

            filterElement.removeEventListener(filter.event, this.onUpdateFilters);
        }

        if(this.#mainMenuBlock instanceof MainMenuBlock) {
            this.#mainMenuBlock.cleanUp();
        }

        if(this.#primaryLinksBlock instanceof KnowledgeBankPrimaryLinksBlock) {
            this.#primaryLinksBlock.cleanUp();
        }

        if(this.#showHideElementsBlock instanceof ShowHideElementsBlock) {
            this.#showHideElementsBlock.cleanUp();
        }

        removeChildren(this.#pageWrapper);
    }
}
