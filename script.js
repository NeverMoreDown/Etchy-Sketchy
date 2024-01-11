//create consts for grid
const grid = document.querySelector('#grid');

//create const for slider 

const slider = document.querySelector('.slider')

//create const for buttons 
const bw = document.querySelector("#bw");

const randomRGB = document.querySelector("#randomRGB");


//Set base button as bw 
bw.value = "click";

randomRGB.value = "unClick";


bw.addEventListener('click',function () {
    bw.value = "click";
    randomRGB.value = "unClick";
})

randomRGB.addEventListener('click',function () {
    randomRGB.value = "click";
    bw.value = "unClick";
})


//function to check which button is clicked 

//create function that onhover makes gridbox background color: black

function color (e) {
    if(bw.value === "click") {
        bwFunc(e);
    } else {
        randomRGBFunc(e);
    }
}


function bwFunc(e) {
    e.target.style.backgroundColor = "black";
}

function randomRGBFunc(e) {
    let RGBColor1 = Math.round(Math.random() * 255);
    let RGBColor2 = Math.round(Math.random() * 255);
    let RGBColor3 = Math.round(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${RGBColor1}, ${RGBColor2}, ${RGBColor3})`;
}



//create function that makes 16*16 grid items and appends children

function makeGrid (x,y) {


    for(i = 0; i < y-1; i++) {
        let gridY = document.createElement('div');
        gridY.style.flex = "auto";
        gridY.style.display = "flex";
        gridY.className = "gridY";
        gridY.id = `gridY${i}`;

        grid.appendChild(gridY);

        for(j = 0; j < x-1; j++) {
            let currentGridY = document.querySelector(`#gridY${i}`)
            let gridX = document.createElement('div');
            gridX.style.border = "1px solid black";
            gridX.style.flex = "auto";
            gridX.className = "gridY";
            gridX.id = `gridX${i} ${j}`;
            gridX.addEventListener("mouseover", color);

            currentGridY.appendChild(gridX);

            
        }
    }

}

//function to clear grid
// function to clear grid
function clearGrid() {
    while (grid.firstChild) {
        let currentGridY = grid.firstChild;
        while (currentGridY.firstChild) {
            currentGridY.firstChild.removeEventListener("mouseover", bw);
            currentGridY.removeChild(currentGridY.firstChild);
        }
        grid.removeChild(grid.firstChild);
    }
}


// function newGrid clears current grid and makes a new grid with the current slider value
function newGrid() {
    clearGrid();
    const val = slider.value;
    makeGrid(val, val);
}

// event listener for the slider
slider.addEventListener("input", newGrid);

newGrid();
