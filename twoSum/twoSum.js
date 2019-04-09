/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  //given an array of numbers, and a target
  //return the indices of the numbers that add up to target in an array
  
  //iterate over the array
    //if a number is less than or equal the target, subtract it from target
      //track the index
      //track new target
      //iterate again from tracked index until locate new target === element
        //push tracked index and current index to an array
  //return array
  //time complexity is O(n^2) naive will come back and consider other solutions
  // for (let i = 0; i < nums.length; i++) {
  //   for(let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //         return [i, j];
  //     }
  //   }
  // }
  
  //better time complexity:
  //make each a dictionary lookup 'hash map'
  const map = {};
  for (let i = 0; i < nums.length - 1; i++) {
      map[(target - nums[i])] = i;
      if (nums[i + 1] in map) {
          return [map[nums[i + 1]], i + 1];
      }
  }
};