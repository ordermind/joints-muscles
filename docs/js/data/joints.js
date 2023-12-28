/**
 * Unless specified, all ROM values and end-feel come from Schünke et al. (2016) Anatomische atlas - Algemene anatomie en bewegingsapparaat.
 */

export const arrJoints = await Promise.all(
    [
        "lower-extremity/Art.Coxae.js",
        "lower-extremity/Art.Genus.js",
        "lower-extremity/Art.Talocruralis.js",
        "lower-extremity/Art.Talotarsalis.js",
        "spine/Spine.js",
        "upper-extremity/Art.Humeri.js",
        "upper-extremity/Artt.Carpometacarpales.js",
        "upper-extremity/Artt.Intercarpales.js",
        "upper-extremity/Artt.Intermetacarpales.js",
        "upper-extremity/Artt.Interphalangeae.js",
        "upper-extremity/Artt.Metacarpophalangeae.js",
        "upper-extremity/ElbowJoint.js",
        "upper-extremity/ShoulderGirdle.js",
        "upper-extremity/WristJoint.js",
    ]
    .map(path => import("./joints/" + path).then(module => module.default))
)
.then(joints => joints.flat())
.then(joints => joints.sort((a, b) => a.shortLabel.localeCompare(b.shortLabel)));

export const objJoints = arrJoints.reduce((previousValue, currentValue) => ({ ...previousValue, [currentValue.id]: currentValue}), {});
