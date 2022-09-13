import { findUnique } from '../src';

describe('findUnique', () => {
  it('Returns an array with unique elements of given array', () => {
    expect(findUnique([1, 'a', 2, 'b', 3, 3, 'a'])).toEqual([
      1,
      'a',
      2,
      'b',
      3,
    ]);
  });
});
