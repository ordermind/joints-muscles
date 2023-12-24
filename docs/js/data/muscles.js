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
        "M.Pyramidalis.js",
        "M.QuadratusLumborum.js",
        "M.RectusAbdominis.js",
        "M.RectusCapitisAnterior.js",
        "M.RectusCapitisLateralis.js",
        "M.RectusCapitisPosteriorMajor.js",
        "M.RectusCapitisPosteriorMinor.js",
        "M.ScalenusAnterior.js",
        "M.ScalenusMedius.js",
        "M.ScalenusPosterior.js",
        "M.SemispinalisCapitis.js",
        "M.SemispinalisCervicis.js",
        "M.SemispinalisThoracis.js",
        "M.SerratusPosteriorInferior.js",
        "M.SerratusPosteriorSuperior.js",
        "M.SpinalisCapitis.js",
        "M.SpinalisCervicis.js",
        "M.SpinalisThoracis.js",
        "M.SpleniusCapitis.js",
        "M.SpleniusCervicis.js",
        "M.Sternocleidomastoideus.js",
        "M.TransversusAbdominis.js",
        "M.TrapeziusDescendens.js",
        "MM.InterspinalesCervicis.js",
        "MM.InterspinalesLumborum.js",
        "MM.IntertransversariiAnterioresCervicis.js",
        "MM.IntertransversariiPosterioresCervicis.js",
        "MM.IntertransversariiLumborum.js",
        "MM.Multifidi.js",
        "MM.RotatoresBreves.js",
        "MM.RotatoresLongi.js",
    ]
    .map(filename => import("./muscles/" + filename).then(module => module.default))
).then(muscles => muscles.reduce((previousValue, currentValue) => ({ ...previousValue, [currentValue.id]: currentValue}), {}));