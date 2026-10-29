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
  test("Should return the start square if target is also the start square", () => {
    expect(knightMoves([7, 7], [7, 7])).toEqual([[7, 7]]);
  });
  test("Should throw error if given an incorrect start square type", () => {
    expect(() => {
      knightMoves(0, [7, 7]);
    }).toThrow(
      new Error("Start square value must be a two itemed array of numbers"),
    );
  });
  test("Should throw error if given an incorrect start square format", () => {
    expect(() => {
      knightMoves([0], [7, 7]);
    }).toThrow(
      new Error("Start square value must be a two itemed array of numbers"),
    );
    expect(() => {
      knightMoves([2, 3, 4], [7, 7]);
    }).toThrow(
      new Error("Start square value must be a two itemed array of numbers"),
    );
  });
  test("Should throw error if start value is out of the range of the game board", () => {
    expect(() => {
      knightMoves([8, 8], [7, 7]);
    }).toThrow(new Error("Start square value is out of range"));
  });
});
