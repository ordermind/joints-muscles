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
                        const muscle = muscles.find(muscle => muscle.id === primeMover.muscleId)
                        row += `<li>[Link type="Muscle" targetId="${muscle.id}" label="${muscle.label}"]</li>`
                    }
                row += `</ul>`;
            }
            row += `
    </td>
    <td>`;
            if(otherMuscles.length) {
                row += `<ul>`;
                    for(const otherMuscle of otherMuscles) {
                        const muscle = muscles.find(muscle => muscle.id === otherMuscle.muscleId)
                        row += `<li>[Link type="Muscle" targetId="${muscle.id}" label="${muscle.label}"]</li>`
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