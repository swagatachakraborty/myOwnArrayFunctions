const map = function(mapper, source) {
  let mappedArray = new Array();
  for(element of source) {
    mappedArray.push(mapper(element));
  }
  return mappedArray;
}

const filter = function(predictor, source) {
  let filterArray = new Array();
  for(element of source) {
    if(predictor(element)) {
      filterArray.push(element);
    }
  }
  return filterArray;
}

const reduce = function(reducer, init, source) {
  for(element of source) {
    init = reducer(init, element);
  }
  return init;
}

module.exports = { map, filter, reduce };
