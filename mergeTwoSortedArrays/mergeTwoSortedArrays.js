// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold
//  additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  //nums1 is always nums1.length + nums2.length longer than nums2
    //however, there may be more elements in nums2
    //the number of elements for both arrays are m and n
  //both arrays are sorted
  //while there are elements in BOTH arrays
  //compare the first element of both
    //if nums2 is > nums1, continue;
      //increment nums1 index
    //if nums2 < nums1
      //insert nums2 into nums1 at nums1[i]
        //use splice?
      //then pop a zero off
      //increment nums2 index
  //when done, to account for unequal length arrays
  //use a while counter for index j < n
    //splice for the difference, replacing the zeros at the end
  
  let i = 0;
  let j = 0;
  while (m > i && n > j) {
      if (nums2[j] > nums1[i]) {
          i++;
      } else {
          nums1.splice(i, 0, nums2[j]);
          nums1.pop();
          j++;
          i++;
          m++;
      }
  }
  
  while (n > j) {
      nums1.splice(i, 1, nums2[j]);
      j++;
      i++;
  }
};