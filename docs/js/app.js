import Navigo from "../vendor/navigo/js/navigo.min.js";
import ShowHideElementsBlock from "./blocks/show-hide-elements.js";
import { routes } from "./routes.js";

const router = new Navigo("/", { hash: true });

router.hooks({
    after() {
        if(sessionStorage.getItem('hide-info')) {
            const showHideElementsBlock = new ShowHideElementsBlock();
            showHideElementsBlock.hideAll();
        }
    }
});

for(const [_, route] of Object.entries(routes)) {
    for(const path of route.paths) {
        router.on(path, route.responseHandler, {leave: route.onLeaveHandler});
    }
}

router.resolve();
