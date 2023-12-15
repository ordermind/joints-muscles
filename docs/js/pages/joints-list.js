import { renderJointType } from "./joint.js";

function renderMovements(joint) {
    let output = `<ul>`;

    for(const movement of joint.movements) {
        output += `<li>${movement.label}</li>`;
    }

    output += `</ul>`;

    return output;
}

export default function renderJointsList({joints, jointTypes}) {

    function createRows() {
        let rows = [];

        for(const [_, joint] of Object.entries(joints)) {
            let row = `
<tr>
    <td>[Link type="Joint" targetId="${joint.id}" label="${joint.label}"]</td>
    <td>${renderJointType(joint, jointTypes)}</td>
    <td>${joint.cpp}</td>
    <td>${joint.mlpp}</td>
    <td>${renderMovements(joint)}</td>
</tr>
            `.trim();

            rows.push(row);
        }

        return rows;
    }

    return `
<h1 class="display-1 fs-1">Gewrichten</h1>
<table class="table">
    <tr>
        <th>Naam gewricht</th>
        <th>Type gewricht</th>
        <th>CPP</th>
        <th>MLPP</th>
        <th>Bewegingen</th>
    </tr>
    ${createRows().join("")}
</table>
    `.trim();
}