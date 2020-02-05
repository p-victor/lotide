const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🆗 Assertion passed ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed ${actual} !== ${expected}`);
  }
};

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

console.log(countLetters("aaabb hhs"))