import markdownParser from "../../js/markdown-parser.js";
import KnowledgeBankPrimaryLinksBlock from "../blocks/knowledge-bank-primary-links.js";
import MainMenuBlock from "../blocks/main-menu.js";
import ShowHideElementsBlock from "../blocks/show-hide-elements.js";
import { capitalizeTitle, renderJointType, renderList, renderNotesTooltip } from "../utils.js";

export default class JointPage {
    #mainMenuBlock;
    #primaryLinksBlock;
    #showHideElementsBlock;

    #renderMuscleFunction(objMuscles, muscleFunction) {
        const muscle = objMuscles[muscleFunction.muscleId];

        return `[Link type="Muscle" targetId="${muscle.id}" label="${muscle.label}"]${renderNotesTooltip(muscleFunction.notes)}`;
    }

    #createJointFunctionsRows(joint, objMuscles, muscleFunctions) {
        let rows = [];

        for(const movement of joint.movements) {
            const primeMovers = muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover === true);
            const otherMuscles = muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover === false);
            let row = `
<tr>
    <td>${movement.label}${renderNotesTooltip(movement.labelNotes)}</td>
    <td class="${movement.rom ? "hideable" : ""}">${movement.rom ?? ""}${renderNotesTooltip(movement.romNotes)}</td>
    <td class="${movement.endFeel ? "hideable" : ""}">${movement.endFeel ?? ""}</td>
    <td class="${primeMovers.length ? "hideable" : ""}">`;
            if(primeMovers.length) {
                row += renderList(primeMovers.map(primeMover => this.#renderMuscleFunction(objMuscles, primeMover)), {classes: ["clean", "spaced"]});
            }
            row += `
    </td>
    <td class="${otherMuscles.length ? "hideable" : ""}">`;
            if(otherMuscles.length) {
                row += renderList(otherMuscles.map(otherMuscle => this.#renderMuscleFunction(objMuscles, otherMuscle)), {classes: ["clean", "spaced"]});
            }
            row += `
    </td>
</tr>
            `.trim();
            rows.push(row);
        }

        return rows;
    }

    #getInfoTable(joint, jointTypes) {
        let content = "";

        content += `
            <table class="table table-borderless d-inline-block w-auto">
        `.trim();

        if(joint.typeIds.length) {
            content += `
                <tr>
                    <th>Gewrichtstype</th>
                    <td class="hideable">${renderJointType(joint, jointTypes)}</td>
                </tr>
            `.trim();
        }

        if(joint.cpp) {
            content += `
                <tr>
                    <th>Close-Packed Position (CPP)</th>
                    <td class="hideable">${joint.cpp}</td>
                </tr>
            `.trim();
        }

        if(joint.mlpp) {
            content += `
                <tr>
                    <th>Maximally Loose-Packed Position (MLPP)</th>
                    <td class="hideable">${joint.mlpp}</td>
                </tr>
            `.trim();
        }

        content += `
            </table>
        `.trim();

        return content;
    }

    render({joint, jointTypes, objMuscles, muscleFunctions}) {
        const title = capitalizeTitle(joint.label);

        let content = `
<div class="page page-joint">
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

        if(joint.firstDescription) {
            content += markdownParser.parse(joint.firstDescription.trim());
        }

        content += this.#getInfoTable(joint, jointTypes);

        if(joint.otherDescriptions.length) {
            content += markdownParser.parse(joint.otherDescriptions.join("\n\n").trim());
        }

        if(joint.movements.length) {
            content += `
            <table class="table d-inline-block">
                <tr>
                    <th>Beweging</th>
                    <th>ROM</th>
                    <th>Eindgevoel</th>
                    <th>Prime movers</th>
                    <th>Overige spieren</th>
                </tr>
            ${this.#createJointFunctionsRows(joint, objMuscles, muscleFunctions).join("")}
            </table>
            `.trim();
        }

        content += `
        </div>
    </div>
</div>
        `.trim();

        this.#mainMenuBlock = new MainMenuBlock();
        this.#primaryLinksBlock = new KnowledgeBankPrimaryLinksBlock();
        this.#showHideElementsBlock = new ShowHideElementsBlock();

        return {
            header: [
                this.#mainMenuBlock.render("jointPage"),
                this.#showHideElementsBlock.render(),
            ],
            main: [
                this.#primaryLinksBlock.render("jointPage"),
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
