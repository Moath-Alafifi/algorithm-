/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  s.split("").forEach((item, index) => {
    if (roman[item] < roman[s[index + 1]]) {
      result -= roman[item];
    } else {
      result += roman[item];
    }
  });

  return result;
};
romanToInt("DCXXI");
