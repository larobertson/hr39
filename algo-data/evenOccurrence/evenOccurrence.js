// Find the first item that occurs an even number of times in an array. Remember to handle
// multiple even-occurrence items and return the first one. Return null if there are no
// even-occurrence items.

function evenOccurrence (arr) {
  //iterate over input arr
  //track number of times item occurs in array
    //store count in a dictionary
  //find the first instance of item that is an even number
    //go back through array and see if that instance in dict is even
    //if so return it
    
  let dict = {};
  for (let i = 0; i < arr.length; i++) {
    if (dict[arr[i]] === undefined) {
      dict[arr[i]] = 1;
    } else {
      dict[arr[i]] += 1;
    }
  }
  
  for (let j = 0; j < arr.length; j++) {
    if (dict[arr[j]] % 2 === 0) {
      return arr[j];
    }
  }
  return null;
}


