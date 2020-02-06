const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function(arr1, arr2) {
  let longestLength = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < longestLength; i++) {
    if (!(arr1[i] === arr2[i])) {
      return false
    }
  }
  return true;
};

const assertArraysEquals = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🆗 Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed ${actual} !== ${expected}`);
  }
};

const map = function(list, callback) {
  const results = [];

  for (let item of list) {results.push(callback(item));}

  return results;
}

//TESTS
assertArraysEquals(map( words, (word) => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"] ); //should pass
assertArraysEquals(map( words, (word) => word.toUpperCase()), ["ground", "control", "to", "major", "tom"] ); //should fail
assertArraysEquals(map( words, word => word[0]), ["g", "c", "t", "m", "t"] ); //should pass