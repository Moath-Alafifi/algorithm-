var runningSum = function (nums) {
  let currNum = 0;
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    newArr.push((currNum += nums[i]));
  }
  return newArr;
};
runningSum([1, 2, 3, 4]);
