// Generates the initial 16 x 16 grid.

function init(grid) {

    

    let i = 0;
    let cell = "";
    let container = "";
 
    do {
      let cell = document.createElement('div');
      let container = document.getElementById('grid-container');

      cell.setAttribute('class', 'grid-item');
      cell.setAttribute('id', i);

      cell.setAttribute('onmouseover', 'colorCell(id)');
      container.appendChild(cell);

      container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;

      i++;
    } while (i != grid * grid);

    i = 0;
}

function generateGrid(resize) {

    clearGrid();
    
    let i = 0;
    let cell = "";
    let container = "";

    if (resize == true) {
        grid = parseInt(prompt("Please enter a grid size."));
    }
 
    do {
      let cell = document.createElement('div');
      let container = document.getElementById('grid-container');

      cell.setAttribute('class', 'grid-item');
      cell.setAttribute('id', i);

      cell.setAttribute('onmouseover', 'colorCell(id)');
      container.appendChild(cell);

      container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;

      i++;
    } while (i != grid * grid);

    resize = false;
  
    
}

function colorCell(id) {
  let currentCell = document.getElementById(id.toString());
  currentCell.setAttribute('style', 'background-color: black;');
}

function clearGrid() {
  let grid = document.getElementById('grid-container');
  var range = document.createRange();
  range.selectNodeContents(grid);
  range.deleteContents();
}
