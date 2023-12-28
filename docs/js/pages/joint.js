import markdownParser from "../../js/markdown-parser.js";
import MainMenuBlock from "../blocks/main-menu.js";
import ShowHideElementsBlock from "../blocks/show-hide-elements.js";
import { capitalizeTitle, renderJointType, renderNotesTooltip } from "../utils.js";

export default class JointPage {
    #mainMenuBlock;
    #showHideElementsBlock;

    #renderMuscleFunction(objMuscles, muscleFunction) {
        const muscle = objMuscles[muscleFunction.muscleId];

        return `<tr><td>[Link type="Muscle" targetId="${muscle.id}" label="${muscle.label}"]${renderNotesTooltip(muscleFunction.notes)}</td></tr>`
    }

    #createJointFunctionsRows(joint, objMuscles, muscleFunctions) {
        let rows = [];

        for(const movement of joint.movements) {
            const primeMovers = muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover === true);
            const otherMuscles = muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover === false);
            let row = `
<tr>
    <td>${movement.label}${renderNotesTooltip(movement.labelNotes)}</td>
    <td>${movement.rom || ""}${renderNotesTooltip(movement.romNotes)}</td>
    <td>`;
            if(primeMovers.length) {
                row += `<table class="table table-striped | hideable">`;
                    for(const primeMover of primeMovers) {
                        row += this.#renderMuscleFunction(objMuscles, primeMover);
                    }
                row += `</table>`;
            }
            row += `
    </td>
    <td>`;
            if(otherMuscles.length) {
                row += `<table class="table table-striped | hideable">`;
                    for(const otherMuscle of otherMuscles) {
                        row += this.#renderMuscleFunction(objMuscles, otherMuscle);
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

    render({joint, jointTypes, objMuscles, muscleFunctions}) {
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
                <td>` + (joint.typeIds.length ? `<div class="hideable">${renderJointType(joint, jointTypes)}</div>` : "") + `</td>
            </tr>
            <tr>
                <th>Close-Packed Position (CPP)</th>
                <td>` + (joint.cpp ? `<div class="hideable">${joint.cpp}</div>` : "") + `</td>
            </tr>
            <tr>
                <th>Maximally Loose-Packed Position (MLPP)</th>
                <td>` + (joint.mlpp ? `<div class="hideable">${joint.mlpp}</div>` : "") + `</td>
            </tr>
        </table>
        <table class="table">
            <tr>
                <th>Beweging</th>
                <th>ROM</th>
                <th>Prime movers</th>
                <th>Overige spieren</th>
            </tr>
            ${this.#createJointFunctionsRows(joint, objMuscles, muscleFunctions).join("")}
        </table>
    </div>
</div>
        `.trim();

        this.#mainMenuBlock = new MainMenuBlock();
        this.#showHideElementsBlock = new ShowHideElementsBlock();

        return {
            header: [
                this.#mainMenuBlock.render("jointPage"),
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
