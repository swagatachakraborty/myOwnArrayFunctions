let assert = require("assert");
let { map, filter, reduce } = require("../src/lib.js");
let { square, findLength } = require("../src/callbackFunctions.js");
let { isOdd, isEven } = require("../src/callbackFunctions.js");
let { add, findMax } = require("../src/callbackFunctions.js");

describe('map', function() {
  it('Should map empty array to another empty array', function () {
    assert.deepEqual(map(square, []), []);
    assert.deepEqual(map(findLength, []), []);
  })

  it('Should work array of one element ', function () {
    assert.deepEqual(map(square, [2]), [4]);
    assert.deepEqual(map(square, [3]), [9]);

    assert.deepEqual(map(findLength, ["a"]), [1]);
    assert.deepEqual(map(findLength, ["Swagata"]), [7]);
    assert.deepEqual(map(findLength, [["Swagata"]]), [1]);
  })

  it('Should work for array with multiple elements', function() {
    assert.deepEqual(map(square, [0,1]), [0,1]);
    assert.deepEqual(map(square, [2,5]), [4,25]);

    assert.deepEqual(map(findLength, ["ab", "abc"]), [2,3]);
    assert.deepEqual(map(findLength, [[1,2], ["abc","b","abc"]]), [2,3]);
  })
})

describe('filter', function() {
  it('Should filter empty array to another empty array', function () {
    assert.deepEqual(filter(isOdd, []), []);
    assert.deepEqual(filter(isEven, []), []);
  })

  it('Should work array of one element ', function () {
    assert.deepEqual(filter(isOdd, [2]), [ ]);
    assert.deepEqual(filter(isOdd, [3]), [3]);

    assert.deepEqual(filter(isEven, [7]), [ ]);
    assert.deepEqual(filter(isEven, [4]), [4]);
  })

  it('Should work for array with multiple elements', function() {
    assert.deepEqual(filter(isOdd, [0,1]), [1]);
    assert.deepEqual(filter(isOdd, [2,5]), [5]);

    assert.deepEqual(filter(isEven, [2, 3, 4]), [2,4]);
    assert.deepEqual(filter(isEven, [10,11,3]), [10]);
  })
})

describe('reduce', function() {
  it('Should reduce empty array to accumulator value', function () {
    assert.deepEqual(reduce(add, 0, []), 0);
    assert.deepEqual(reduce(findMax, 0, []), 0);
  })

  it('Should work array of one element ', function () {
    assert.deepEqual(reduce(add, 0, [2]), 2);
    assert.deepEqual(reduce(add, 0, [3]), 3);

    assert.deepEqual(reduce(findMax, 0, [7]), 7);
    assert.deepEqual(reduce(findMax, 0, [4]), 4);
  })

  it('Should work for array with multiple elements', function() {
    assert.deepEqual(reduce(add, 0, [0,1]), 1);
    assert.deepEqual(reduce(add, 0, [2,5]), 7);

    assert.deepEqual(reduce(findMax, 0, [2, 3, 4]), 4);
    assert.deepEqual(reduce(findMax, 0, [10,11,3]), 11);
  })
})
