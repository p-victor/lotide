const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🆗 Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let longestLength = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < longestLength; i++) {
    if (!(arr1[i] === arr2[i])) {
      return false
    }
  }
  return true;
}

/*
----
Much slower but recursive
----

const eqArrays = function(arr1, arr2) {
  const jsonArr1 = JSON.stringify(arr1);
  const jsonArr2 = JSON.stringify(arr2);

  if (jsonArr1 === jsonArr2) {
    return true;
  }
  return false;
}
*/
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, [2, [5,3]]], [1, 2, [2,[5,3]]]), true); // => should PASS
assertEqual(eqArrays([1, 2, [2, [5,3]]], [1, 2, [2,[5,3]]]), true); // => should PASS
