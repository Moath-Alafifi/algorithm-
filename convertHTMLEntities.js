function convertHTML(str) {
  let obj = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  let arrOfStr = str.split("");

  for (let i = 0; i < arrOfStr.length; i++) {
    if (obj.hasOwnProperty([arrOfStr[i]])) {
      arrOfStr[i] = obj[arrOfStr[i]];
    }
  }
  return arrOfStr.join("");
}

convertHTML("Dolce & Gabbana");
