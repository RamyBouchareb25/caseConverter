let string = "tEst  test";
string = string.split(" ");
let upperCase = string[1].toUpperCase();
string[1].replace(string[1], upperCase);
console.log(string);
