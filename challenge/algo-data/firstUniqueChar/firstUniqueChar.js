/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  //given a string of lower case characters
  //return index of first non-repeating character
  
  //iterate over string to create a count dictionary
  //iterate over again and use dict lookup time to find first non-repeat
  const count = {};
  for (let i of s) {
      count[i] = count[i] + 1 || 1;
  }
  
  for (let k = 0; k < s.length; k++) {
      if (count[s[k]] === 1) {
          return k;
      }
  }
  return -1;
};