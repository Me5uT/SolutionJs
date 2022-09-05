import { firstNonConsecutive } from '../src';

describe('firstNonConsecutive', () => {
  it('find first non consecutive method works', () => {
    expect(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toEqual(6);
  });
});
