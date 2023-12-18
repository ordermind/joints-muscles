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
import quizzes from "./quiz/quizzes.js";
import QuizList from "./pages/quiz-list.js";
import QuizPage from "./pages/quiz.js";

const pages = {
    home: new HomePage(),
    jointsList: new JointsListPage(),
    jointPage: new JointPage(),
    jointTypePage: new JointTypePage(),
    musclePage: new MusclePage(),
    quizList: new QuizList(),
    quizPage: new QuizPage(),
}

export const routes = {
    // The home route has two paths to accommodate both local dev environment and Github Pages hosting.
    home: new Route(
        {
            paths: ["/", "/joints-muscles/"],
            responseHandler: () => {
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
                const content = pages.musclePage.render({muscle: muscles[data.id], joints});
                renderPage(content);
            },
            onLeaveHandler: (done) => {
                pages.musclePage.cleanUp();
                
                done();
            }
        }
    ),
    quizList: new Route(
        {
            paths: ["quiz"],
            responseHandler: () => {
                const content = pages.quizList.render();
                renderPage(content);
            },
            onLeaveHandler: (done) => {
                pages.quizList.cleanUp();

                done();
            }
        }
    ),
    quizPage: new Route(
        {
            paths: ["quiz/:id"],
            responseHandler: ({ data }) => {
                const content = pages.quizPage.render({quiz: quizzes[data.id]});
                renderPage(content);
            },
            onLeaveHandler: (done) => {
                pages.quizPage.cleanUp();

                done();
            }
        }
    )
}