function myReplace(str, before, after) {
  if (before.charAt(0) === before.toUpperCase().charAt(0)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
