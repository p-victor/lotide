const eqArrays = function(arr1, arr2) {
  let longestLength = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < longestLength; i++) {
    if (!(arr1[i] === arr2[i])) {
      return false
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🆗 Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;