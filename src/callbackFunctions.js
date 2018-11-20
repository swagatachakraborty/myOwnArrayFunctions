const square = function(number) {
  return number*number;
}

const findLength = function(string) {
  return string.length;
}

const isOdd = function(number) {
  return number % 2 != 0;
}

const isEven = function(number) {
  return !isOdd(number);
}

const add = function(value1, value2) {
  return value1 + value2;
}

const findMax = function(value1, value2) {
  return value1 > value2 ? value1 : value2;
}

module.exports = { square, findLength, isOdd, isEven, add, findMax };
