const middle = require('../middle');
const assertArraysEquals = require('../assertArraysEqual');

assertArraysEquals(middle([0, 1, 2, 3, 4, 5, 6, 7]), [3, 4] );
assertArraysEquals(middle([0, 1, 2, 3, 4, 5, 6]), [3] );