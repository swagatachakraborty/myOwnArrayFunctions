const map = function(mapper, array) {
  let mappedArray = new Array();
  for(element of array) {
    mappedArray.push(mapper(element));
  }
  return mappedArray;
}

const filter = function(predictor, array) {
  let filterArray = new Array();
  for(element of array) {
    if(predictor(element)) {
      filterArray.push(element);
    }
  }
  return filterArray;
}

module.exports = { map, filter };
