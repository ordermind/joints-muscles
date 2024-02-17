import KnowledgeBankPrimaryLinksBlock from "../blocks/knowledge-bank-primary-links.js";
import MainMenuBlock from "../blocks/main-menu.js";
import ShowHideElementsBlock from "../blocks/show-hide-elements.js";
import { replaceLinks } from "../renderer.js";
import { debounce, deepEqual, massageStringForFlexibleComparison, removeChildren } from "../utils.js";
import { addLinkEventListeners, cleanUpLinkEventListeners, router } from "../router.js";

export default class ListPage {
    #mainMenuBlock;
    #primaryLinksBlock;
    #showHideElementsBlock;
    #pageWrapper;

    #items;

    constructor(items) {
        this.#items = items;

        this.onUpdateFilters = debounce(this.onUpdateFilters.bind(this));
    }

    getFilters() {
        throw new Error("Please implement this method in the subclass");
    }

    createHeaderRow() {
        throw new Error("Please implement this method in the subclass");
    }

    createDataRow(item) {
        throw new Error("Please implement this method in the subclass");
    }

    getRouteName() {
        throw new Error("Please implement this method in the subclass");
    }

    onUpdateFilters() {
        if(!this.#hasModifiedFilters()) {
            return;
        }

        this.#updateBrowserHistory();
        this.#renderList();
    }

    #getFilterValuesFromQueryString() {
        const currentLocation = router.getCurrentLocation();
        if(!currentLocation) {
            return {};
        }

        return new URLSearchParams(currentLocation.queryString);
    }

    #renderTextInputFilter(filter, filterValue) {
        const inputElement = document.createElement("input");
        inputElement.name = filter.name;
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("placeholder", filter.label);
        inputElement.classList.add("form-control");
        inputElement.value = filterValue;
        inputElement.addEventListener(filter.event, this.onUpdateFilters);

        const spyglassElement = document.createElement("span");
        spyglassElement.classList.add("ico", "ico-mglass");

        const wrapper = document.createElement("div");
        wrapper.classList.add("form-control-wrapper", "search-wrapper");

        wrapper.appendChild(inputElement);
        wrapper.appendChild(spyglassElement);

        return wrapper;
    }

    #renderFilter(filter, filterValue) {
        if(filter.type === 'textInput') {
            return this.#renderTextInputFilter(filter, filterValue);
        }

        throw new Error(`The filter type "${filter.type}" is not supported.`);
    }

    #renderFilters() {
        const filters = this.getFilters();
        const filterValues = this.#getFilterValuesFromQueryString();

        const formElement = document.createElement("form");
        formElement.name = "filters";
        formElement.classList.add("pt-2", "pb-2", "m-n2");
        formElement.setAttribute("onsubmit", "event.preventDefault()");

        for(const filter of filters) {
            const filterElement = this.#renderFilter(filter, filterValues.get(filter.name));

            formElement.appendChild(filterElement);
        }

        const filterWrapper = this.#pageWrapper.querySelector(".filter-wrapper");

        removeChildren(filterWrapper);

        filterWrapper.appendChild(formElement);
    }

    #hasModifiedFilters() {
        const formElement = document.querySelector(`form[name="filters"]`);
        if(!formElement) {
            return;
        }

        const newValues = Object.fromEntries(new FormData(formElement));
        const oldValues = Object.fromEntries(this.#getFilterValuesFromQueryString());

        return !deepEqual(newValues, oldValues);
    }

    #updateBrowserHistory() {
        const formElement = document.querySelector(`form[name="filters"]`);
        if(!formElement) {
            return;
        }

        const formData = new FormData(formElement);
        const filterValues = new URLSearchParams(formData);

        const newUrl = window.location.href.split("?")[0] + "?" + filterValues.toString();
        history.pushState(null, "", newUrl);
    }

    #filterSingleItemValue(itemValue, filterValue) {
        if(Array.isArray(itemValue)) {
            itemValue = itemValue.map(part => {
                if((typeof part === 'object' && part !== null)) {
                    return part.value;
                }

                return part;
            }).join("");
        }

        if (!(typeof itemValue === 'string' || itemValue instanceof String)) {
            return false;
        }

        return massageStringForFlexibleComparison(itemValue).includes(massageStringForFlexibleComparison(filterValue));
    }

    #getFilteredItems() {
        const filters = this.getFilters();
        const filterValues = this.#getFilterValuesFromQueryString();

        let filteredItems = [...this.#items];

        for(const filter of filters) {
            const filterValue = filterValues.get(filter.name);

            if(filterValue && (!filter.hasOwnProperty("minCharacters") || filterValue.length >= filter.minCharacters)) {
                filteredItems = filteredItems.filter(item => this.#filterSingleItemValue(item[filter.name], filterValue));
            }
        }

        return filteredItems;
    }

    #createDataRows() {
        return this.#getFilteredItems().map(item => this.createDataRow(item));
    }

    #renderList() {
        const content = `
<table class="table">
    ${this.createHeaderRow()}
    ${this.#createDataRows().join("")}
</table>
        `.trim();

        const template = document.createElement("template");
        template.innerHTML = replaceLinks(content);

        const listWrapper = this.#pageWrapper.querySelector(".list-wrapper");

        cleanUpLinkEventListeners();

        removeChildren(listWrapper);

        listWrapper.append(...template.content.children);

        addLinkEventListeners();

        this.#showHideElementsBlock.updateAfterRedraw();
    }

    render() {
        this.#mainMenuBlock = new MainMenuBlock();
        this.#primaryLinksBlock = new KnowledgeBankPrimaryLinksBlock();
        this.#showHideElementsBlock = new ShowHideElementsBlock();

        this.#pageWrapper = document.createElement("div");
        this.#pageWrapper.classList.add("page", "page-list");

        const filterWrapper = document.createElement("div");
        filterWrapper.classList.add("filter-wrapper");
        this.#pageWrapper.appendChild(filterWrapper);

        const listWrapper = document.createElement("div");
        listWrapper.classList.add("list-wrapper");
        this.#pageWrapper.appendChild(listWrapper);

        // Use setTimeout to make sure that the query string that is read actually comes from this page and not the one
        // before in the history. This is necessary because Navigo doesn't update the history until after the page is rendered.
        setTimeout(() => {
            this.#renderFilters();
            this.#renderList();
        }, 0);

        return {
            header: [
                this.#mainMenuBlock.render(this.getRouteName()),
                this.#showHideElementsBlock.render(),
            ],
            main: [
                this.#primaryLinksBlock.render(this.getRouteName()),
                this.#pageWrapper,
            ],
        };
    }

    cleanUp() {
        const filters = this.getFilters();
        for(const filter of filters) {
            const filterElement = document.querySelector(`form[name="filters"] [name="${filter.name}"]`);
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
