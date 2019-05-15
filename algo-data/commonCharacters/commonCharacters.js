// Write a function that accepts two strings as arguments, and returns only the 
// characters that are common to both strings.

// Your function should return the common characters in the same order that they appear 
// in the first argument. Do not return duplicate characters and ignore whitespace in your 
// returned string.

// Example: commonCharacters('acexivou', 'aegihobu')

// Returns: 'aeiou'

// commonCharacters = function(string1, string2){
//   let dict = {};
 
  
//   for (let i of string2) {
//     if (i === ' ') {
//       dict[i] === 2;
//     } else {
//       dict[i] = 1; 
//     }
//   }
  
//   let common = '';
  
//   for (let j of string1) {
//     if (dict[j] === 1) {
//       common += j;
//       dict[j] += 1;
//     }
//   }

//   return common;
// };
// time complexity O(2n)

commonCharacters = function(string1, string2) {
  let common = '';
  for (i of string1) {
    if (i !== ' ') {
      if (string2.includes(i)) {
        if (!common.includes(i))
          common += i;
      }
    }
  }
  return common;
}

//time complexity here is very bad, while it looks cleaner, .includes is a
//linear search, making this worst case O(n^3)