import InternalLink from "./data-types/InternalLink.js";

function createPathFromInternalLink(link) {
  if(link.type === 'Muscle') {
      return `/muscles/${link.targetId}`;
  }

  if(link.type === 'Joint') {
      return `/joints/${link.targetId}`;
  }

  if(link.type === 'JointType') {
      return `/joint-types/${link.targetId}`;
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

        return `<a href="${createPathFromInternalLink(internalLink)}" data-navigo>${internalLink.label}</a>`;
    });
}

export function renderPage(html) {
    document.getElementById("main").innerHTML = replaceLinks(html);
}

