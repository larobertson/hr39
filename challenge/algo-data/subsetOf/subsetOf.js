// Make an array method that can return whether or not a context array is a subset of an 
// input array. To simplify the problem, you can assume that both arrays will contain only 
// strings.

Array.prototype.isSubsetOf = function(arr) {
  const set1 = new Set(arr)
  let subset = true;
  
  this.forEach(function (item) {
    if (!set1.has(item)) {
      subset = false;
    }
  })
  return subset;
};
