import Navigo from "../vendor/navigo/js/navigo.min.js";
import routes from "./routes.js";

const router = new Navigo("/", { hash: true });
for(const [_, route] of Object.entries(routes)) {
    for(const path of route.paths) {
        router.on(path, route.responseHandler);
    }
}
router.resolve();
