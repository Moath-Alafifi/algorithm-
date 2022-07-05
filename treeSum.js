var threeSum = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let a = nums[i];
        let b = nums[j];
        let c = nums[k];
        if (a + b + c === 0) {
          arr.push([a, b, c]);
        }
      }
    }
  }
  return arr;
};
threeSum([1, 1, 2, 2, 3, 3, -1, -1, -2, -2, -3, -3]);
