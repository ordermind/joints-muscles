import Muscle from "../../data-types/Muscle.js";
import MuscleFunction from "../../data-types/MuscleFunction.js";

export default new Muscle(
    {
        id: "m_iliocostalis",
        label: "m. iliocostalis",
        origos: [
            "os sacrum",
            "crista iliaca",
            "fascia thoracolumbalis",
            "costae 3-12"
        ],
        insertions: [
            "fascia thoracolumbalis (diep blad)",
            "costae 1-12",
            "processi transversi bij bovenste LWK",
            "processi transversi C4-C6",
        ],
        functions: [
            new MuscleFunction(
                {
                    id: "m_iliocostalis__columna_vertebralis_cervicalis__extension",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_iliocostalis",
                    movementId: "columna_vertebralis_cervicalis__extension",
                    isPrimeMover: true,
                }
            ),
            new MuscleFunction(
                {
                    id: "m_iliocostalis__columna_vertebralis_cervicalis__lateroflexion",
                    jointId: "columna_vertebralis_cervicalis",
                    muscleId: "m_iliocostalis",
                    movementId: "columna_vertebralis_cervicalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new MuscleFunction(
                {
                    id: "m_iliocostalis__columna_vertebralis_thoracalis__extension",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_iliocostalis",
                    movementId: "columna_vertebralis_thoracalis__extension",
                    isPrimeMover: true,
                }
            ),
            new MuscleFunction(
                {
                    id: "m_iliocostalis__columna_vertebralis_thoracalis__lateroflexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_iliocostalis",
                    movementId: "columna_vertebralis_thoracalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
            new MuscleFunction(
                {
                    id: "m_iliocostalis__columna_vertebralis_lumbalis__extension",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_iliocostalis",
                    movementId: "columna_vertebralis_lumbalis__extension",
                    isPrimeMover: true,
                }
            ),
            new MuscleFunction(
                {
                    id: "m_iliocostalis__columna_vertebralis_lumbalis__lateroflexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_iliocostalis",
                    movementId: "columna_vertebralis_lumbalis__lateroflexion",
                    isPrimeMover: true,
                }
            ),
        ],
        description: `
M. iliocostalis is onderdeel van de m. erector spinae.

De vezels lopen van het os sacrum en de fascia thoraco-lumbalis naar de onderste 6 ribben (m. iliocostalis lumborum), van de onderste 6 ribben naar de bovenste 6 ribben (m. iliocostalis thoracis) en van de bovenste 6 ribben naar de processus transversi van de cervicale wervels (m. iliocostalis cervicis).
        `,
    }
);