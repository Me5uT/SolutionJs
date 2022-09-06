import { firstNonConsecutive } from '../src';

describe('firstNonConsecutive', () => {
  it('Returns first non consecutive number', () => {
    expect(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toEqual(6);
  });
});
