import renderJointsList from "./pages/joints-list.js";
import renderJointPage from "./pages/joint.js";
import renderHomePage from "./pages/home.js";
import Navigo from "../vendor/navigo/js/navigo.min.js";
import { renderPage } from "./renderer.js";
import joints from "./data/joints.js";
import muscles from "./data/muscles.js";
import muscleFunctions from "./data/muscle-functions.js";

const router = new Navigo("/", { hash: true });

router.on("/", () => {
    console.log("render home page");
    const html = renderHomePage();
    renderPage(html);
});

router.on("/joints-muscles/", () => {
    console.log("render home page on Github");
});

router.on("/joints", () => {
    console.log("render joints list page");
    const html = renderJointsList({joints, muscles, muscleFunctions});
    renderPage(html);
});

router.on("/joints/:id", ({ data }) => {
  console.log("render joint page", data);
  const html = renderJointPage({jointId: data.id, joints, muscles, muscleFunctions});
  renderPage(html);
});

router.on("/muscles", () => {
  console.log("render muscles list page");
});

router.on("/muscles/:id", ({ data }) => {
  console.log("render muscle page", data);
});

export default router;
