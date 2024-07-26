import Route from "./data-types/Route.js";
import HomePage from "./pages/home.js";
import JointsListPage from "./pages/joints-list.js";
import JointPage from "./pages/joint.js";
import JointTypePage from "./pages/joint-type.js";
import MusclePage from "./pages/muscle.js";
import { renderPage } from "./renderer.js";
import { objJoints, arrJoints } from "./data/joints.js";
import jointTypes from "./data/joint-types.js";
import { objMuscles, arrMuscles } from "./data/muscles.js";
import muscleFunctions from "./data/muscle-functions.js";
import QuizList from "./pages/quiz-list.js";
import QuizPage from "./pages/quiz.js";
import MuscleListPage from "./pages/muscle-list.js";
import QuizQuestionsFilter from "./pages/quiz-questions-filter.js";

const pages = {
    home: new HomePage(),
    jointsList: new JointsListPage(({
        arrJoints: arrJoints.filter(joint => !joint.hideInList),
        jointTypes
    })),
    jointPage: new JointPage(),
    jointTypePage: new JointTypePage(),
    musclesList: new MuscleListPage({arrMuscles, objJoints}),
    musclePage: new MusclePage(),
    quizList: new QuizList(),
    quizQuestionsFilter: new QuizQuestionsFilter(),
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
                const content = pages.jointsList.render();
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
                const content = pages.jointPage.render({joint: objJoints[data.id], jointTypes, objMuscles, muscleFunctions});
                renderPage(content);
                window.scrollTo(0, 0);
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
                window.scrollTo(0, 0);
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
                const content = pages.musclesList.render();
                renderPage(content);
            },
            onLeaveHandler: (done) => {
                pages.musclesList.cleanUp();

                done();
            }
        }
    ),
    musclePage: new Route(
        {
            paths: ["/muscles/:id"],
            responseHandler: ({ data }) => {
                const content = pages.musclePage.render({muscle: objMuscles[data.id], objJoints: objJoints});
                renderPage(content);
                window.scrollTo(0, 0);
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
    quizQuestionsFilter: new Route(
        {
            paths: ["quiz-questions-filter/:regionId"],
            responseHandler: ({ data }) => {
                const content = pages.quizQuestionsFilter.render({regionId: data.regionId});
                renderPage(content);
            },
            onLeaveHandler: (done) => {
                pages.quizQuestionsFilter.cleanUp();

                done();
            }
        }
    ),
    quizPage: new Route(
        {
            paths: ["quiz/:regionId"],
            responseHandler: ({ data, queryString }) => {
                const searchParams = new URLSearchParams(queryString);
                const content = pages.quizPage.render({regionId: data.regionId, questionsFilter: searchParams.get("questions")});
                renderPage(content);
            },
            onLeaveHandler: (done) => {
                pages.quizPage.cleanUp();

                done();
            }
        }
    ),
}