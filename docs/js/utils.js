export function capitalizeTitle(title) {
    const titleParts = title.split("(");

    const capitalizedTitle = titleParts[0]
        .split(" ")
        .map(word => word.length ? word[0].toUpperCase() + word.slice(1) : "")
        .join(" ")
        + (titleParts[1] ? "(" + titleParts[1] : "");

    return capitalizedTitle;
}

export function renderList(list, fallbackToSingleString) {
    if(!list.length) {
        return "";
    }

    const hasMultipleItems = list.length > 1;
    const useSingleString = fallbackToSingleString && !hasMultipleItems;
    const tag = useSingleString ? "span" : "ul";

    let output = `<${tag}>`;

    if(useSingleString) {
        output += list[0];
    } else {
        for(const item of list) {
            output += `<li>${item}</li>`;
        }
    }

    output += `</tag>`;

    return output;
}

export function renderNotesTooltip(notes) {
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

export function getMuscleJointFunctionsForRendering(muscle, objJoints) {
    const allJointFunctions = {};

    for(const muscleFunction of muscle.functions.filter(muscleFunction => muscleFunction.muscleId === muscle.id)) {
        if(!allJointFunctions.hasOwnProperty(muscleFunction.jointId)) {
            allJointFunctions[muscleFunction.jointId] = {
                primeMovers: [],
                otherMuscles: [],
            };
        }

        const functionLevel = muscleFunction.isPrimeMover ? allJointFunctions[muscleFunction.jointId].primeMovers : allJointFunctions[muscleFunction.jointId].otherMuscles;

        const notes = [...muscleFunction.notes];
        if(muscleFunction.movementLabelOverride) {
            const movementLabelIndex = notes.indexOf(muscleFunction.movementLabelOverride);
            if(movementLabelIndex > -1) {
                notes.splice(movementLabelIndex, 1);
            }
        }

        functionLevel.push((muscleFunction.movementLabelOverride ?? objJoints[muscleFunction.jointId].movements.find(movement => movement.id === muscleFunction.movementId).label) + renderNotesTooltip(notes));
    }

    return allJointFunctions;
}

export function removeChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}