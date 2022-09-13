import { sortWithBubble } from '../src';

describe('sortWithBubble', () => {
  it('Returns a sorted array with Bubble Sort Method', () => {
    expect(sortWithBubble([5, 3, 2, 7, 4])).toEqual([2, 3, 4, 5, 7]);
  });
});
