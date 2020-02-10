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

module.exports = eqObjects;