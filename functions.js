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

function colorCell(id) {

    let currentCell = document.getElementById(id.toString());
    currentCell.setAttribute('style', 'background-color: black;');
}

function clearGrid() {
    let grid = document.getElementsByClassName('grid-item');
    for(var i = 0; i < grid.length; i++){
        grid[i].setAttribute('style', 'background-color: white;');    }
    
}