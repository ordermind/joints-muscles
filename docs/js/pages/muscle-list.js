import renderAnatomicStructureOrString from "../data-types/utils.js";
import { getMuscleJointFunctionsForRendering, renderList, renderNotesTooltip } from "../utils.js";
import ListPage from "./list-page.js";

export default class MuscleListPage extends ListPage {
    #objJoints;

    constructor({arrMuscles, objJoints}) {
        super(arrMuscles);

        this.#objJoints = objJoints;
    }

    getFilters() {
        return [
            {
                type: "textInput",
                name: "label",
                label: "Naam spier",
                event: "keyup",
                minCharacters: 3,
            }
        ];
    }

    createHeaderRow() {
        return `
<tr>
    <th>Naam spier</th>
    <th>Origo(s)</th>
    <th>Insertie(s)</th>
    <th>Prime mover</th>
    <th>Assisteert</th>
    <th>Speciale functies</th>
</tr>
        `.trim();
    }

    createDataRow(muscle) {
        return `
<tr>
    <td>[Link type="Muscle" targetId="${muscle.id}" label="${muscle.label}"]</td>
    <td class="${muscle.origos.length ? "hideable" : ""}">${renderList(muscle.origos.map(origo => renderAnatomicStructureOrString(origo, {includeNotes: true})), {fallbackToSingleString: true})}</td>
    <td class="${muscle.insertions.length ? "hideable" : ""}">${renderList(muscle.insertions.map(insertion => renderAnatomicStructureOrString(insertion, {includeNotes: true})), {fallbackToSingleString: true})}</td>
    <td class="${muscle.hasPrimeMoverJointFunctions() ? "hideable" : ""}">` + renderList(this.#getPrimeMoverColumn(muscle), {fallbackToSingleString: true}) + `</td>
    <td class="${muscle.hasAssistantJointFunctions() ? "hideable" : ""}">` + renderList(this.#getAssistantColumn(muscle), {fallbackToSingleString: true}) + `</td>
    <td class="${muscle.specialFunctions.length ? "hideable" : ""}">` + renderList(muscle.specialFunctions.map(specialFunction => specialFunction.functionDescription + renderNotesTooltip(specialFunction.notes)), {fallbackToSingleString: true}) + `</td>
</tr>
        `.trim();
    }

    getRouteName() {
        return "musclesList";
    }

    #getPrimeMoverColumn(muscle) {
        const allJointFunctions = getMuscleJointFunctionsForRendering(muscle, this.#objJoints);

        return Object.entries(allJointFunctions).map(([jointId, jointFunctions]) => {
            if(!Object.keys(jointFunctions.primeMovers).length) {
                return null;
            }

            return `[Link type="Joint" targetId="${jointId}" label="${this.#objJoints[jointId].shortLabel}"]: ${jointFunctions.primeMovers.join(", ")}`;
        })
        .filter(line => line !== null);
    }

    #getAssistantColumn(muscle) {
        const allJointFunctions = getMuscleJointFunctionsForRendering(muscle, this.#objJoints);

        return Object.entries(allJointFunctions).map(([jointId, jointFunctions]) => {
            if(!Object.keys(jointFunctions.otherMuscles).length) {
                return null;
            }

            return `[Link type="Joint" targetId="${jointId}" label="${this.#objJoints[jointId].shortLabel}"]: ${jointFunctions.otherMuscles.join(", ")}`;
        })
        .filter(line => line !== null);
    }
}
