import MainMenuBlock from "../blocks/main-menu.js";
import ShowHideElementsBlock from "../blocks/show-hide-elements.js";
import { renderJointType } from "../utils.js";

export default class JointsListPage {
    #mainMenuBlock;
    #showHideElementsBlock;

    #renderMovements(joint) {
        let output = `<ul>`;

        for(const movement of joint.movements) {
            output += `<li>${movement.label}</li>`;
        }

        output += `</ul>`;

        return output;
    }

    #createRows(joints, jointTypes) {
        let rows = [];

        for(const [_, joint] of Object.entries(joints)) {
            let row = `
<tr>
    <td>[Link type="Joint" targetId="${joint.id}" label="${joint.shortLabel}"]</td>
    <td><div class="hideable">${renderJointType(joint, jointTypes, true)}</div></td>
    <td><div class="hideable">${joint.cpp}</div></td>
    <td><div class="hideable">${joint.mlpp}</div></td>
    <td><div class="hideable">${this.#renderMovements(joint)}</div></td>
</tr>
            `.trim();

            rows.push(row);
        }

        return rows;
    }

    render({joints, jointTypes}) {
        const content = `
    <h1 class="display-1 fs-1">Gewrichten</h1>
    <table class="table">
        <tr>
            <th>Naam gewricht</th>
            <th>Type gewricht</th>
            <th>CPP</th>
            <th>MLPP</th>
            <th>Bewegingen</th>
        </tr>
        ${this.#createRows(joints, jointTypes).join("")}
    </table>
        `.trim();

        this.#mainMenuBlock = new MainMenuBlock();
        this.#showHideElementsBlock = new ShowHideElementsBlock();

        return {
            header: [
                this.#mainMenuBlock.render("jointsList"),
                this.#showHideElementsBlock.render(),
            ],
            main: content,
        };
    }

    cleanUp() {
        if(this.#mainMenuBlock instanceof MainMenuBlock) {
            this.#mainMenuBlock.cleanUp();
        }

        if(this.#showHideElementsBlock instanceof ShowHideElementsBlock) {
            this.#showHideElementsBlock.cleanUp();
        }
    }
}

