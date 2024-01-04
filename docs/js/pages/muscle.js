import markdownParser from "../../js/markdown-parser.js";
import KnowledgeBankPrimaryLinksBlock from "../blocks/knowledge-bank-primary-links.js";
import MainMenuBlock from "../blocks/main-menu.js";
import ShowHideElementsBlock from "../blocks/show-hide-elements.js";
import renderAnatomicStructureOrString from "../data-types/utils.js";
import { capitalizeTitle, getMuscleJointFunctionsForRendering, renderList, renderNotesTooltip } from "../utils.js";

export default class MusclePage {
    #mainMenuBlock;
    #primaryLinksBlock;
    #showHideElementsBlock;

    #createJointFunctionsRows(muscle, objJoints) {
        const allJointFunctions = getMuscleJointFunctionsForRendering(muscle, objJoints);

        let rows = [];

        for (const [jointId, jointFunctions] of Object.entries(allJointFunctions)) {
            let row = `
<tr class="hideable">
    <td>[Link type="Joint" targetId="${jointId}" label="${objJoints[jointId].shortLabel}"]</td>
    <td>${renderList(jointFunctions.primeMovers, true)}</td>
    <td>${renderList(jointFunctions.otherMuscles, true)}</td>
</tr>
            `.trim();

            rows.push(row);
        }

        return rows;
    }

    render({ muscle, objJoints }) {
        const title = capitalizeTitle(muscle.label);

    let content = `
<div class="page page-muscle">
    <h1 class="display-1 fs-1">${title}</h1>
    <div class="row">`;

        if(muscle.image) {
            content += `
        <div class="col flex-grow-0 d-none d-lg-block">
            <img src="${muscle.image}" class="page-image" />
        </div>
        `.trim();
        }

        content += `
        <div class="col">
        `.trim();

        if(muscle.description) {
            content += markdownParser.parse(muscle.description.trim());
        }

        content += `
            <table class="table table-borderless d-inline-block w-auto">
                <tr>
                    <th>Origo(s)</th>
                    <td class="${muscle.origos.length ? "hideable" : ""}">${renderList(muscle.origos.map(origo => renderAnatomicStructureOrString(origo, true)), true)}</td>
                </tr>
                <tr>
                    <th>Insertie(s)</th>
                    <td class="${muscle.insertions.length ? "hideable" : ""}">${renderList(muscle.insertions.map(insertion => renderAnatomicStructureOrString(insertion, true)), true)}</td>
                </tr>
            </table>

            <h2 class="display-2 fs-2">Gewrichtsfuncties</h2>
        `.trim();

        if(muscle.functions.length) {
            content += `
                <table class="table d-inline-block w-auto | joint-functions">
                    <tr>
                        <th>Gewricht</th>
                        <th>Prime mover</th>
                        <th>Assisteert</th>
                    </tr>
                ${this.#createJointFunctionsRows(muscle, objJoints).join("")}
                </table>
            `.trim();
        } else {
            content += `<p><em>Er zijn geen gewrichtsfuncties bij deze spier.</em></p>`;
        }

        if(muscle.specialFunctions.length) {
            content += `
            <h2 class="display-2 fs-2">Speciale functies</h2>
            <div class="d-inline-block mb-3 | hideable">${renderList(muscle.specialFunctions.map(specialFunction => specialFunction.functionDescription + renderNotesTooltip(specialFunction.notes)), true)}</div>
            `.trim();
        }

        content += `
        </div>
    </div>
</div>
        `.trim();

        this.#mainMenuBlock = new MainMenuBlock();
        this.#primaryLinksBlock = new KnowledgeBankPrimaryLinksBlock();
        this.#showHideElementsBlock = new ShowHideElementsBlock();

        return {
            header: [
                this.#mainMenuBlock.render("musclePage"),
                this.#showHideElementsBlock.render(),
            ],
            main: [
                this.#primaryLinksBlock.render("musclePage"),
                content,
            ],
        };
    }

    cleanUp() {
        if(this.#mainMenuBlock instanceof MainMenuBlock) {
            this.#mainMenuBlock.cleanUp();
        }

        if(this.#primaryLinksBlock instanceof KnowledgeBankPrimaryLinksBlock) {
            this.#primaryLinksBlock.cleanUp();
        }

        if(this.#showHideElementsBlock instanceof ShowHideElementsBlock) {
            this.#showHideElementsBlock.cleanUp();
        }
    }
}
