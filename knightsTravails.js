function knightMoves(start, end) {
  if (typeof start !== "object" || start.length < 2 || start.length > 2)
    throw new Error("Start square value must be a two itemed array of numbers");
  if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7)
    throw new Error("Start square value is out of range");

  let allPaths = getPaths(start);
  let shortestPath = 1000;
  let paths = getCorrectPaths(allPaths, end);
  // find the shortest path length
  paths.forEach((path) => {
    if (path.length < shortestPath) {
      shortestPath = path.length;
    }
  });
  // find the shortest path
  if (compareArrays(paths, end)) return [paths];
  for (let i = 0; i < paths.length; i++) {
    if (paths[i].length == shortestPath) {
      return paths[i];
    }
  }
}
function getPaths(position, level = 0) {
  // Base case
  if (level == 6) return [position, [null]];
  // Push all possible next moves into the current position's nextMoves array
  let nextMoves = [position, []];
  nextMoves[1].push([position[0] + 2, position[1] + 1]);
  nextMoves[1].push([position[0] + 2, position[1] - 1]);
  nextMoves[1].push([position[0] - 2, position[1] + 1]);
  nextMoves[1].push([position[0] - 2, position[1] - 1]);
  nextMoves[1].push([position[0] + 1, position[1] + 2]);
  nextMoves[1].push([position[0] + 1, position[1] - 2]);
  nextMoves[1].push([position[0] - 1, position[1] + 2]);
  nextMoves[1].push([position[0] - 1, position[1] - 2]);
  // Recursively do the same for all the possible next moves
  for (let i = 0; i < nextMoves[1].length; i++) {
    let move = nextMoves[1][i];
    let moveIndex = nextMoves[1].indexOf(move);
    // Only if a move is not outside the board, where it's removed instead
    if (move[0] >= 8 || move[0] < 0 || move[1] >= 8 || move[1] < 0) {
      nextMoves[1].splice(moveIndex, 1);
      // Stay on the current index after removing
      i--;
    } else nextMoves[1][i] = getPaths(move, level + 1);
  }
  return nextMoves;
}

function getCorrectPaths(point, target) {
  // Base case
  if (point == null) return null;
  if (compareArrays(point[0], target)) return point[0];
  let currPoint = point[0];
  let nextMoves = point[1];
  let paths = [];
  if (point[1][0] !== null) {
    nextMoves.forEach((move) => {
      let nextMove = move[0];
      let localPaths = getCorrectPaths(move, target);
      if (localPaths.length !== 0) {
        if (localPaths !== null) {
          if (typeof localPaths[0] !== "object") {
            if (paths.length == 0) {
              let arr = [];
              arr.push(currPoint);
              arr.push(localPaths);
              paths.push(arr);
            } else {
              let arr = [];
              arr.push(currPoint);
              arr.push(localPaths);
              paths.push(arr);
            }
          } else if (typeof localPaths[0][0] == "object") {
            let arr = [];
            localPaths.forEach((path) => {
              let locArr = [];
              locArr.push(currPoint);
              path.forEach((item) => {
                locArr.push(item);
              });
              arr.push(locArr);
            });
            arr.forEach((item) => paths.push(item));
          } else {
            let arr = [];
            arr.push(currPoint);
            localPaths.forEach((path) => {
              arr.push(path);
            });
            paths.push(arr);
          }
        }
      }
    });
  }
  return paths;
}

function compareArrays(arr1, arr2) {
  return JSON.stringify(arr1) == JSON.stringify(arr2);
}
// let p = getPaths(1, 1);
// let g = getCorrectPaths(p, [1, 1]);
// console.log(g);
// console.log(knightMoves(1, [1, 1]));
export { knightMoves };
