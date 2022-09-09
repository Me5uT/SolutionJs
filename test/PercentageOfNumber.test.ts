import { percentageOfNumber } from '../src';

describe('percentageOfNumber', () => {
  it('Return the given percentage of the number', () => {
    expect(percentageOfNumber(100, 6)).toEqual(6);
  });
});
