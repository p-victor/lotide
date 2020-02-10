const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🆗 Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  console.log(`object1: ${object1}`);
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      //  console.log(`Object.keys(object1[key]): ${Object.keys(object1[key])}`)
      if (typeof (object1[key]) === 'object' && (object1[key]) !== null ) {
        return eqObjects(Object.keys(object1[key]), Object.keys(object2[key]))
      }
      else if (object1[key] === object2[key]) {
        console.log(object1[key])
        continue;
      }
      else {
        console.log('here3')
        return false
      }
    }
    return true;
  }
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
const nested = { b: { a: "1", b: "2" }, a: "1" }
// eqObjects(ab, ba); // => true
// assertEqual(eqObjects(ab, ba), true); // => true
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => true
// assertEqual(eqObjects(ab, ab), false); // => true
assertEqual(eqObjects(nested, { b: { a: "2", b: "2" }, a: "1" }), true) // => false
assertEqual(eqObjects(nested, { b: { a: "1", b: "2" }, a: "1" }), true) // => true
