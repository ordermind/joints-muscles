import InternalLink from "./data-types/InternalLink.js";
import jointTypes from "./data/joint-types.js";
import joints from "./data/joints.js";
import muscles from "./data/muscles.js";

function createPathFromInternalLink(link) {
    if(link.type === 'Muscle') {
        if(muscles.hasOwnProperty(link.targetId)) {
            return `/muscles/${link.targetId}`;
        }

        return null;
    }

    if(link.type === 'Joint') {
        if(joints.hasOwnProperty(link.targetId)) {
            return `/joints/${link.targetId}`;
        }

        return null;
    }

    if(link.type === 'JointType') {
        if(jointTypes.hasOwnProperty(link.targetId)) {
            return `/joint-types/${link.targetId}`;
        }

        return null;
    }

    throw new Error(`The link type "${link.type}" is not supported.`);
}

export function replaceLinks(html) {
    return html.replaceAll(/\[Link[\s]+(type|targetId|label)="([^"]+)"[\s]+(type|targetId|label)="([^"]+)"[\s]+(type|targetId|label)="([^"]+)"[^\]]*\]/g, (_, group1Attribute, group1Value, group2Attribute, group2Value, group3Attribute, group3Value) => {
        const internalLink = new InternalLink({
            [group1Attribute]: group1Value,
            [group2Attribute]: group2Value,
            [group3Attribute]: group3Value,
        });

        const path = createPathFromInternalLink(internalLink);

        if(path !== null) {
            return `<a href="${path}" data-navigo>${internalLink.label}</a>`;
        }

        return internalLink.label;
    });
}

export function renderPage(html) {
    document.getElementById("main").innerHTML = replaceLinks(html);
}

