import { sumOfNumbersInArray } from '../src';

describe('sumOfNumbersInArray', () => {
  it('sum of numbers in array method works', () => {
    expect(sumOfNumbersInArray([1, 5])).toEqual(6);
  });
});
