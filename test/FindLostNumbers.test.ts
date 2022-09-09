import { findLostNumbers } from '../src';
const someNumbers: number[] = [1, 2, 14, 5, 7, 9];

describe('findLostNumbers', () => {
  it('Returns an array with lost numbers by given numbers', () => {
    expect(findLostNumbers(someNumbers)).toEqual([3, 4, 6, 8, 10, 11, 12, 13]);
  });
});
