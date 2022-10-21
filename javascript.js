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

let backgroundColor;
let color;
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

//Create grid of (size x size) divs
function createGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement('div');
        div.classList.add('gridElement');
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
