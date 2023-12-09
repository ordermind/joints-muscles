export default function renderJointsList({joints, muscles, muscleFunctions}) {
    let rows = [];

    for(const [key, joint] of Object.entries(joints)) {
        for(const movement of joint.movements) {
            const primeMovers = muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover === true);
            const otherMuscles = muscleFunctions.filter(muscleFunction => muscleFunction.movementId === movement.id && muscleFunction.isPrimeMover === false);
            let row = `
<tr>
    <td>${joint.label}</td>
    <td>${movement.label}</td>
    <td>${movement.rom}</td>
    <td>`;
        if(primeMovers.length) {
            row += `<ul>`;
                for(const primeMover of primeMovers) {
                    row += `<li>${muscles.find(muscle => muscle.id === primeMover.muscleId).label}</li>`
                }
            row += `</ul>`;
        }
        row += `
    </td>
    <td>`;
        if(otherMuscles.length) {
            row += `<ul>`;
                for(const otherMuscle of otherMuscles) {
                    row += `<li>${muscles.find(muscle => muscle.id === otherMuscle.muscleId).label}</li>`
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

    return `
<table class="table">
    <tr>
        <th>Naam gewricht</th>
        <th>Beweging</th>
        <th>ROM</th>
        <th>Prime movers</th>
        <th>Overige spieren</th>
    </tr>
    ${rows.join("")}
</table>
    `.trim();
}