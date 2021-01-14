const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});

//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
