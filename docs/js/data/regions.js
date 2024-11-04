import Region from "../data-types/Region.js";

export const arrRegions = [
    new Region({ id: "torso", label: "romp" }),
    new Region({ id: "upper_extremity", label: "bovenste extremiteit", childrenIds: ["hand"] }),
    new Region({ id: "hand", label: "alleen de hand", parentId: "upper_extremity" }),
    new Region({ id: "lower_extremity", label: "onderste extremiteit", childrenIds: ["foot"] }),
    new Region({ id: "foot", label: "alleen de voet", parentId: "lower_extremity" }),
];

export const objRegions = arrRegions.reduce((previousValue, currentValue) => ({ ...previousValue, [currentValue.id]: currentValue }), {});
