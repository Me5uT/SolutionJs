import { consecutiveNumbersInRange } from '../src';

describe('consecutiveNumbersInRange', () => {
  it('find numbers between the input parameters, including method works', () => {
    expect(consecutiveNumbersInRange(2, 5)).toEqual([2, 3, 4, 5]);
  });
});
