const isVowel = (char) => {
  let vowels = "aieuo";
  return vowels.includes(char.toLowerCase());
};
var reverseVowels = function (s) {
  let stringArr = s.split("");
  let left = 0;
  let right = stringArr.length - 1;

  while (left < right) {
    while (left < right) {
      if (!isVowel(stringArr[left])) {
        left++;
      } else {
        break;
      }
    }
    while (left < right) {
      if (!isVowel(stringArr[right])) {
        right--;
      } else {
        break;
      }
    }
    let temp = stringArr[left];
    stringArr[left] = stringArr[right];
    stringArr[right] = temp;
    left++;
    right--;
  }
  return stringArr.join("");
};
reverseVowels("hello");
