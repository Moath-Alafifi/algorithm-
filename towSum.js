/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let previousValue = {};

  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    let neededValue = target - currentNumber;
    let index2 = previousValue[neededValue];
    if (index2 != null) {
      return [index2, i];
    } else {
      previousValue[currentNumber] = i;
    }
  }
};
twoSum([3, 2, 4], 6);
