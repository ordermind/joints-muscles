import Navigo from "../vendor/navigo/js/navigo.min.js";
import ShowHideElementsBlock from "./blocks/show-hide-elements.js";
import { addNewTabClickEventListeners, removeNewTabClickEventListeners } from "./new-tab-click.js";
import { routes } from "./routes.js";

export const router = new Navigo("/", { hash: true });

router.hooks({
    after(match) {
        if(sessionStorage.getItem('hide-info')) {
            const showHideElementsBlock = new ShowHideElementsBlock();
            showHideElementsBlock.hideAll();
        }

        addNewTabClickEventListeners();
    },
    leave(done, match) {
        removeNewTabClickEventListeners();

        done();
    },
});

for(const [_, route] of Object.entries(routes)) {
    for(const path of route.paths) {
        router.on(path, route.responseHandler, {leave: route.onLeaveHandler});
    }
}

export function addLinkEventListeners() {
    router.updatePageLinks();
    addNewTabClickEventListeners();
}

export function cleanUpLinkEventListeners() {
    router.cleanUpEventListeners();
    removeNewTabClickEventListeners();
}