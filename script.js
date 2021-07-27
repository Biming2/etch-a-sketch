const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');
const resetBtn = document.getElementById('reset');

window.addEventListener("load", setDefaultGrid);
clearBtn.addEventListener('click', clearGrid);
resetBtn.addEventListener("click", resetGrid);

function setDefaultGrid() {
    makeGrid(16);
}

function makeGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for(let i = 0; i < (size * size); i++) {
        let cell = document.createElement('div');
        cell.classList = 'grid-item';
        cell.addEventListener('mouseover', generateColor);
        container.appendChild(cell);
    }
}

function generateColor(e) {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    e.target.style.backgroundColor = color;
}

function clearGrid() {
    let gridItems = document.getElementsByClassName('grid-item');
    let gridItemsArray = Array.prototype.slice.call(gridItems);

    gridItemsArray.forEach(item => {
        item.style.backgroundColor = 'rgb(26, 29, 41)';
    });
}

function resetGrid() {
    let gridArray = Array.from(container.childNodes);

    gridArray.forEach(item => {
        container.removeChild(item);
    });

    let gridChoice = 0;
    while(gridChoice <= 0 || gridChoice >= 65 || isNaN(gridChoice)) {
        gridChoice = prompt("Choose a number of squares per side for the new grid (1-64):");
    }

    clearGrid();
    makeGrid(gridChoice);
}