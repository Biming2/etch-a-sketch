const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');
const resetBtn = document.getElementById('reset');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}

function generateColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() *16 )];
    }

    return color;
}

makeGrid(16, 16);
//let color = generateColor();
const gridItems = document.getElementsByClassName('grid-item');
const gridItemsArray = Array.prototype.slice.call(gridItems);

gridItemsArray.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.style.backgroundColor = generateColor();
    });
});

clearBtn.addEventListener('click', function() {
    gridItemsArray.forEach(item => {
        item.style.backgroundColor = 'rgb(26, 29, 41)';
    });
});

resetBtn.addEventListener('click', function() {
    let gridChoice = 0;
    while(gridChoice <= 0 || gridChoice >= 100 || isNaN(gridChoice)) {
        gridChoice = prompt("Choose a number of squares per side for the new grid (1-64):");
    }
    makeGrid(gridChoice, gridChoice);
});