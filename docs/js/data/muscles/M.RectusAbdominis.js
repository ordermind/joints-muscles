import Muscle from "../../data-types/Muscle.js";
import JointMuscleFunction from "../../data-types/JointMuscleFunction.js";
import SpecialMuscleFunction from "../../data-types/SpecialMuscleFunction.js";

export default new Muscle(
    {
        id: "m_rectus_abdominis",
        label: "m. rectus abdominis",
        origos: [
            "crista pubica",
            "symphysis pubica",
        ],
        insertions: [
            "cartilagines costales 5&nbsp;-&nbsp;7",
            "facies lateralis processus xiphoidei",
        ],
        functions: [
            new JointMuscleFunction(
                {
                    id: "m_rectus_abdominis__columna_vertebralis_thoracalis__flexion",
                    jointId: "columna_vertebralis_thoracalis",
                    muscleId: "m_rectus_abdominis",
                    movementId: "columna_vertebralis_thoracalis__flexion",
                    isPrimeMover: true,
                }
            ),
            new JointMuscleFunction(
                {
                    id: "m_rectus_abdominis__columna_vertebralis_lumbalis__flexion",
                    jointId: "columna_vertebralis_lumbalis",
                    muscleId: "m_rectus_abdominis",
                    movementId: "columna_vertebralis_lumbalis__flexion",
                    isPrimeMover: true,
                }
            ),
        ],
        specialFunctions: [
            new SpecialMuscleFunction(
                {
                    id: "m_rectus_abdominis__pelvis",
                    muscleId: "m_rectus_abdominis",
                    functionDescription: "achteroverkantelen bekken (met bijbehorend afvlakken van lendenlordose)",
                    notes: ["alleen bij gefixeerde thorax"],
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "m_rectus_abdominis__ribs",
                    muscleId: "m_rectus_abdominis",
                    functionDescription: "expiratie (door middel van detractie van de ribben)",
                }
            ),
            new SpecialMuscleFunction(
                {
                    id: "m_rectus_abdominis__pressure",
                    muscleId: "m_rectus_abdominis",
                    functionDescription: "<strong>(gering)</strong> verhoogt de intra-abdominale druk",
                    notes: ["bij gelijktijdige contractie met het diafragma"],
                }
            ),
        ],
        image: "./images/muscles/m_rectus_abdominis.jpeg",
        description: `
De spier is meerbuikig. De buiken zijn met elkaar verbonden door tussenpezen, de zogenaamde
<em>intersectiones tendineae</em>.

De spier loopt in de rectusschede (<em>vagina musculi recti abdominis</em>). In de mediaanlijn, tussen beide
mm. recti in, wordt de <em>linea alba</em> gevormd door de kruisende vezels van de beide rectusscheden.

De laterale begrenzing van de spier wordt de <em>linea semilunaris</em> genoemd.

N.B. Bij Nederlandse bronnen zijn de origo en insertie vaak tegenovergesteld dus houd daar maar rekening mee. Bij Engelstalige bronnen heb je vaker dit en ik vind het logischer omdat bij contractie vanuit de anatomische positie de insertie dan naar de origo toe beweegt i.p.v. andersom.
        `.trim(),
    }
);