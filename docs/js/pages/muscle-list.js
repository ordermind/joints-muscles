import KnowledgeBankPrimaryLinksBlock from "../blocks/knowledge-bank-primary-links.js";
import MainMenuBlock from "../blocks/main-menu.js";
import ShowHideElementsBlock from "../blocks/show-hide-elements.js";
import renderAnatomicStructureOrString from "../data-types/utils.js";
import { objJoints } from "../data/joints.js";
import { getMuscleJointFunctionsForRendering, renderList, renderNotesTooltip } from "../utils.js";

export default class MuscleListPage {
    #mainMenuBlock;
    #primaryLinksBlock;
    #showHideElementsBlock;

    #getPrimeMoverColumn(muscle) {
        const allJointFunctions = getMuscleJointFunctionsForRendering(muscle, objJoints);

        return Object.entries(allJointFunctions).map(([jointId, jointFunctions]) => {
            if(!Object.keys(jointFunctions.primeMovers).length) {
                return null;
            }

            return `[Link type="Joint" targetId="${jointId}" label="${objJoints[jointId].shortLabel}"]: ${jointFunctions.primeMovers.join(", ")}`;
        })
        .filter(line => line !== null);
    }

    #getAssistantColumn(muscle) {
        const allJointFunctions = getMuscleJointFunctionsForRendering(muscle, objJoints);

        return Object.entries(allJointFunctions).map(([jointId, jointFunctions]) => {
            if(!Object.keys(jointFunctions.otherMuscles).length) {
                return null;
            }

            return `[Link type="Joint" targetId="${jointId}" label="${objJoints[jointId].shortLabel}"]: ${jointFunctions.otherMuscles.join(", ")}`;
        })
        .filter(line => line !== null);
    }

    #createRows(arrMuscles) {
        let rows = [];

        for(const muscle of arrMuscles) {
            let row = `
<tr>
    <td>[Link type="Muscle" targetId="${muscle.id}" label="${muscle.label}"]</td>
    <td class="${muscle.origos.length ? "hideable" : ""}">${renderList(muscle.origos.map(origo => renderAnatomicStructureOrString(origo, true)), true)}</td>
    <td class="${muscle.insertions.length ? "hideable" : ""}">${renderList(muscle.insertions.map(insertion => renderAnatomicStructureOrString(insertion, true)), true)}</td>
    <td class="${muscle.hasPrimeMoverJointFunctions() ? "hideable" : ""}">` + renderList(this.#getPrimeMoverColumn(muscle), true) + `</td>
    <td class="${muscle.hasAssistantJointFunctions() ? "hideable" : ""}">` + renderList(this.#getAssistantColumn(muscle), true) + `</td>
    <td class="${muscle.specialFunctions.length ? "hideable" : ""}">` + renderList(muscle.specialFunctions.map(specialFunction => specialFunction.functionDescription + renderNotesTooltip(specialFunction.notes)), true) + `</td>
</tr>
            `.trim();

            rows.push(row);
        }

        return rows;
    }

    render({arrMuscles}) {
        const content = `
    <table class="table">
        <tr>
            <th>Naam spier</th>
            <th>Origo(s)</th>
            <th>Insertie(s)</th>
            <th>Prime mover</th>
            <th>Assisteert</th>
            <th>Speciale functies</th>
        </tr>
        ${this.#createRows(arrMuscles).join("")}
    </table>
        `.trim();

        this.#mainMenuBlock = new MainMenuBlock();
        this.#primaryLinksBlock = new KnowledgeBankPrimaryLinksBlock();
        this.#showHideElementsBlock = new ShowHideElementsBlock();

        return {
            header: [
                this.#mainMenuBlock.render("musclesList"),
                this.#showHideElementsBlock.render(),
            ],
            main: [
                this.#primaryLinksBlock.render("musclesList"),
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
