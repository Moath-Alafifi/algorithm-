var majorityElement = function (nums) {
    let obj = {};
    let half = nums.length / 2;
    for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] = (obj[nums[i]] | 0) + 1;
      if (obj[nums[i]] > half) {
        return nums[i];
      }
    }
  };
  majorityElement([3, 2, 3]);
  // ******************************
  var majorityElement = function (nums) {
    let obj = {};
    let half = Math.floor(nums.length / 2);
    for (let num of nums) {
      obj[num] = obj[num] + 1 || 1;
    }
    for (let key in obj) {
      if (obj[key] > half) {
        return key;
      }
    }
  };
  majorityElement([3, 2, 3]);
  