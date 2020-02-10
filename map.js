const map = function(list, callback) {
  const results = [];

  for (let item of list) {results.push(callback(item));}

  return results;
}

module.exports = map;