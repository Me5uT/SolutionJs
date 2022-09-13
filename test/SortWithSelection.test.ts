import { sortWithSelection } from '../src';

describe('sortWithSelection', () => {
  it('Returns a sorted array with Selection Sort Method', () => {
    expect(sortWithSelection([5, 3, 2, 7, 4])).toEqual([2, 3, 4, 5, 7]);
  });
});
