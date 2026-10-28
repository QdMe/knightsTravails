import { knightMoves } from "./knightsTravails.js";
describe("KnightsMoves function tests", () => {
  test("Should return the shortest path", () => {
    expect(knightMoves([0, 0], [2, 1])).toEqual([
      [0, 0],
      [2, 1],
    ]);
  });
  test("Should return the shortest path", () => {
    expect(knightMoves([1, 1], [4, 2])).toEqual([
      [1, 1],
      [3, 0],
      [4, 2],
    ]);
  });
  test("Should return the shortest path", () => {
    expect(knightMoves([3, 3], [0, 0])).toEqual([
      [3, 3],
      [1, 2],
      [0, 0],
    ]);
  });
  test("Should return the shortest path", () => {
    expect(knightMoves([0, 0], [7, 7])).toEqual([
      [0, 0],
      [2, 1],
      [4, 2],
      [6, 3],
      [4, 4],
      [6, 5],
      [7, 7],
    ]);
  });
});
