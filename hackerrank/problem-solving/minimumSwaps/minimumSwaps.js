module.exports = function (arr) {
  //iterate over the array
  //find the next number in sequence(wherever it is) and move to it's position

  let swap = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== i + 1) {
      while(arr[k] !== i + 1) {
        if (arr[k] === i + 1) {
          [arr[i], arr[k]] = [arr[k], arr[i]]
          swap++;
        }
      }
    }
  }
  return swap;
}

// for (let k = i; k < arr.length; k++) {
//   if (arr[k] === i + 1) {
//     [arr[i], arr[k]] = [arr[k], arr[i]]
//     swap++;
//   }
// }