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

const takeUntil = function(array, callback) {
  const newArray = [];
  for (let item of array) {
    if(callback(item)) {break;}
    newArray.push(item);
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEquals(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEquals(results2,  [ 'I\'ve', 'been', 'to', 'Hollywood' ]);