const letterPositions = function (string) {
  let letterPositions = {};
  for (let letterIndex in string) {
    if (isLetter(string[letterIndex])) {
      if (Array.isArray(letterPositions[string[letterIndex]])) {
        letterPositions[string[letterIndex]].push(letterIndex)
      } else {
        letterPositions[string[letterIndex]] = [letterIndex];
      }
    }
  }
  return letterPositions;
};

const isLetter = function(character) {
  return character.toLowerCase() != character.toUpperCase();
}

module.exports = letterPositions;