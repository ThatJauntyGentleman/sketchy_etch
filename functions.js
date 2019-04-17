// Generates the initial 16 x 16 grid.
function generateGrid() {

    let grid = 16*16;

    let i = 0;

    do {

        let cell = document.createElement('div');
        let container = document.getElementById('grid-container');

        cell.setAttribute('class', 'grid-item');
        cell.setAttribute('id',i);

        cell.setAttribute('onmouseover','colorCell(id)');
        container.appendChild(cell)

        i++;

    } while (i != grid);


}

