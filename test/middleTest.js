const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepStrictEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3, 2] for [5, 3, 2 ,1]", () => {
    assert.deepStrictEqual(middle([5, 3, 2 ,1]), [3, 2]); 
    assert.deepStrictEqual(middle([5, [3, 2] ,1]), [[3, 2]]); 
  });
});