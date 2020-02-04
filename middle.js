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

const middle = function(array) {
  let isEven = (array.length % 2) === 0 ? true : false;
  let medianIndex = ((array.length + 1) / 2 - 1);
  let middleArr;
  if (isEven) {
    console.log("been here")
    middleArr = array.slice(medianIndex, medianIndex + 2)
  } else {
    //console.log(array.slice(medianIndex, medianIndex + 1));
    middleArr = array.slice(medianIndex, medianIndex + 1)
  }
  return middleArr; 
};


assertArraysEquals(middle([0, 1, 2, 3, 4, 5, 6, 7]), [3, 4] );
assertArraysEquals(middle([0, 1, 2, 3, 4, 5, 6]), [3] );