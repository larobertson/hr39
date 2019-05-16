module.exports = function (arr) {
  //iterate over the array
  //find the next number in sequence(wherever it is) and move to it's position

  let swap = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[k] === i + 1) {
          [arr[i], arr[k]] = [arr[k], arr[i]]
          swap++;
        }
      }
    }
  }
  return swap;
}