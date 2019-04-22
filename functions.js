// Generates the initial 16 x 16 grid.

(function init() {
  let i = 0;
  let gridSize = 16;

  do {
    let cell = document.createElement('div');
    let container = document.getElementById('grid-container');

    cell.setAttribute('class', 'grid-item');
    cell.setAttribute('id', i);

    cell.setAttribute('onmouseover', 'monochromeMode(id)');
    container.appendChild(cell);

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    i++;
  } while (i != gridSize * gridSize);

  //Adds event listeners

  let btnClearGrid = document.getElementById('clearGrid');

  btnClearGrid.addEventListener('click', event => {
    clearGrid();
  });

  let btnResizeGrid = document.getElementById('resizeGrid');
  btnResizeGrid.addEventListener('click', event => {
    resizeGrid();
  });

  let btnMonochromeMode = document.getElementById('monochromeMode');
  btnMonochromeMode.addEventListener('click', event => {
    changeMode(color = false);
    
  });

  let btnColorMode = document.getElementById('colorMode');
  btnColorMode.addEventListener('click', event => {
    changeMode(color = true);
    
  });

})();

function changeMode(color) {

  if (color == false) {

    allSquares = document.getElementById('grid-container').childNodes;

    for (let i = 0; i < allSquares.length; i++) {
      const element = allSquares[i];

      element.removeAttribute('onmousover','monochromeMode(id)');
      element.removeAttribute('onmousover','colorMode(id)');
      element.removeAttribute('style');

      element.setAttribute('onmouseover','monochromeMode(id)');
      
    }
    
  } else if (color == true) {
    allSquares = document.getElementById('grid-container').childNodes;

    for (let i = 0; i < allSquares.length; i++) {
      const element = allSquares[i];

      element.removeAttribute('onmousover','monochromeMode(id)');
      element.removeAttribute('style');

      element.setAttribute('onmouseover','colorMode(id)');
      
    }
    
  }
  
}

// Handles coloring each cell black when the mouse hovers over.

function monochromeMode(id) {
  let currentCell = document.getElementById(id.toString());
  currentCell.setAttribute('style', 'background-color: black;');
}

// Handles coloring each cell black when the mouse hovers over.

function colorMode(id) {
  let currentCell = document.getElementById(id.toString());

  let randomColor =
    '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

  currentCell.setAttribute('style', 'background-color: ' + randomColor + ';');
}

// Resizes the grid to user's choice.

function resizeGrid() {
  let grid = document.getElementById('grid-container');
  gridMultiplyer = parseInt(prompt('Please input a grid size e.g. 16 = 16x16'));

  let i = 0;

  let range = document.createRange();
  range.selectNodeContents(grid);
  range.deleteContents();

  do {
    let cell = document.createElement('div');
    let container = document.getElementById('grid-container');

    cell.setAttribute('class', 'grid-item');
    cell.setAttribute('id', i);

    cell.setAttribute('onmouseover', 'monochromeMode(id)');
    container.appendChild(cell);

    container.style.gridTemplateColumns = `repeat(${gridMultiplyer}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridMultiplyer}, 1fr)`;

    i++;
  } while (i != gridMultiplyer * gridMultiplyer);
}

// Redraws on-screen grid.

function clearGrid() {
  let grid = document.getElementById('grid-container');
  let gridMultiplyer = Math.sqrt(grid.childNodes.length);

  let i = 0;

  let range = document.createRange();
  range.selectNodeContents(grid);
  range.deleteContents();

  do {
    let cell = document.createElement('div');
    let container = document.getElementById('grid-container');

    cell.setAttribute('class', 'grid-item');
    cell.setAttribute('id', i);

    cell.setAttribute('onmouseover', 'monochromeMode(id)');
    container.appendChild(cell);

    container.style.gridTemplateColumns = `repeat(${gridMultiplyer}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridMultiplyer}, 1fr)`;

    i++;
  } while (i != gridMultiplyer * gridMultiplyer);
}
