var longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs.length == 0) return prefix;
  for (let i = 0; i < strs[0].length; i++) {
    const cart = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== cart) {
        return prefix;
      }
    }
    prefix += cart;
  }
  return prefix;
};
longestCommonPrefix(["flower", "flow", "flight"]);
