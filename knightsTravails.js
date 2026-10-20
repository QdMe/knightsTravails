let target = [4, 4];

function getPaths(position, nextMoves = []) {
  // Base case
  if (areEqual(position, target)) return;

  // Push all possible next moves into the current position's nextMoves array
  nextMoves = [position, []];
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
    } else getPaths(move, nextMoves);
  }
  return nextMoves;
}

function areEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
console.log(getPaths([7, 7]));
