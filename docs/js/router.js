import Navigo from "./navigo.min.js";

const router = new Navigo("/", { hash: true });

router.on("/", () => {
    console.log("render home page");
});

router.on("/joints", () => {
  console.log("render joints list page");
});

router.on("/joints/:id", ({ data }) => {
  console.log("render joint page", data);
});

router.on("/muscles", () => {
  console.log("render muscles list page");
});

router.on("/muscles/:id", ({ data }) => {
  console.log("render joint page", data);
});

export default router;