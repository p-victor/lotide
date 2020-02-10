const countOnly = function (allItems, countedItems) {
  let returnList = {};
  for (let countedItem in countedItems) {
    if (countedItems[countedItem] === true) {
      for (let item of allItems) {
        if (item == countedItem) {
          returnList[countedItem] = (returnList[countedItem] || 0) + 1;
        }
      }
    }
  }
  return returnList;
}

module.exports = countOnly;