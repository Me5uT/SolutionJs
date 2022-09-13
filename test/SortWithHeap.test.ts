import { sortWithHeap } from '../src';

describe('sortWithHeap', () => {
  it('Returns a sorted array with Heap Sort Method', () => {
    expect(sortWithHeap([5, 3, 2, 7, 4])).toEqual([2, 3, 4, 5, 7]);
  });
});
