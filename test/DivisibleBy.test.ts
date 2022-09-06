import { divisibleBy } from '../src';

describe('divisibleBy', () => {
  it('Returns an array with divisible numbers by given number', () => {
    expect(divisibleBy([1, 2, 3, 4, 5, 6], 3)).toEqual([3, 6]);
  });
});
