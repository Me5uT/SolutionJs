import { setAndSort } from '../src';

describe('setAndSortTwoArray', () => {
  it('Returns an array of set and sorted given arrays', () => {
    expect(
      setAndSort([1, 2, 3, 3, 2, 4, 5], [6, 7, 8, 5, 2, 9, 9, 10])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
