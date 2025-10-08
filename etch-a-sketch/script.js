const container = document.getElementById("container");

function createGrid(size = 16) {
  container.innerHTML = ""; // clear old grid
  const total = size * size;
  const squareSize = 960 / size;

  for (let i = 0; i < total; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`; 
    });

    container.appendChild(square);
  }
}

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter new grid size (max 100):"));
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

