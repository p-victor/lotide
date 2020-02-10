const without = function(array, without) {
  let finalArray = []
  
  for (let i = 0; i < without.length; i++) {
    for (let ii = 0; ii < array.length; ii++) {
      if (array[ii] !==  without[i]) {
        finalArray.push(array[ii]);
      }  
    }
  }
  return finalArray;
};

module.exports = without;