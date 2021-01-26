const container = document.querySelector('#container');
const squaresInput = document.querySelector('#squaresInput');
const changeGridBtn = document.querySelector('#changeGridBtn');
const blackBtn = document.querySelector('#blackBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const eraseBtn = document.querySelector('#eraseBtn');
const clearBtn = document.querySelector('#clearBtn');

let currentInputValue = 16;

//Function to program the color of the shaded squares to black
function shadeBlack () {
  container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });
}

function shadeRainbow() {
  container.addEventListener("mouseover", (e) => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = randomColor;
  })
}

function eraseColor() {
  container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "white";
  });
}

//Function to program the initial creation of the grid
function makeGrid(rows, cols, colorFunct) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    colorFunct;
  }
}
//Inital function call to set up grid
makeGrid(16, 16, shadeBlack());

//Event listener to change the layout of the grid
changeGridBtn.addEventListener('click', () => {
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  if (`${squaresInput.value}` <= 100 && `${squaresInput.value}` >= 1) {
    makeGrid(`${squaresInput.value}`, `${squaresInput.value}`, shadeBlack());
    currentInputValue = parseInt(`${squaresInput.value}`);
  } else {
    alert("Please enter a number between 1 and 100");
    makeGrid(`${currentInputValue}`, `${currentInputValue}`, shadeBlack());
  }
});



function clearColors() {
  const gridItems = document.querySelectorAll(".grid-item");
  console.log(gridItems);
  for (item of gridItems) {
      item.style.setProperty('background-color', 'white');
  }
  console.log(item.backgroundColor)
}

rainbowBtn.addEventListener('click', shadeRainbow);
blackBtn.addEventListener('click', shadeBlack);
eraseBtn.addEventListener('click', eraseColor);
clearBtn.addEventListener('click', clearColors);






