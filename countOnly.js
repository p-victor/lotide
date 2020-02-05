const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🆗 Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed ${actual} !== ${expected}`);
  }
};

const countOnly = function( allItems, countedItems) {
  let returnList = {};
  for (let countedItem in countedItems) {
    for (let item of allItems) {
      if (item == countedItem) {
        returnList[countedItem] = (returnList[countedItem] || 0) + 1;
      }
    }
  }
  return returnList;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);