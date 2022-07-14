var findTheDifference = function (s, t) {
    let diff = "";
    t.split("").forEach(function (val, i) {
      if (val != s.charAt(i)) diff += val;
    });
    return diff;
  };
  findTheDifference("fefe", "fefef");
  // ***********************
  var findTheDifference = function (s, t) {
    let map = {};
  
    for (let i = 0; i < s.length; i++) {
      map[s[i]] = (map[s[i]] | 0) + 1;
    }
    console.log(map);
    for (let i = 0; i < t.length; i++) {
      if (map[t[i]] !== undefined && map[t[i]] > 0) {
        map[t[i]]--;
      } else {
        return t[i];
      }
    }
  };
  findTheDifference("assss", "assssa");
  