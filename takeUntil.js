const takeUntil = function(array, callback) {
  const newArray = [];
  for (let item of array) {
    if(callback(item)) {break;}
    newArray.push(item);
  }
  return newArray;
};

module.exports = takeUntil;