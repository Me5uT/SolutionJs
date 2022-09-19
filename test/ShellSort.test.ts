import { shellSort } from '../src';

describe('shellSort', () => {
  it('Returns a sorted array with Shell Sort Method', () => {
    expect(shellSort([5, 3, 2, 7, 4])).toEqual([2, 3, 4, 5, 7]);
  });
});
