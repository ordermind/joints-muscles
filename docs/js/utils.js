export function capitalizeTitle(title) {
    const titleParts = title.split("(");

    const capitalizedTitle = titleParts[0]
        .split(" ")
        .map(word => word.length ? word[0].toUpperCase() + word.slice(1) : "")
        .join(" ")
        + (titleParts[1] ? "(" + titleParts[1] : "");

    return capitalizedTitle;
}

export function renderList(list, { fallbackToSingleString = false, classes = [] }) {
    if (!list.length) {
        return "";
    }

    const hasMultipleItems = list.length > 1;
    const useSingleString = fallbackToSingleString && !hasMultipleItems;
    const tag = useSingleString ? "span" : "ul";

    let output = `<${tag}${classes.length ? ' class="' + classes.join(" ") + '"' : ""}>`;

    if (useSingleString) {
        output += list[0];
    } else {
        for (const item of list) {
            output += `<li>${item}</li>`;
        }
    }

    output += `</tag>`;

    return output;
}

export function renderNotesTooltip(notes, options = { direction: "n" }) {
    if (!notes.length) {
        return "";
    }

    let notesTooltip = "";

    const hasMultipleNotes = notes.length > 1;
    const notesTag = hasMultipleNotes ? "ul" : "span";
    notesTooltip = `
<div class="tooltip-wrapper" data-direction="${options.direction}">
    <i class="tooltip-trigger">ⓘ</i>
    <div class="tooltip-content">
        <div class="tooltip-content-bg"></div>
        <${notesTag} class="tooltip-content-inner">
`.trim();
    if (hasMultipleNotes) {
        for (const note of notes) {
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

    return " " + notesTooltip;
}

export function renderJointType(joint, jointTypes, useShortLabel) {
    if (!joint.typeIds.length) {
        return "";
    }

    const hasMultipleJointTypes = joint.typeIds.length > 1;
    const jointTypeTag = hasMultipleJointTypes ? "ul" : "span";
    let jointTypeOutput = `<${jointTypeTag}>`;
    if (hasMultipleJointTypes) {
        for (const jointTypeId of joint.typeIds) {
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

    for (const muscleFunction of muscle.functions.filter(muscleFunction => muscleFunction.muscleId === muscle.id)) {
        if (!allJointFunctions.hasOwnProperty(muscleFunction.jointId)) {
            allJointFunctions[muscleFunction.jointId] = {
                primeMovers: [],
                otherMuscles: [],
            };
        }

        const functionLevel = muscleFunction.isPrimeMover ? allJointFunctions[muscleFunction.jointId].primeMovers : allJointFunctions[muscleFunction.jointId].otherMuscles;

        const notes = [...muscleFunction.notes];
        if (muscleFunction.movementLabelOverride) {
            const movementLabelIndex = notes.indexOf(muscleFunction.movementLabelOverride);
            if (movementLabelIndex > -1) {
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

export function debounce(func, timeout = 250) {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

/**
 * Shuffles an array.
 *
 * @param {array} array
 *
 * @returns a new, shuffled array (shallow copy).
 */
export function shuffle(array) {
    const arrayCopy = [...array];

    // Loop through array starting at the last index
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indexes i and j
        const temp = arrayCopy[i];
        arrayCopy[i] = arrayCopy[j];
        arrayCopy[j] = temp;
    }
    return arrayCopy;
}

/**
 * Checks if there is an intersection between two arrays, i.e. they both contain the same value.
 *
 * @param {array} array1
 * @param {array} array2
 *
 * @returns boolean
 */
export function intersects(array1, array2) {
    const set = new Set(array2);
    return [...new Set(array1)].some(value => set.has(value));
}

/**
 * Checks if two objects are equal (same keys and values, disregarding key order).
 *
 * @param {object} obj1
 * @param {object} obj2
 *
 * @returns boolean
 */
export function deepEqual(obj1, obj2) {
    // Base case: If both objects are identical, return true.
    if (obj1 === obj2) {
        return true;
    }
    // Check if both objects are objects and not null.
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }
    // Get the keys of both objects.
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    // Check if the number of keys is the same.
    if (keys1.length !== keys2.length) {
        return false;
    }
    // Iterate through the keys and compare their values recursively.
    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    // If all checks pass, the objects are deep equal.
    return true;
}

export function massageStringForFlexibleComparison(string) {
    return string
        .toLowerCase()
        .replaceAll(/(^(m(\.|_)|mm(\.|_)|art(\.|_)|artt(\.|_)))|\s|&nbsp;|\.|,|_+/g, "");
}

export function uniqueArray(array) {
    return Array.from(new Set(array));
}