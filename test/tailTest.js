const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
