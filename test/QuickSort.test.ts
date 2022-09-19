import { quickSort } from '../src';

describe('quickSort', () => {
  it('Returns a sorted array with Quick Sort Method', () => {
    expect(quickSort([5, 3, 2, 7, 4])).toEqual([2, 3, 4, 5, 7]);
  });
});
