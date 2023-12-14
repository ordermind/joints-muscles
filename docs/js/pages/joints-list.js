function renderMuscleFunction(muscles, muscleFunction) {
    const muscle = muscles.find(muscle => muscle.id === muscleFunction.muscleId);

    let notesTooltip = "";

    if(muscleFunction.notes.length) {
        const hasMultipleNotes = muscleFunction.notes.length > 1;
        const notesTag = hasMultipleNotes ? "ul" : "span";
        notesTooltip = `
<div class="tooltip-wrapper">
    <i class="tooltip-trigger star"></i>
    <div class="tooltip-content">
        <div class="tooltip-content-bg"></div>
        <${notesTag} class="tooltip-content-inner">
    `;
        if(hasMultipleNotes) {
            for(const note of muscleFunction.notes) {
                notesTooltip += `<li>${note}</li>`;
            }
        } else {
            notesTooltip += muscleFunction.notes[0];
        }

        notesTooltip += `
        </${notesTag}>
    </div>
</div>
        `;
    }

    return `<li>[Link type="Muscle" targetId="${muscle.id}" label="${muscle.label}"]${notesTooltip}</li>`
}

export default function renderJointsList({joints, muscles, muscleFunctions}) {

    function createRows() {
        let rows = [];

        for(const [key, joint] of Object.entries(joints)) {
            for(const movement of joint.movements) {
                const primeMovers = muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover === true);
                const otherMuscles = muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover === false);
                let row = `
<tr>
    <td>[Link type="Joint" targetId="${joint.id}" label="${joint.label}"]</td>
    <td>${movement.label}</td>
    <td>${movement.rom}</td>
    <td>`;
            if(primeMovers.length) {
                row += `<ul>`;
                    for(const primeMover of primeMovers) {
                        const muscle = muscles.find(muscle => muscle.id === primeMover.muscleId);
                        row += renderMuscleFunction(muscles, primeMover);
                    }
                row += `</ul>`;
            }
            row += `
    </td>
    <td>`;
            if(otherMuscles.length) {
                row += `<ul>`;
                    for(const otherMuscle of otherMuscles) {
                        row += renderMuscleFunction(muscles, otherMuscle);
                    }
                row += `</ul>`;
            }
            row += `
    </td>
</tr>
                `.trim();
                rows.push(row);
            }
        }

        return rows;
    }


    return `
<table class="table">
    <tr>
        <th>Naam gewricht</th>
        <th>Beweging</th>
        <th>ROM</th>
        <th>Prime movers</th>
        <th>Overige spieren</th>
    </tr>
    ${createRows().join("")}
</table>
    `.trim();
}