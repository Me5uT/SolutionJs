import { consecutiveNumbersInRange } from '../src';

describe('consecutiveNumbersInRange', () => {
  it('Returns an array with consecutive numbers in given range', () => {
    expect(consecutiveNumbersInRange(2, 5)).toEqual([2, 3, 4, 5]);
  });
});
