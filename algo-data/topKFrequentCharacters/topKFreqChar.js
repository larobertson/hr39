/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  //input an array of integers
  //output, the k most frequent numbers in an array
  
  //iterate over the list and add to a hash map
  //grab the entries of the hash map object and sort by descending freq
  //then grab those at index 0 for k elements
  
  const dict = {};
  for (let i of nums) {
      dict[i] = dict[i] + 1 || 1;
  }
  
  let freq = Object.entries(dict).sort((a, b) => b[1] - a[1])
  
  const elements = [];
  for (let j = 0; j < k; j++) {
     elements.push(freq[j][0]); 
  }
  return elements;
  
};