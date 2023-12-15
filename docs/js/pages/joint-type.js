import markdownParser from "../../js/markdown-parser.js";
import { capitalizeTitle } from "../utils.js";

export default function renderJointTypePage({ jointTypeId, jointTypes }) {
    const jointType = jointTypes[jointTypeId];
    const title = capitalizeTitle(jointType.label);
    
    let content = `
<h1 class="display-1 fs-1">${title}</h1>
<div class="row">`;

    if(jointType.image) {
        content += `<img src="${jointType.image}" class="col flex-grow-0 h-100 d-none d-lg-block | page-image" />`;
    }

    content += `<div class="col-6">`;

    if(jointType.description) {
        content += markdownParser.parse(jointType.description.trim());
    }

    content += `
    </div>
</div>
    `.trim();

    return content;
}