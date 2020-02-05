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
  console.log(actual);
  console.log(expected);
  if (eqArrays(actual, expected)) {
    console.log(`🆗 Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed ${actual} !== ${expected}`);
  }
};

const without = function(array, without) {
  let finalArray = array;
  
  for (let i = 0; i < without.length; i++) {
    for (let ii = 0; ii < finalArray.length; ii++) {
      if (finalArray[ii] ===  without[i]) {
        finalArray.splice(ii);
        console.log(finalArray);
      }  
    }
  }
  return finalArray;
};

const words = ["hello", "world", "lighthouse"];
let r = without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEquals(r ,["hello", "world"]);
