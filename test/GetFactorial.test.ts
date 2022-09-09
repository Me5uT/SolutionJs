import { getFactorial } from '../src';

describe('getFactorial', () => {
  it('Returns factorial value of given number', () => {
    expect(getFactorial(5)).toEqual(120);
  });
});
