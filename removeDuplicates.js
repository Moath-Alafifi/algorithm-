var removeDuplicates = function (nums) {
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      newArr.push(nums[i]);
    }
  }
  return newArr.length;
};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// *******************
var removeDuplicates = function (nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (newArr.indexOf(nums[i]) === -1) {
      newArr.push(nums[i]);
    }
  }
  return newArr.length;
};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// ***********************************************
var removeDuplicates = function (nums) {
  let obj = {};
  for (let i of nums) {
    obj[i] = true;
  }
  let keys = Object.keys(obj);

  return keys.length;
};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
//  *****************
var removeDuplicates = function (nums) {
  let index = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      index++;
    }
  }
  return index;
};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
