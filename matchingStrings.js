// Given a length (number) and an array of strings, return all strings that are greater than or equal to the given length.

// DO NOT use .filter() in your solution.

// DO use a for loop.

// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

// function filterLength (length, array) {
//   let filtered = [];
//   array.forEach(function(item){
//     if (item.length >= length){
//       filtered.push(item);
//     }
//   })
//   return filtered;
// }
// //O(n)

function filterLength(length, array, i=0) {
  let filtered = [];
  if (i === array.length) {
    return filtered;
  }
  
  if (array[i].length >= length) {
    filtered.push(array[i]);
  }
  return filtered.concat(filterLength(length, array, i + 1));
};