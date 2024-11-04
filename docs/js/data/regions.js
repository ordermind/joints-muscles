import Region from "../data-types/Region.js";

export default [
    new Region({ id: "torso", label: "romp" }),
    new Region({ id: "upper_extremity", label: "bovenste extremiteit", childrenIds: ["hand"] }),
    new Region({ id: "hand", label: "alleen de hand" }),
    new Region({ id: "lower_extremity", label: "onderste extremiteit", childrenIds: ["foot"] }),
    new Region({ id: "foot", label: "alleen de voet" }),
];