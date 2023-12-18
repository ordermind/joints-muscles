import markdownParser from "../../js/markdown-parser.js";
import MainMenuBlock from "../blocks/main-menu.js";
import ShowHideElementsBlock from "../blocks/show-hide-elements.js";
import { capitalizeTitle, renderList, renderNotesTooltip } from "../utils.js";

export default class MusclePage {
    #mainMenuBlock;
    #showHideElementsBlock;

    #createJointFunctionsRows(muscle, joints) {
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

            functionLevel.push((muscleFunction.movementLabelOverride ?? joints[muscleFunction.jointId].movements.find(movement => movement.id === muscleFunction.movementId).label) + renderNotesTooltip(notes));
        }
        
        let rows = [];

        for (const [jointId, jointFunctions] of Object.entries(allJointFunctions)) {
            let row = `
<tr class="hideable">
    <td>[Link type="Joint" targetId="${jointId}" label="${joints[jointId].shortLabel}"]</td>
    <td>${renderList(jointFunctions.primeMovers, true)}</td>
    <td>${renderList(jointFunctions.otherMuscles, true)}</td>
</tr>
            `.trim();

            rows.push(row);
        }

        return rows;
    }

    render({ muscle, joints }) {
        const title = capitalizeTitle(muscle.label);

    let content = `
<h1 class="display-1 fs-1">${title}</h1>
<div class="row">`;

        if(muscle.image) {
            content += `
    <div class="col flex-grow-0 d-none d-lg-block">
        <img src="${muscle.image}" class="page-image" />
    </div>
        `.trim();
        }

        content += `
    <div class="col">
        `.trim();

        if(muscle.description) {
            content += markdownParser.parse(muscle.description.trim());
        }

        content += `
        <table class="table table-borderless d-inline-block w-auto">
            <tr>
                <th>Origo</th>
                <td><div class="hideable">${renderList(muscle.origos, true)}</div></td>
            </tr>
            <tr>
                <th>Insertie</th>
                <td><div class="hideable">${renderList(muscle.insertions, true)}</div></td>
            </tr>
        </table>

        <h2 class="display-2 fs-2">Gewrichtsfuncties</h2>
        <table class="table d-inline-block w-auto">
            <tr>
                <th>Gewricht</th>
                <th>Prime mover</th>
                <th>Helpt mee</th>
            </tr>
            ${this.#createJointFunctionsRows(muscle, joints).join("")}
        </table>
        `.trim();

        if(muscle.specialFunctions.length) {
            content += `
        <h2 class="display-2 fs-2">Overige functies</h2>
        <div class="hideable">${renderList(muscle.specialFunctions.map(specialFunction => specialFunction.functionDescription))}</div>
            `.trim();
        }

        content += `
    </div>
</div>
        `.trim();

        this.#mainMenuBlock = new MainMenuBlock();
        this.#showHideElementsBlock = new ShowHideElementsBlock();

        return {
            header: [
                this.#mainMenuBlock.render("musclePage"),
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