import Route from "./data-types/Route.js";
import renderJointsList from "./pages/joints-list.js";
import renderJointPage from "./pages/joint.js";
import renderJointTypePage from "./pages/joint-type.js";
import renderHomePage from "./pages/home.js";
import { renderPage } from "./renderer.js";
import joints from "./data/joints.js";
import jointTypes from "./data/joint-types.js";
import muscles from "./data/muscles.js";
import muscleFunctions from "./data/muscle-functions.js";
import renderMusclePage from "./pages/muscle.js";

export default {
    // The home route has two paths to accommodate both local dev environment and Github Pages hosting.
    home: new Route(
        {
            paths: ["/", "/joints-muscles/"],
            responseHandler: () => {
                console.log("render home page");
                const content = renderHomePage();
                renderPage(content);
            }
        }
    ),
    jointsList: new Route(
        {
            paths: ["/joints"],
            responseHandler: () => {
                console.log("render joints list page");
                const content = renderJointsList({joints, jointTypes});
                renderPage(content);
            }
        }
    ),
    jointPage: new Route(
        {
            paths: ["/joints/:id"],
            responseHandler: ({ data }) => {
                console.log("render joint page", data);
                const content = renderJointPage({joint: joints[data.id], jointTypes, muscles, muscleFunctions});
                renderPage(content);
            }
        }
    ),
    jointTypesList: new Route(
        {
            paths: ["/joint-types"],
            responseHandler: () => {
                console.log("TODO: render joint types list page");
            }
        }
    ),
    jointTypePage: new Route(
        {
            paths: ["/joint-types/:id"],
            responseHandler: ({ data }) => {
                console.log("render joint type page");
                const content = renderJointTypePage({jointType: jointTypes[data.id]});
                renderPage(content);
            }
        }
    ),
    musclesList: new Route(
        {
            paths: ["/muscles"],
            responseHandler: () => {
                console.log("TODO: render muscles list page");
            }
        }
    ),
    musclePage: new Route(
        {
            paths: ["/muscles/:id"],
            responseHandler: ({ data }) => {
                console.log("render muscle page", data);
                const content = renderMusclePage({muscle: muscles[data.id], joints});
                renderPage(content);
            }
        }
    )
}