const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🆗 Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in Object.keys(object1)) {
      console.log(Object.keys(object1)[key]);
      console.log(Object.keys(object2)[key]);
      if (!(Object.keys(object1)[key] === Object.keys(object2)[key]) ) {
        console.log("oops");
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => true
assertEqual(eqObjects(ab, ab), false); // => true
