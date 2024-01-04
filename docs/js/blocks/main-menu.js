import MenuItem from "../data-types/MenuItem.js";
import { routes } from "../routes.js";

export default class MainMenuBlock {
    render(currentRouteName) {
        const menuItems = [
            new MenuItem({routeName: "home", path: routes.home.paths[0], label: "Start"}),
            new MenuItem({routeName: "jointsList", path: routes.jointsList.paths[0], label: "Kennisbank"}),
            new MenuItem({routeName: "quizList", path: routes.quizList.paths[0], label: "Quiz"}),
        ];

        let content = `
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        `.trim();

        content += menuItems.map(menuItem => {
            const activeClass = menuItem.routeName === currentRouteName ? "active" : "";

            return `<li class="nav-item"><a class="nav-link" href="${menuItem.path}" data-navigo>${menuItem.label}</a></li>`;
        }).join("");

        content += `
    </ul>
</div>
        `.trim();

        const wrapper = document.createElement("div");
        wrapper.innerHTML = content;

        return wrapper;
    }

    cleanUp() {}
}
