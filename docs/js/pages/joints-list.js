import KnowledgeBankPrimaryLinksBlock from "../blocks/knowledge-bank-primary-links.js";
import MainMenuBlock from "../blocks/main-menu.js";
import ShowHideElementsBlock from "../blocks/show-hide-elements.js";
import { renderJointType } from "../utils.js";

export default class JointsListPage {
    #mainMenuBlock;
    #primaryLinksBlock;
    #showHideElementsBlock;

    #renderMovements(joint) {
        let output = `<ul>`;

        for(const movement of joint.movements) {
            output += `<li>${movement.label}</li>`;
        }

        output += `</ul>`;

        return output;
    }

    #createRows(arrJoints, jointTypes) {
        let rows = [];

        for(const joint of arrJoints) {
            let row = `
<tr>
    <td>[Link type="Joint" targetId="${joint.id}" label="${joint.shortLabel}"]</td>
    <td class="${joint.typeIds.length ? "hideable" : ""}">`+ (joint.typeIds.length ? renderJointType(joint, jointTypes, true) : "") + `</td>
    <td class="${joint.cpp ? "hideable" : ""}">` + (joint.cpp ?? "") + `</td>
    <td class="${joint.mlpp ? "hideable" : ""}">` + (joint.mlpp ?? "") + `</td>
    <td class="${joint.movements.length ? "hideable" : ""}">` + (joint.movements.length ? this.#renderMovements(joint) : "") + `</td>
</tr>
            `.trim();

            rows.push(row);
        }

        return rows;
    }

    render({arrJoints, jointTypes}) {
        const content = `
    <table class="table">
        <tr>
            <th>Naam gewricht</th>
            <th>Type gewricht</th>
            <th>CPP</th>
            <th>MLPP</th>
            <th>Bewegingen</th>
        </tr>
        ${this.#createRows(arrJoints, jointTypes).join("")}
    </table>
        `.trim();

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
