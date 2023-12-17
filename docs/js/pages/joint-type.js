import markdownParser from "../../js/markdown-parser.js";
import MainMenuBlock from "../blocks/main-menu.js";
import getMainMenuBlock from "../blocks/main-menu.js";
import { capitalizeTitle } from "../utils.js";

export default class JointTypePage {
    #mainMenuBlock;

    render({ jointType }) {
        const title = capitalizeTitle(jointType.label);
        
        let content = `
<h1 class="display-1 fs-1">${title}</h1>
<div class="row">`;

        if(jointType.image) {
            content += `
    <div class="col flex-grow-0 d-none d-lg-block">
        <img src="${jointType.image}" class="page-image" />
    </div>
        `.trim();
        }

        content += `
    <div class="col-lg-4">
        `.trim();

        if(jointType.description) {
            content += markdownParser.parse(jointType.description.trim());
        }

        content += `
    </div>
</div>
        `.trim();

        this.#mainMenuBlock = new MainMenuBlock();

        return {
            header: this.#mainMenuBlock.render("jointTypePage"),
            main: content,
        };
    }

    cleanUp() {
        if(this.#mainMenuBlock instanceof MainMenuBlock) {
            this.#mainMenuBlock.cleanUp();
        }
    }
}