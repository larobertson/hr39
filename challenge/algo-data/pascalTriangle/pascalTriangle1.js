var generate = function(numRows, row, triangle) {
  //given the number of rows, create the triangle
  //each row will be + 1 in length of the previous
  //declare row = 1
  //base case is when row = numRows
  //recursive case:
      //while currRow.length < row
      //i = (row - 1, col - 1) + (row - 1, col)
      //push i to currRow
      //increment: i += 1
      //once we break out of the while loop
      //if row < numRows
          //call triangle.concat(generate(numRows, row + 1))
  triangle = triangle || [];
  row = row || 1;
  const currRow = [];
  
  if (row > numRows) {
      return triangle;
  } 
  
  let i = 0;
  while (currRow.length < row) {
      //triangle[row - 2][i - 1] + triangle[row - 2][i]
      let ele;
      if (triangle[row - 2]) { //if triangle is not empty
          if (i === 0) { //if it's the first element, just add triangle at i
              ele = triangle[row - 2][i];
          } else if (i === row - 1) { //if it's the last element, just add triangle at i - 1
              ele = triangle[row - 2][i - 1];
          } else {
              ele = triangle[row - 2][i - 1] + triangle[row - 2][i];
          }
      } else {
          ele = 1;
      }
     
      currRow.push(ele);
      i++;
  }
  triangle.push(currRow)
  if (row < numRows) {
      generate(numRows, row + 1, triangle);
  }
  return triangle;
};

module.exports = {
  generate: generate
}