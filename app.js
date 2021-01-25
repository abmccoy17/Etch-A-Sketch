const container = document.querySelector('#container');
const squaresInput = document.querySelector('#squaresInput');
const changeGridBtn = document.querySelector('#changeGridBtn');

let currentInputValue = 0;

//Function to program the color of the shaded squares
function shadeRows () {
  container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
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
makeGrid(16, 16, shadeRows());

//Event listener to change the layout of the grid
changeGridBtn.addEventListener('click', () => {
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  if (`${squaresInput.value}` >= 4 && `${squaresInput.value}` <= 33) {
    makeGrid(`${squaresInput.value}`, `${squaresInput.value}`, shadeRows());
    currentInputValue = parseInt(`${squaresInput.value}`);
  } else {
    alert('Please enter a number larger than or equal to 4 or a number smaller than or equal to 33');
    makeGrid(`${currentInputValue}`, `${currentInputValue}`, shadeRows());
  }
});







