import { sumOfNumbers } from '../src';

describe('sumOfNumbers', () => {
  it('Returns sum of numbers in given array', () => {
    expect(sumOfNumbers([1, 5])).toEqual(6);
  });
});
