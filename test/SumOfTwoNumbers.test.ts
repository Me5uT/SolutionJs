import { sumOfTwoNumbers } from '../src';

describe('sumOfTwoNumbers', () => {
  it('Returns sum of given two numbers', () => {
    expect(sumOfTwoNumbers(1, 1)).toEqual(2);
  });
});
