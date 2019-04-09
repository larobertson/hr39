/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  //input is a string
  //output is a new string in a different order
  //iterate over the string
  //add each char to a dictionary
    //if it's already in there add a count
    //if it's not add it and count = 1
  //then use obj.entries.sort((a, b) => a[2] - b[2]).join('')
  const dict = {};
  for (let i of s) {
      dict[i] = dict[i] + 1 || 1;
  }
  
  let freq = Object.entries(dict).sort((a, b) => b[1] - a[1]);
  let chars = '';
  for (let j of freq) {
      while(j[1] > 0) {
          chars += j[0];
          j[1] -= 1;
      }
  }
  return chars;
};