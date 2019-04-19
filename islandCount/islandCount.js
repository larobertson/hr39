// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
// An island is surrounded by water and is formed by connecting adjacent lands horizontally 
// or vertically. You may assume all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  //input: matrix of islands
  //output: a count of islands
  
  //iterate over the matrix
  
  //if element is a 1, look deeper (until no more 1's)
    //look up, down, left, right
      //if 1 found,with no '.'
        //add it to the count & change to '.'
        //then fill all adjacent 1's to '.'
      //in following cases, if a '.' is adjacent
        //do not count another island, mark all adjacent 1's as '.'
  
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
          if (grid[r][c] === "1"){
              islandMarker(grid, r, c);
              count ++;
          }
      }
  }
  return count;
};

const islandMarker = function(grid, row, col) {
  if (grid[row][col] === "1") {
      //paint grid to .
      grid[row][col] = ".";
  } else {
      return grid[row][col];
  }
  //look up down left and right
  if (row > 0) islandMarker(grid, row - 1, col); //up
  if (row < grid.length - 1) islandMarker(grid, row + 1, col); //down
  if (col > 0) islandMarker(grid, row, col - 1); //left
  if (col < grid[row].length - 1) islandMarker(grid, row, col + 1); //right
  
}

//O(n^3) ?