import markdownParser from "../../js/markdown-parser.js";
import { capitalizeTitle } from "../utils.js";

export function renderJointType(joint, jointTypes, useShortLabel) {
    if(!joint.typeIds.length) {
        return "";
    }

    const hasMultipleJointTypes = joint.typeIds.length > 1;
    const jointTypeTag = hasMultipleJointTypes ? "ul" : "span";
    let jointTypeOutput = `<${jointTypeTag}>`;
    if(hasMultipleJointTypes) {
        for(const jointTypeId of joint.typeIds) {
            const jointLabel = useShortLabel ? jointTypes[jointTypeId].shortLabel : jointTypes[jointTypeId].label;

            jointTypeOutput += `<li>[Link type="JointType" targetId="${jointTypeId}" label="${jointLabel}"]</li>`;
        }
    } else {      
        const jointTypeId = joint.typeIds[0];
        const jointLabel = useShortLabel ? jointTypes[jointTypeId].shortLabel : jointTypes[jointTypeId].label;
        jointTypeOutput += `[Link type="JointType" targetId="${jointTypeId}" label="${jointLabel}"]`;
    }
    jointTypeOutput += `</${jointTypeTag}>`;

    return jointTypeOutput;
}

function renderNotesTooltip(notes) {
    if(!notes.length) {
        return "";
    }

    let notesTooltip = "";

    const hasMultipleNotes = notes.length > 1;
    const notesTag = hasMultipleNotes ? "ul" : "span";
    notesTooltip = `
<div class="tooltip-wrapper">
    <i class="tooltip-trigger">ⓘ</i>
    <div class="tooltip-content">
        <div class="tooltip-content-bg"></div>
        <${notesTag} class="tooltip-content-inner">
`;
    if(hasMultipleNotes) {
        for(const note of notes) {
            notesTooltip += `<li>${note}</li>`;
        }
    } else {
        notesTooltip += notes[0];
    }

    notesTooltip += `
        </${notesTag}>
    </div>
</div>
    `;

    return notesTooltip;
}

function renderMuscleFunction(muscles, muscleFunction) {
    const muscle = muscles[muscleFunction.muscleId];

    return `<tr><td>[Link type="Muscle" targetId="${muscle.id}" label="${muscle.label}"]${renderNotesTooltip(muscleFunction.notes)}</td></tr>`
}

function createJointFunctionsRows(joint, muscles, muscleFunctions) {
    let rows = [];

    for(const movement of joint.movements) {
        const primeMovers = muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover === true);
        const otherMuscles = muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover === false);
        let row = `
<tr>
    <td>${movement.label}${renderNotesTooltip(movement.labelNotes)}</td>
    <td>${movement.rom}${renderNotesTooltip(movement.romNotes)}</td>
    <td>`;
        if(primeMovers.length) {
            row += `<table class="table table-striped">`;
                for(const primeMover of primeMovers) {
                    row += renderMuscleFunction(muscles, primeMover);
                }
            row += `</table>`;
        }
        row += `
    </td>
    <td>`;
        if(otherMuscles.length) {
            row += `<table class="table table-striped">`;
                for(const otherMuscle of otherMuscles) {
                    row += renderMuscleFunction(muscles, otherMuscle);
                }
            row += `</table>`;
        }
        row += `
    </td>
</tr>
        `.trim();
        rows.push(row);
    }

    return rows;
}

export default function renderJointPage({jointId, joints, jointTypes, muscles, muscleFunctions}) {
    const joint = joints[jointId];

    const title = capitalizeTitle(joint.label);
    
    let content = `
<h1 class="display-1 fs-1">${title}</h1>
<div class="row">`;

    if(joint.image) {
        content += `
    <div class="col flex-grow-0 d-none d-lg-block">
        <img src="${joint.image}" class="page-image" />
    </div>
    `.trim();
    }

    content += `
    <div class="col">
    `.trim();

    if(joint.description) {
        content += markdownParser.parse(joint.description.trim());
    }

    content += `
        <table class="table table-borderless d-inline-block w-auto">
            <tr>
                <th>Gewrichtstype</th>
                <td>${renderJointType(joint, jointTypes)}</td>
            </tr>
            <tr>
                <th>Close-Packed Position (CPP)</th>
                <td>${joint.cpp}</td>
            </tr>
            <tr>
                <th>Maximally Loose-Packed Position (MLPP)</th>
                <td>${joint.mlpp}</td>
            </tr>
        </table>
        <table class="table">
            <tr>
                <th>Beweging</th>
                <th>ROM</th>
                <th>Prime movers</th>
                <th>Overige spieren</th>
            </tr>
            ${createJointFunctionsRows(joint, muscles, muscleFunctions).join("")}
        </table>
    </div>
</div>
    `.trim();

    return content;
}