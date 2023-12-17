import Route from "./data-types/Route.js";
import HomePage from "./pages/home.js";
import JointsListPage from "./pages/joints-list.js";
import JointPage from "./pages/joint.js";
import JointTypePage from "./pages/joint-type.js";
import MusclePage from "./pages/muscle.js";
import { renderPage } from "./renderer.js";
import joints from "./data/joints.js";
import jointTypes from "./data/joint-types.js";
import muscles from "./data/muscles.js";
import muscleFunctions from "./data/muscle-functions.js";
import renderMusclePage from "./pages/muscle.js";

const pages = {
    home: new HomePage(),
    jointsList: new JointsListPage(),
    jointPage: new JointPage(),
    jointTypePage: new JointTypePage(),
    musclePage: new MusclePage(),
}

export const routes = {
    // The home route has two paths to accommodate both local dev environment and Github Pages hosting.
    home: new Route(
        {
            paths: ["/", "/joints-muscles/"],
            responseHandler: () => {
                console.log("render home page");
                const content = pages.home.render();
                renderPage(content);
            },
            onLeaveHandler: (done) => {
                pages.home.cleanUp();

                done();
            }
        }
    ),
    jointsList: new Route(
        {
            paths: ["/joints"],
            responseHandler: () => {
                console.log("render joints list page");
                const content = pages.jointsList.render({joints, jointTypes});
                renderPage(content);
            },
            onLeaveHandler: (done) => {
                pages.jointsList.cleanUp();
                
                done();
            }
        }
    ),
    jointPage: new Route(
        {
            paths: ["/joints/:id"],
            responseHandler: ({ data }) => {
                console.log("render joint page", data);
                const content = pages.jointPage.render({joint: joints[data.id], jointTypes, muscles, muscleFunctions});
                renderPage(content);
            },
            onLeaveHandler: (done) => {
                pages.jointPage.cleanUp();
                
                done();
            }
        }
    ),
    jointTypesList: new Route(
        {
            paths: ["/joint-types"],
            responseHandler: () => {
                console.log("TODO: render joint types list page");
            },
        }
    ),
    jointTypePage: new Route(
        {
            paths: ["/joint-types/:id"],
            responseHandler: ({ data }) => {
                console.log("render joint type page");
                const content = pages.jointTypePage.render({jointType: jointTypes[data.id]});
                renderPage(content);
            },
            onLeaveHandler: (done) => {
                pages.jointTypePage.cleanUp();
                
                done();
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
                const content = pages.musclePage.render({muscle: muscles[data.id], joints});
                renderPage(content);
            },
            onLeaveHandler: (done) => {
                pages.musclePage.cleanUp();
                
                done();
            }
        }
    )
}