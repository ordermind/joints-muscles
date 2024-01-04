import Joint from "../../../data-types/Joint.js";
import Movement from "../../../data-types/Movement.js";

export default new Joint(
    {
        id: "",
        regionId: "",
        label: "",
        typeIds: [],
        cpp: "",
        mlpp: "",
        movements: [
            new Movement(
                {
                    id: "",
                    jointId: "",
                    label: "",
                    rom: "0°",
                    endFeel: "",
                }
            ),
        ],
        image: "",
        description: `

        `.trim(),
    }
);