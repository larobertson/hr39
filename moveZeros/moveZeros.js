/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  //given an array with randomly dispersed zeros
  //return an array with zeros as the end and everything else in relative order
  //iterate over the array (while loop)
    //make an end variable, that is the length of the array
    //check if item is a zero
    //if it is zero, swap its position to the end & subtract one from end
      //if swapped do not change the index
    //if not a zero add one to the index
  //exit case: when array index === array end
  
  let end = nums.length - 1;
  let index = 0;
  while(index < end) {
      if (nums[index] === 0) {
          //splice here
          nums.splice(index, 1);
          nums.push(0);
          end -= 1;
      } else {
          index += 1;
      }
  }
  return nums;
};