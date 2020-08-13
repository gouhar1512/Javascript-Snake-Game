let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };
let leftBtn = document.getElementsByClassName("left-btn")[0];
leftBtn.addEventListener("click", () => {
  moveSnake("Left");
});
let rightBtn = document.getElementsByClassName("right-btn")[0];
rightBtn.addEventListener("click", () => {
  moveSnake("Right");
});
let upBtn = document.getElementsByClassName("up-btn")[0];
upBtn.addEventListener("click", () => {
  moveSnake("Up");
});
let downBtn = document.getElementsByClassName("down-btn")[0];
downBtn.addEventListener("click", () => {
  moveSnake("Down");
});

function moveSnake(dir) {
  switch (dir) {
    case "Up":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "Down":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "Left":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "Right":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
}

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
