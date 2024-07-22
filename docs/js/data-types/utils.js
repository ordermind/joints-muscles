import { renderNotesTooltip } from "../utils.js";
import AnatomicStructure from "./AnatomicStructure.js";

export default function renderAnatomicStructureOrString(anatomicStuctureOrString, {includeNotes = false, notesDirection = "n"} = {}) {
    if (typeof anatomicStuctureOrString === 'string' || anatomicStuctureOrString instanceof String) {
        return anatomicStuctureOrString;
    }

    if(anatomicStuctureOrString instanceof AnatomicStructure) {
        return anatomicStuctureOrString.label + (includeNotes ? renderNotesTooltip(anatomicStuctureOrString.notes, {direction: notesDirection}) : "");
    }

    throw new Error(`Error rendering anatomic structure or string: The variable ${JSON.stringify(anatomicStuctureOrString)} is neither a string nor an anatomic structure.`);
}