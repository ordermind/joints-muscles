export default await Promise.all(
    [
        "M.Iliocostalis.js",
        "MM.Interspinales.js",
        "MM.Intertransversarii.js",
        "M.LevatorScapulae.js",
        "M.Longissimus.js",
    ]
    .map(filename => import("./muscles/" + filename).then(module => module.default))
);