import MenuItem from "../data-types/MenuItem.js";
import { routes } from "../routes.js";

export default class KnowledgeBankPrimaryLinksBlock {
    render(currentRouteName) {
        const menuItems = [
            new MenuItem({routeName: "jointsList", path: routes.jointsList.paths[0], label: "Gewrichten"}),
            new MenuItem({routeName: "musclesList", path: routes.musclesList.paths[0], label: "Spieren"}),
        ];

        let content = `
<ul class="nav nav-tabs mt-n3 mb-2">
        `.trim();

        content += menuItems.map(menuItem => {
            const activeClass = menuItem.routeName === currentRouteName ? "active" : "";

            return `<li class="nav-item"><a class="nav-link ${activeClass}" href="${menuItem.path}" data-navigo>${menuItem.label}</a></li>`;
        }).join("");

        content += `
</ul>
        `.trim();

        const wrapper = document.createElement("div");
        wrapper.innerHTML = content;

        return wrapper;
    }

    cleanUp() {}
}
