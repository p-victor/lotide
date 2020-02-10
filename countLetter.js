const countLetters = function(string) {
  let lettersCount = {};
  for (let letter of string) {
    if (isLetter(letter))
    lettersCount[letter] = (lettersCount[letter] || 0) + 1;
  }
  return lettersCount;
}

function isLetter(character) {
  return character.toLowerCase() != character.toUpperCase();
}

module.exports = countLetters;