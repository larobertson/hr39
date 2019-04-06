// Write a function that takes as its input a string and returns an array of arrays 
// as shown below sorted in descending order by frequency and then by ascending order 
// by character.

function characterFrequency (string) {
  
  let sorta = countDictionary(string);
  
  sort = sortTuples(sorta);

  return sort;
  
}


function countDictionary (string) {
  const dict = {};
  for (let i = 0; i < string.length; i++) {
    if (dict[string[i]]) {
      dict[string[i]] += 1;
    } else {
      dict[string[i]] = 1;
    }
  }
  return Object.entries(dict);
}

function sortTuples (array) {
  return array.sort((b,a) => {
  if (a[1] < b[1]) {
    return -1 } //return nothing
  if (a[1] > b[1]) {
    return 1 } //swap
  if (a[1] === b[1]) {
    if (b[0] < a[0]) {
      return -1 }
    if (a[0] > b[0]) {
      return 1 }
    }
  });
}
