const GRID_WIDTH = 19;
const GRID_HEIGHT = 29;

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_WIDTH) + 1,
    y: Math.floor(Math.random() * GRID_HEIGHT) + 1,
  };
}

export function outsideGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_WIDTH ||
    position.y < 1 ||
    position.y > GRID_HEIGHT
  );
}
