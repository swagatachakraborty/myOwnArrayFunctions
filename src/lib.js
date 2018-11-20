const map = function(mapper, array) {
  let mappedArray = new Array();
  for(elements of array) {
    mappedArray.push(mapper(elements));
  }
  return mappedArray;
}

module.exports = { map };
