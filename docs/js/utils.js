export function capitalizeTitle(title) {
    const titleParts = title.split("(");

    const capitalizedTitle = titleParts[0]
        .split(" ")
        .map(word => word.length ? word[0].toUpperCase() + word.substr(1) : "")
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