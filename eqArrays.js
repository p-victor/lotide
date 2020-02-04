const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🆗 Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  const jsonArr1 = JSON.stringify(arr1);
  console.log(jsonArr1);
  const jsonArr2 = JSON.stringify(arr2);
  console.log(jsonArr2);

  if (jsonArr1.length === jsonArr2.length) {
    for (let i = 0; i < jsonArr1.length; i++) {
      if (jsonArr1[i] !== jsonArr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, [2, [5,3]]], [1, 2, [2,[5,3]]]), true); // => should PASS
assertEqual(eqArrays([1, 2, [2, [5,3]]], [1, 2, [2,[5,3]]]), true); // => should PASS
