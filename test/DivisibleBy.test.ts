import { divisibleBy } from '../src';

describe('divisibleBy', () => {
  it('find numbers which are divisible by given number in array method works', () => {
    expect(divisibleBy([1, 2, 3, 4, 5, 6], 3)).toEqual([3, 6]);
  });
});
