const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

assertEqual(true, true);
assertEqual(false, false);
assertEqual(false, true);
assertEqual("1", 1);
assertEqual("1", "1");

