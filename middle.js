const middle = function(array) {
  let isEven = (array.length % 2) === 0 ? true : false;
  let medianIndex = ((array.length + 1) / 2 - 1);
  let middleArr;
  if (isEven) {
    middleArr = array.slice(medianIndex, medianIndex + 2)
  } else {
    //console.log(array.slice(medianIndex, medianIndex + 1));
    middleArr = array.slice(medianIndex, medianIndex + 1)
  }
  return middleArr; 
};

module.exports = middle;