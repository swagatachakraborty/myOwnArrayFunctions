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
  let clone = source.slice();
  if(init == undefined) {
    init = clone.shift();
  }
  for(element of clone) {
    init = reducer(init, element);
  }
  return init;
}

const reduceRecursive = function(reducer, source, init) {
  let clone = source.slice();
  if(init == undefined) {
    init = clone.shift();
  }
  if(clone.length == 0) {
    return init;
  }
  if(clone.length == 1) {
    return reducer(init, clone.shift());
  } 
  let firstItem = clone.shift();
  return reduceRecursive(reducer, clone, reducer(init, firstItem));
}

const mapRecursive = function(mapper, source) {
  let clone = source.slice();
  if(clone.length == 0) {
    return [];
  }
  return [mapper(clone.shift())].concat(mapRecursive(mapper, clone));
}

const filterRecursive = function(filter, source) {
  let clone = source.slice();
  if(clone.length == 0 ) {
    return [];
  }
  let init = []
  if(filter(clone[0])) {
    init.push(clone[0]);
  }
  return init.concat(filterRecursive(filter, clone.slice(1)));
}

const mapperToReducer = function(mapper) {
  return function(result, element){
    return result.concat(mapper(element));
  }
}

const mapPrime = function(mapper, source) {
  let clone = source.slice();
  return reduce(mapperToReducer(mapper), clone, []);
}

const filterToReducer = function(filter) {
  return function(result, element){
    if( filter(element) ) {
      return result.concat(element);
    }
    return result;
  }
}

const filterPrime = function(filter, source) {
  let clone = source.slice();
  return reduce(filterToReducer(filter), clone, []);
}

module.exports = { map, mapPrime, mapRecursive, reduce, reduceRecursive, filter, filterPrime, filterRecursive};
