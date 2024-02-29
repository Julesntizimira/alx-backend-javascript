import { assert } from 'chai';
import calculateNumber from './0-calcul.js';

describe('calculateNumber', () => {
  it('case1', () => {
    assert(calculateNumber(1, 3), 4);
  });
  it('case2', () => {
    assert(calculateNumber(1, 3.7), 5);
  });
  it('case3', () => {
    assert(calculateNumber(1.2, 3.7), 5);
  });
  it('case4', () => {
    assert(calculateNumber(1.5, 3.7), 6);
  });
});
