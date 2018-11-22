const map = function(mapper, source) {
  let mappedArray = new Array();
  for(element of source) {
    mappedArray.push(mapper(element));
  }
  return mappedArray;
}

const filter = function(predicate, source) {
  let filterArray = new Array();
  for(element of source) {
    if(predicate(element)) {
      filterArray.push(element);
    }
  }
  return filterArray;
}

const reduce = function(reducer, source, init) {
  let sourceCopy = source.slice();
  if(init == undefined) {
    init = sourceCopy.shift();
  }
  for(element of sourceCopy) {
    init = reducer(init, element);
  }
  return init;
}

const reduceRecursive = function(reducer, source, init) {
  let sourceCopy = source.slice();
  if(init == undefined) {
    init = sourceCopy.shift();
  }
  if(sourceCopy.length == 0) {
    return init;
  }
  if(sourceCopy.length == 1) {
    return reducer(init, sourceCopy.pop());
  } 
  return reducer( sourceCopy.pop(), reduceRecursive(reducer, sourceCopy, init ) );
}

module.exports = { map, filter, reduce, reduceRecursive};
