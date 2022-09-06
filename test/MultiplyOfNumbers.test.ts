import { multiplyOfNumbers } from '../src';

describe('multiplyOfNumbers', () => {
  it('Returns multiply of given numbers', () => {
    expect(multiplyOfNumbers([1, 2, 3, 4])).toEqual(24);
  });
});
