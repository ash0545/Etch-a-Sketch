/*
Initialize with a 16x16 grid of square divs
Prompt user for grid size if button pressed, then replace current 
grid with new one
Grid should be generated in the same total space alloted
Make the div appear as a grid instead of one on each line
Default color yellow, set to different by prompting user on
button press
When mouse passes over a div, change to the default/user specified
color
Set all divs to background color when clear button pressed
*/

let backgroundColor = 'slategray';
let color = 'yellow';
const colorChoices = ['red', 'green', 'blue', 'yellow'];
let customGridSize = 16; //default size of grid

const gridSize = document.querySelector('#gridSize');
const penColor = document.querySelector('#penColor');
const clear = document.querySelector('#clear');
const canvas = document.querySelector('.gridContainer');

//Get user input when buttons pressed

//Get user's desired size, delete current grid, create new grid
gridSize.addEventListener('click', () => {
    let x = parseInt(prompt('Enter grid size (<100)', '16'));
    if (Number.isNaN(x)) {
        alert('Size cannot be a non-integer value');
    } else if (x >= 100) {
        alert('Grid size cannot be more than 100');
    } else if (0 < x < 100) {
        customGridSize = x;
    } else {
        alert('Invalid size');
    }
    deleteGrid();
    createGrid(customGridSize);
})

//Get user's desired color choice
penColor.addEventListener('click', () => {
    let x = parseInt(prompt('Choose desired color (0 - 3):\n 0:Red, 1:Green, 2:Blue, 3:Yellow'));
    if (Number.isNaN(x)) {
        alert('Not valid, enter integer from 0 - 3');
    } else if (x === 0 || x === 1 || x === 2 || x === 3) {
        color = colorChoices[x];
    } else {
        alert('Not valid, enter integer from 0 - 3');
    }
})

//Clear grid when pressed
clear.addEventListener('click', () => {
    let x = document.querySelectorAll('.gridElement');
    clearGrid(x);
})

//--------------------------------------------------------------------------------

//Required functions

//Create grid of (size x size) divs
function createGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement('div');
        div.classList.add('gridElement');
        div.style.backgroundColor = backgroundColor;
        //temp
        div.style.height = '10px';
        div.style.width = '10px';
        canvas.appendChild(div);
    }
}

//Delete grid
function deleteGrid(nodeList) {
    nodeList.forEach(element => {
        canvas.removeChild(element);
    })
}

//Set all elements of grid's nodelist to background color
function clearGrid(nodeList) {
    nodeList.forEach(element => {
        element.style.backgroundColor = backgroundColor;
    });
}

//--------------------------------------------------------------------------------
createGrid(16); //initalize grid

//Select all "pixels" in canvas and color when mouse enters
gridElement = document.querySelectorAll('.gridElement');

gridElement.forEach(element => element.addEventListener('mouseenter', () => {
    element.style.backgroundColor = color;
}))