// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`🆗 Assertion passed ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ Assertion failed ${actual} !== ${expected}`);
//   }
// };

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

const assertObjectEquals =  function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
        console.log(`🆗 Assertion passed ${inspect(actual)} === ${inspect(expected)}`);
      } else {
        console.log(`❌ Assertion failed ${inspect(actual)} !== ${inspect(expected)}`);
      }
}

assertObjectEquals({n: 3, s: "s"}, {n: 3, s: "so"});
console.log(eqObjects({n: 3, s: "s"}, {a :"", s: "s", l: true}));
