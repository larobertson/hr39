// According to the Wikipedia's article: "The Game of Life, also known simply as Life, 
// is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). 
// Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the 
// following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state (after one update) of the board given its current 
// state. The next state is created by applying the above rules simultaneously to every cell in 
// the current state, where births and deaths occur simultaneously.

// Example:

// Input: 
// [
//   [0,1,0],
//   [0,0,1],
//   [1,1,1],
//   [0,0,0]
// ]
// Output: 
// [
//   [0,0,0],
//   [1,0,1],
//   [0,1,1],
//   [0,1,0]
// ]
// Follow up:

// Could you solve it in-place? Remember that the board needs to be updated at the same time: 
// You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, 
// which would cause problems when the active area encroaches the border of the array. How would 
// you address these problems?

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  //similar to flood fill ---> diagonals seem to count too
    //if cell dies make it a d
    //if cell lives keep it a 1
    //if cell born make it a b
  
  //we can look at each cell
    //up, up - 1 & up + 1
    //down, down - 1 & down + 1
    //left
    //right
    //keep a count of live cells (current 1's)
      //count BOTH 1's and d's
        //this should account for cells that will die
      //if count is greater than 2 && <= 3
        //cell remains a 1
      //if count is > 3 || < 2
        //cell marked as d
      //if cell === 0 && count === 3
        //cell marked as b
  
  //then go back through the matrix and if it is a d mark it as 0
  //if it is a b mark it as a 1
  
  
};