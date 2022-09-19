import { selectionSort } from '../src';

describe('selectionSort', () => {
  it('Returns a sorted array with Selection Sort Method', () => {
    expect(selectionSort([5, 3, 2, 7, 4])).toEqual([2, 3, 4, 5, 7]);
  });
});
