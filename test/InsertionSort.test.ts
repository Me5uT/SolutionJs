import { insertionSort } from '../src';

describe('insertionSort', () => {
  it('Returns a sorted array with Insertion Sort Method', () => {
    expect(insertionSort([5, 3, 2, 7, 4])).toEqual([2, 3, 4, 5, 7]);
  });
});
