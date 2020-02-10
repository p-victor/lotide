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

module.exports = flatten;