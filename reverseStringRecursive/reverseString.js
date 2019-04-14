/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  //input is a string, broken up into an array
  //output: a mutated array of the reversed string
  
  //divide and conquer
  //use two pointers, one at each end to swap characters
    //each recursive call, move those pointers one step
    //base case, pointers cross
  
  //make a start and end helper
  //keep calling it to swap letters
  let swapper = function(start, end) {
      
      if (end <= start) {
          return s;
      }
      let first = s[start];
      let last = s[end];
      s[start] = last;
      s[end] = first;
      
      return swapper((start + 1), (end - 1));
  }
  
  return swapper(0, s.length - 1)
  
};