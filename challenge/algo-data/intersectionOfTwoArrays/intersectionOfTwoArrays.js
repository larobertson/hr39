/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  //given two arrays
  //return all values that appear in both arrays (include duplicates)
  
  //provide an output array
  //iterate over one array, put each into a dictionary
    //add a count for the number of times it appears
  //iterate over the second array
    //look in dictinoary
    //if value exists, check count >= 1
    //push to output array
    //subtract from the count
  const output = [];
  const dict = {};
  for (let i = 0; i < nums1.length; i++) {
      dict[nums1[i]] = dict[nums1[i]] + 1 || 1;
  }
  
  for (let j = 0; j < nums2.length; j++) {
      if (dict[nums2[j]]) {
          output.push(nums2[j]);
          dict[nums2[j]] -= 1;
      }
  }
  return output;
};