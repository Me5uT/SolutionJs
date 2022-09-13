import { sortWithQuick } from '../src';

describe('sortWithQuick', () => {
  it('Returns a sorted array with Quick Sort Method', () => {
    expect(sortWithQuick([5, 3, 2, 7, 4])).toEqual([2, 3, 4, 5, 7]);
  });
});
