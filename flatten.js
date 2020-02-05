const eqArrays = function (arr1, arr2) {
  let longestLength = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < longestLength; i++) {
    if (!(arr1[i] === arr2[i])) {
      return false
    }
  }
  return true;
};

const assertArraysEquals = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🆗 Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed ${actual} !== ${expected}`);
  }
};

const flatten = function (array) {
  let flatennedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      let nestedArray = array[i];
      for (let ii = 0; ii < nestedArray.length; ii++) {
        flatennedArray.push(array[i][ii]);
      }
    } else {
      flatennedArray.push(array[i]);
    }
  }
  return flatennedArray;
}

assertArraysEquals(flatten([1, 2, [3, 4], 5, 6]), [1, 2, 3, 4, 5, 6]);
