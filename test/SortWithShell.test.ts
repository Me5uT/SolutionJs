import { sortWithShell } from '../src';

describe('sortWithShell', () => {
  it('Returns a sorted array with Shell Sort Method', () => {
    expect(sortWithShell([5, 3, 2, 7, 4])).toEqual([2, 3, 4, 5, 7]);
  });
});
