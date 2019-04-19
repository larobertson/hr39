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