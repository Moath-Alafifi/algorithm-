/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reverseStr = x.toString().split("").reverse().join("");
  return reverseStr == x;
};
isPalindrome(11);
