export default await Promise.all(
    [
        "M.Iliocostalis.js",
        "M.LevatorScapulae.js",
        "M.Longissimus.js",
        "M.LongusCapitis.js",
        "M.LongusColli.js",
        "M.ObliquusCapitisInferior.js",
        "M.ObliquusCapitisSuperior.js",
        "M.ObliquusExternusAbdominis.js",
        "M.ObliquusInternusAbdominis.js",
        "M.QuadratusLumborum.js",
        "MM.Interspinales.js",
        "MM.Intertransversarii.js",
        "MM.Multifidi.js",
    ]
    .map(filename => import("./muscles/" + filename).then(module => module.default))
);