const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for [2, 3, 4] === [2, 3, 4]", () => {
    assert.strictEqual(eqArrays([2 , 3, 4], [2 , 3, 4]), true);
  });
  it("returns '5' for ['5']", () => {
    assert.deepStrictEqual(eqArrays(['5', '4', '32'], ['5', '4', '32']), true); 
  });
});