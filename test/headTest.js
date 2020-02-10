const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([0, 10]), 0);
assertEqual(head(["s"]), "s");