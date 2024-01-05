import KnowledgeBankPrimaryLinksBlock from "../blocks/knowledge-bank-primary-links.js";
import MainMenuBlock from "../blocks/main-menu.js";
import ShowHideElementsBlock from "../blocks/show-hide-elements.js";
import renderAnatomicStructureOrString from "../data-types/utils.js";
import { replaceLinks } from "../renderer.js";
import { debounce, getMuscleJointFunctionsForRendering, removeChildren, renderList, renderNotesTooltip } from "../utils.js";
import { addLinkEventListeners, cleanUpLinkEventListeners } from "../router.js";

export default class MuscleListPage {
    #mainMenuBlock;
    #primaryLinksBlock;
    #showHideElementsBlock;
    #pageWrapper;

    #arrMuscles;
    #objJoints;

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
        labelFilterInput.setAttribute("placeholder", "Naam spier");
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

    #getPrimeMoverColumn(muscle) {
        const allJointFunctions = getMuscleJointFunctionsForRendering(muscle, this.#objJoints);

        return Object.entries(allJointFunctions).map(([jointId, jointFunctions]) => {
            if(!Object.keys(jointFunctions.primeMovers).length) {
                return null;
            }

            return `[Link type="Joint" targetId="${jointId}" label="${this.#objJoints[jointId].shortLabel}"]: ${jointFunctions.primeMovers.join(", ")}`;
        })
        .filter(line => line !== null);
    }

    #getAssistantColumn(muscle) {
        const allJointFunctions = getMuscleJointFunctionsForRendering(muscle, this.#objJoints);

        return Object.entries(allJointFunctions).map(([jointId, jointFunctions]) => {
            if(!Object.keys(jointFunctions.otherMuscles).length) {
                return null;
            }

            return `[Link type="Joint" targetId="${jointId}" label="${this.#objJoints[jointId].shortLabel}"]: ${jointFunctions.otherMuscles.join(", ")}`;
        })
        .filter(line => line !== null);
    }

    #getFilteredMuscleData() {
        const formElement = document.querySelector(`form[name="filters"]`);
        if(!formElement) {
            return this.#arrMuscles;
        }

        const formData = new FormData(formElement);
        const filters = this.#getFilters();
        let filteredMuscles = [...this.#arrMuscles];

        for(const filter of Object.values(filters)) {
            const filterValue = formData.get(filter.name);

            if(filterValue && (!filter.hasOwnProperty("minCharacters") || filterValue.length >= filter.minCharacters)) {
                filteredMuscles = filteredMuscles.filter(muscle => muscle[filter.name].includes(filterValue));
            }
        }

        return filteredMuscles;
    }

    #createRows() {
        const muscles = this.#getFilteredMuscleData();

        let rows = [];

        for(const muscle of muscles) {
            let row = `
<tr>
    <td>[Link type="Muscle" targetId="${muscle.id}" label="${muscle.label}"]</td>
    <td class="${muscle.origos.length ? "hideable" : ""}">${renderList(muscle.origos.map(origo => renderAnatomicStructureOrString(origo, true)), true)}</td>
    <td class="${muscle.insertions.length ? "hideable" : ""}">${renderList(muscle.insertions.map(insertion => renderAnatomicStructureOrString(insertion, true)), true)}</td>
    <td class="${muscle.hasPrimeMoverJointFunctions() ? "hideable" : ""}">` + renderList(this.#getPrimeMoverColumn(muscle), true) + `</td>
    <td class="${muscle.hasAssistantJointFunctions() ? "hideable" : ""}">` + renderList(this.#getAssistantColumn(muscle), true) + `</td>
    <td class="${muscle.specialFunctions.length ? "hideable" : ""}">` + renderList(muscle.specialFunctions.map(specialFunction => specialFunction.functionDescription + renderNotesTooltip(specialFunction.notes)), true) + `</td>
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
        <th>Naam spier</th>
        <th>Origo(s)</th>
        <th>Insertie(s)</th>
        <th>Prime mover</th>
        <th>Assisteert</th>
        <th>Speciale functies</th>
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

    render({arrMuscles, objJoints}) {
        this.#arrMuscles = arrMuscles;
        this.#objJoints = objJoints;

        this.#pageWrapper = document.createElement("div");
        this.#pageWrapper.classList.add("page", "page-list", "page-muscles-list");

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
                this.#mainMenuBlock.render("musclesList"),
                this.#showHideElementsBlock.render(),
            ],
            main: [
                this.#primaryLinksBlock.render("musclesList"),
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
