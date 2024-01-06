import { renderJointType } from "../utils.js";
import ListPage from "./list-page.js";

export default class JointsListPage extends ListPage{
    #jointTypes;

    constructor({arrJoints, jointTypes}) {
        super(arrJoints);

        this.#jointTypes = jointTypes;
    }

    getFilters() {
        return [
            {
                type: "textInput",
                name: "label",
                label: "Naam gewricht",
                event: "keyup",
                minCharacters: 3,
            }
        ];
    }

    createHeaderRow() {
        return `
<tr>
    <th>Naam gewricht</th>
    <th>Type gewricht</th>
    <th>CPP</th>
    <th>MLPP</th>
    <th>Bewegingen</th>
</tr>
        `.trim();
    }

    createDataRow(joint) {
        return `
<tr>
    <td>[Link type="Joint" targetId="${joint.id}" label="${joint.shortLabel}"]</td>
    <td class="${joint.typeIds.length ? "hideable" : ""}">`+ (joint.typeIds.length ? renderJointType(joint, this.#jointTypes, true) : "") + `</td>
    <td class="${joint.cpp ? "hideable" : ""}">` + (joint.cpp ?? "") + `</td>
    <td class="${joint.mlpp ? "hideable" : ""}">` + (joint.mlpp ?? "") + `</td>
    <td class="${joint.movements.length ? "hideable" : ""}">` + (joint.movements.length ? this.#renderMovements(joint) : "") + `</td>
</tr>
        `.trim();
    }

    getRouteName() {
        return "jointsList";
    }

    #renderMovements(joint) {
        let output = `<ul>`;

        for(const movement of joint.movements) {
            output += `<li>${movement.label}</li>`;
        }

        output += `</ul>`;

        return output;
    }
}
